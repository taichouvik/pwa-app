import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { DynamicMenu } from "./DynamicMenu";
import { currentMenu, getNextMenu } from "../state/NavigationData";

import "./Screen.css"
import { HomeScreen } from "../homescreen/HomeScreen";
import { InputBox } from "../inputbox/InputBox";


export function Home() {
    const [inputText, setInputText] = useState("");
    const [thisMenu, setThisMenu] = useState(currentMenu);
    const navigate = useNavigate();

    const navigateOnSubmit = (event: Event) => {
        event.preventDefault();
        var newMenu = getNextMenu(inputText);
        if (newMenu["page"] !== undefined) {
            navigate(newMenu["page"]);
        }
        setThisMenu(newMenu);

    }
    return (
        <div className="screen">
            <div>Welcome, Hitesh Jain!</div>
            <div>Click any option or enter your input below:</div>

            <ul style={{ listStyleType: "none" }} >
                <li>0 Check balance</li>
                <li><Link to="/recharge">1 Recharge Airtime</Link></li>
                <li>2 Buy Bundle</li>
                <li>3 Airtel Money Balance</li>
                <li>4 Send Money</li>
                <li>5 Pay Bill</li>
            </ul>
            <DynamicMenu thisMenu={thisMenu} />
            <InputBox onSubmit={(event: Event) => { navigateOnSubmit(event) }} onChange={(event : React.ChangeEvent<HTMLInputElement>) => setInputText(event.target.value)}/>
            <HomeScreen/>
        </div >
    )
}