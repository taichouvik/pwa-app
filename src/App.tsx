import { Route, Routes } from "react-router-dom"
import { Amount } from "./amount/Amount"
import { Balance } from "./balance/Balance"
import { Login } from "./login/Login"
import { Menu } from "./menu/Menu"
import OtpInput from "./otp/OtpInput"



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<OtpInput />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/amount" element={<Amount />} />
      <Route path="/balance" element={<Balance />} />
    </Routes>
  )
}