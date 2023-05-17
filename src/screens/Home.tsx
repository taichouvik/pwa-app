import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <div>Welcome, Hitesh Jain!</div>
            <div>Click any option or enter your input below:</div>

            <ul>
                <li>Check balance</li>
                <li><Link to="/recharge">Recharge Airtime</Link></li>
                <li>Buy Bundle</li>
                <li>Airtel Money Balance</li>
                <li>Send Money</li>
                <li>Paay Bill</li>
            </ul>
        </>
    )
}