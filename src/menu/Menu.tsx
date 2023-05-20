import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { currentMenu, getNextMenu } from "../state/MenuState";

import "./Menu.css"
import { HomeScreen } from "../homescreen/HomeScreen";
import { InputBox } from "../inputbox/InputBox";
import { DynamicMenu } from "./DynamicMenu";


export function Menu() {
    const [inputText, setInputText] = useState("");
    const [thisMenu, setThisMenu] = useState(currentMenu);
    const navigate = useNavigate();

    const navigateMenuOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var newMenu = getNextMenu(inputText);
        if (newMenu["page"] !== undefined) {
            navigate(newMenu["page"]);
        }
        setThisMenu(newMenu);
    };

    const navigateMenu = (key: string) => {
        var newMenu = getNextMenu(key);
        if (newMenu["page"] !== undefined) {
            navigate(newMenu["page"]);
        }
        setThisMenu(newMenu);
    };

    const updateSelectedItem = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    };

    return (
        <div className="menu">
            <p>Welcome, Hitesh Jain!</p>
            <p>Click any option or enter your input below:</p>
            <DynamicMenu thisMenu={thisMenu} navigateMenu={navigateMenu}/>
            <InputBox onSubmit={navigateMenuOnSubmit} onChange={updateSelectedItem} />
            <HomeScreen />
        </div >
    )
}