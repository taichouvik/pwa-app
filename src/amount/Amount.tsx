import "./Screen.css"

export function Amount() {
    return (
        <div className="amountscreen">
            <p style={{fontSize:"1.25em"}}>Enter Amount</p>
            <input color="white" type="text" style={{  backgroundColor:"white", fontSize:"1.25em"}} />
        </div>
    )
}