import { Link } from "react-router-dom"
import "./Screen.css"
import "../inputbox/InputBox"
import { InputBox } from "../inputbox/InputBox"
import { FormEvent, ChangeEvent } from "react"
import { HomeScreen } from "../homescreen/HomeScreen"

export function Balance() {
    return (
        <div className="screen">
            <p style={{fontSize:"1.25em"}}>Your balances</p>
            <div style={{ flex: "1" }}></div>

            <HomeScreen />
        </div>
    )
}