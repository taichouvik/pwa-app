import { HomeScreen } from "../homescreen/HomeScreen"
import "../inputbox/InputBox"
import "./Screen.css"
import * as Rest from "../rest/Rest";
import * as Urls from "../constants/Urls";
import * as LoginState from "../login/LoginState";
import { useEffect, useRef } from "react";
import { ApiResponse } from "../apiresponse/ApiResponse";

export function Balance() {
    var balance = useRef({});
    useEffect(() => {
        async function getBalance() {
            var reqResult;
            try {
                reqResult = await Rest.post(Urls.checkBalance,
                    {
                        "msisdn": LoginState.mobileNumber
                    });
                var body = reqResult.result as ApiResponse;
                balance.current = body.result as { "balance": {} };
            } catch (error) {
                console.log(error);
            }
        }


        getBalance()
    }, []);
    return (
        <div className="screen">
            <p style={{ fontSize: "1.25em" }}>Your balances</p>
            <div style={{ flex: "1" }}></div>
            <div>
                {Object.entries(balance).map(([key, value], i) => {
                    return (
                        <div key={key}>
                            id is: {value.id} ;
                            name is: {value.name}
                        </div>
                    )
                })}
            </div>
            <HomeScreen />
        </div>
    )
}