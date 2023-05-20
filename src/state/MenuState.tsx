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
        "item": "menu",
        "0": {
            "item": "Check balance",
            "0": { "item": "GSM", "page": "/balance" },
            "1": { "item": "Airtel Money" },
            "*": { "item": "Go Back" },
            "#": { "item": "Main Menu" }

        },
        "1": {
            "item": "Recharge Airtime",
            "0": { "item": "Recharge for Self", "page": "/amount"  },
            "1": { "item": "Recharge for Others"},
            "#": { "item": "Go Back" }
        },
        "2": { "item": "Buy Bundle" },
        "3": { "item": "Airtel Money Balance", },
        "4": { "item": "Send Money" },
        "5": { "item": "Pay Bill" }

    }
};

var currentMenu: any = menu["0"];

var getNextMenu = (i: string): any => {
    var newMenu = currentMenu[i as keyof typeof currentMenu];
    if (newMenu === undefined)
        return "error";
    currentMenu = newMenu;
    return currentMenu;
}

export { getNextMenu, currentMenu };
