var msisdn = "", otpId = "";
var mobileNumber = "";
var token = "";

const setMobileNumber = (input: string) => { mobileNumber = input };
const setOtpId = (input: string) => { otpId = input };
const setToken = (input: string) => { token = input };



export { msisdn, otpId, mobileNumber, setMobileNumber, setOtpId, setToken };