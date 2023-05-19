import { currentMenu } from "../state/NavigationData";
import "./Screen.css"

export function DynamicMenu({ thisMenu }: any) {

    var getListItems = (screen: Object): any => {
        return Object.entries(screen).filter(([key, arr]) => { return key !== "item" }).map(([key, arr]) => {
            return (
                <li key={key}>
                    {"" + key + " " + arr["item"]}
                </li>
            );
        });
    }

    return (
        <div className="screen">
            <ul style={{ listStyleType: "none" }} >
                {getListItems(thisMenu)}
            </ul>
        </div >
    )
}