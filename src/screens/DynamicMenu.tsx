import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"
import "./Screen.css"
import "../state/NavigationData"
import { push } from "../state/NavigationData";

export function DynamicMenu() {
    const [inputText, setInputText] = useState("");
    const [listItems, setListItems] = useState(undefined);

    
    setListItems(push(inputText));
    const navigateOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setListItems(push(inputText));

    }

    return (
        <div className="screen">
            {listItems}
            <ul style={{ listStyleType: "none" }} >
                
            </ul>
            <form /* onSubmit={(event) => { navigateOnSubmit(event) }} */> <input onChange={(event)=>setInputText(event.target.value)} type="text"/> <input type="button" value="->" style={{ textEmphasis: "ButtonText" }} /></form>
        </div >
    )
}