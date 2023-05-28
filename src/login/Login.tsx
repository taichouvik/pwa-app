import "./Screen.css";
import "./Login.css";
import *  as LoginState from "./LoginState";
import { useNavigate } from "react-router-dom";
import * as Rest from "../rest/Rest"
import { ApiResponse } from "../apiresponse/ApiResponse";

export function Login() {
    var navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var requestResult = await Rest.post("localhost:8080/otp", { "mobileNumber": LoginState.mobileNumber })
        if (requestResult["ok"] === true) {
            var responseBody = requestResult.result as ApiResponse;
            var { otpId } = responseBody.result as { otpId: string };
            if (otpId !== undefined) {
                LoginState.setOtpId(otpId);
                navigate("/otp");
            }
        }


    }
    return (<div className="loginscreen">
        <p style={{ fontWeight: "bolder", fontSize: "1.15em" }}>Hello, Please enter your phone number</p>
        <br />
        <form onSubmit={(event) => handleSubmit(event)} style={{ width: "100%" }}>
            <input className="mobilenumber" type="text"
                placeholder="Mobile Number"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\d{10}"
                maxLength={10}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { LoginState.setMobileNumber(e.target.value) }}
            />
            <br /><br />
            <input type="submit" value="Send OTP" style={
                {
                    borderStyle: "none",
                    width: "100%",
                    backgroundColor: "maroon",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "1.25em",
                    textAlign: "center",
                    display: "block",
                    margin: "0 auto",
                    padding: "1rem"
                }
            } />
        </form>
    </div>)
}