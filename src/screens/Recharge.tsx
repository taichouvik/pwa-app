import { Link } from "react-router-dom"
import "./Screen.css"

export function Recharge() {
    return (
        <div className="screen">
            <ul style={{ listStyleType: "none" }} >
                <li><Link to="/amount">0 Recharge for self</Link></li>
                <li>1 Recharge for Others</li>
                <li>2 Airtel Money Balance</li>
                <li># Go Back</li>
            </ul>
        </div>
    )
}