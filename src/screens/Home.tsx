import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"
import "./Screen.css"

export function Home() {
    const [inputText, setInputText] = useState("");
    const navigateOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

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
            <form> <input type="text" name="option" /> <input type="button" value="->" style={{ textEmphasis: "ButtonText" }} /></form>    
        </div >
    )
}