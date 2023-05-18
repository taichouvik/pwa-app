// var items = new Map();
// items.set("0",
//     {
//         "0": { "item": "Check balance" },
//         "1": { "item": "Recharge Airtime",  },
//         "2": { "item": "Buy Bundle" },
//         "3": {"item": "Airtel Money Balance",},
//         "4": { "item": "Send Money" },
//         "5": { "item": "Pay Bill" }
//     }
// );

var menu =
{
    "0": {
        "0": { "item": "Check balance" },
        "1": {
            "item": "Recharge Airtime", "next": {
                "0": { "item": "Recharge for Self" },
                "1": { "item": "Recharge for Others", "next": { "item": "Enter Amount" } },
                "#": { "item": "Go Back" }
            },
        },
        "2": { "item": "Buy Bundle" },
        "3": { "item": "Airtel Money Balance", },
        "4": { "item": "Send Money" },
        "5": { "item": "Pay Bill" }
    }
};

var currentScreen: any[] =[];

var push=(i:number|string) : any=>{
   var lastScreen=currentScreen[currentScreen.length-1];
   if(lastScreen===undefined){
    lastScreen=menu[0];
    currentScreen.push(lastScreen);
    return getListItems(lastScreen);
   }

   var newScreen=lastScreen[i];
   if(newScreen === undefined)
    return undefined;

   currentScreen.push(newScreen);
   return getListItems(newScreen); 
}

var getListItems=(screen:Object) : any=>{
    return Object.entries(screen).map(([key, arr]) => {
        return (
            <li key={key}>
                {"" + key +" " + arr["item"]}
            </li>
        );
    });
}

export {push};
