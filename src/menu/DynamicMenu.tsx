import { currentMenu } from "../state/MenuState";
import "./Menu.css"

export function DynamicMenu({ thisMenu, navigateMenu }: any) {
    
    var getListItems = (screen: Object): any => {
        return Object.entries(screen).filter(([key, arr]) => { return key !== "item" }).map(([key, arr]) => {
            return (
                <li className="dynamicMenuListItems" key={key} onClick={()=>navigateMenu(key)}>
                    {"" + key + " " + arr["item"]}
                </li>
            );
        });
    }

    return (
        <div className="dynamicMenu">
            <ul style={{ listStyleType: "none" , paddingLeft:"1em", display:"flex", flexDirection:"column", gap:"1em"}} >
                {getListItems(thisMenu)}
            </ul>
        </div >
    )
}