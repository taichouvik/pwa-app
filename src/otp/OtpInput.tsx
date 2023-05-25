import { ArrowBack } from '@mui/icons-material';
import { Button, colors } from '@mui/material';
import Fab from '@mui/material/Fab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as LoginState from "../login/LoginState";
import { msisdn, otpId } from '../login/LoginState';
import './OtpInput.css';
import "./Screen.css";

export default function OtpInput() {
    var valueLength = 6;
    const [otpValue, setOtpValue] = useState('');
    const onChange = (value: string) => setOtpValue(value);
    const RE_DIGIT = new RegExp(/^\d+$/);

    const valueItems = useMemo(() => {
        const valueArray = otpValue.split('');
        const items: Array<string> = [];

        for (let i = 0; i < valueLength; i++) {
            const char = valueArray[i];

            if (RE_DIGIT.test(char)) {
                items.push(char);
            } else {
                items.push('');
            }
        }

        return items;
    }, [otpValue, valueLength]);

    const timer = 10;

    const inputOnChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        idx: number
    ) => {
        const target = e.target;
        var targetValue = target.value;

        if (!RE_DIGIT.test(targetValue)) {
            return;
        }
        var oldValIdx = otpValue.charAt(idx);
        if (oldValIdx !== "") {
            var oldNumValIdx = parseInt(oldValIdx);
            var targetNumVal = parseInt(targetValue);
            if (targetNumVal % 10 === oldNumValIdx) {
                targetNumVal /= 10;
                targetValue = "" + targetNumVal;
            }
            else {
                targetNumVal %= 10;
                targetValue = "" + targetNumVal;
            }
        }

        const newValue =
            otpValue.substring(0, idx) + targetValue + otpValue.substring(idx + 1);

        onChange(newValue);

    };

    var navigate = useNavigate();
    const handleOtpSubmit = () => {
        navigate("/menu");
        var response;
        const instance = axios.create(
            {
                baseURL: "http://localhost:8080/",
                withCredentials: false,
                headers: {
                    'Content-Type': 'application/json'
                }

            })
        response = instance.post("verifyOtp",
            {
                otp: otpValue,
                otpid: otpId,
                msisdn: msisdn
            })
            .then(res => {
                navigate("/menu");
            }).catch(res => {
                console.log(res);
            })
        //     if (response.data?.statusCode === 200)
        //         navigate("/menu");
        //     return (<p>{response.data}</p>)
        // } catch (error) {
        //     return error;
        // }

        // axios.get('http://localhost:8080/get')
        // .then(res => {
        //   console.log(res);
        // })
    }


    const basicTheme = createTheme({
        palette: {
            primary: {
                light: '#757ce8',
                main: colors.common.white,
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: colors.common.black,
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });

    const textTheme = createTheme({
        palette: {
            primary: colors.red,
            secondary: { main: colors.common.white }
        },
    });

    return (
        <div className="otpscreen">
            <div>
                <ThemeProvider theme={basicTheme}>
                    <Fab color="primary" size='medium' onClick={() => navigate(-1)}>
                        <ArrowBack fontSize="large" color="secondary" />
                    </Fab>
                </ThemeProvider>
            </div>

            <div>
                <p>
                    OTP Verification
                    <br /> Please enter the OTP you received on {LoginState.mobileNumber}
                </p>
            </div>

            <div className="otp-group" >
                {valueItems.map((digit, idx) => (
                    <input
                        className="otp-input"
                        key={idx}
                        type="password"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        pattern="\d{1}"
                        maxLength={valueLength}
                        value={digit}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => inputOnChange(event, idx)}
                        onKeyDown={()=>handleOtpSubmit()}
                    />
                ))}
            </div>

            <div style={
                {
                    display: "flex",
                    boxSizing: "border-box",
                    justifyContent: "space-between"
                }
            }>
                <ThemeProvider theme={textTheme}>
                    <Button color="primary">RESEND OTP</Button>
                </ThemeProvider>
                <p style={{ color: "red" }}>{timer}</p>

            </div>
        </div>
    );
}