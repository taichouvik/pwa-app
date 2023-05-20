import { Route, Routes } from "react-router-dom"
import {Menu } from "./menu/Menu"
import { Recharge } from "./screens/Recharge"
import { Amount } from "./screens/Amount"
import { DynamicMenu } from "./menu/DynamicMenu"
import { Balance } from "./screens/Balance"



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/recharge" element={<Recharge />} />
      <Route path="/amount" element={<Amount />} />
      <Route path="/dynamicMenu" element={<DynamicMenu />} />
      <Route path="/balance" element={<Balance />} />
    </Routes>
  )
}