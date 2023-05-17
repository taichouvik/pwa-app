import { Link } from "react-router-dom"

export function Recharge() {
    return (
        <>
            <ul>
                <li><Link to="/amount">Recharge for self</Link></li>
                <li>Recharge for Others</li>
                <li>Airtel Money Balance</li>
                <li># Go Back</li>
            </ul>
        </>
    )
}