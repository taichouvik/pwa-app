import { Route, Routes } from "react-router-dom"
import {Menu } from "./menu/Menu"
import { Recharge } from "./screens/Recharge"
import { Amount } from "./amount/Amount"
import { DynamicMenu } from "./menu/DynamicMenu"
import { Balance } from "./screens/Balance"
import OtpInput from "./otp/OtpInput"
import { Login } from "./login/Login"



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<OtpInput />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/recharge" element={<Recharge />} />
      <Route path="/amount" element={<Amount />} />
      <Route path="/balance" element={<Balance />} />
    </Routes>
  )
}