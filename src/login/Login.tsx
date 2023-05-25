import "./Screen.css"
import "./Login.css"

export function Login() {
    return (<div className="loginscreen">
        <p style={{ fontWeight: "bolder", fontSize: "1.15em" }}>Hello, Please enter your phone number</p>
        <br />
        <form action="otp" style={{ width: "100%" }}>
            <input className="mobilenumber" type="text"
                placeholder="Mobile Number"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\d{10}"
                maxLength={10}
            />
            <br /><br />
            <input type="submit" value="Send OTP" style={{ borderStyle: "none", width: "100%", backgroundColor: "maroon", color: "white", fontWeight: "bolder", fontSize: "1.25em", textAlign: "center", display: "block", margin: "0 auto", padding: "1rem" }} />
        </form>
    </div>)
}