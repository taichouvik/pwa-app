import { Route, Routes } from "react-router-dom"
import { Home } from "./screens/Home"
import { Recharge } from "./screens/Recharge"
import { Amount } from "./screens/Amount"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recharge" element={<Recharge />} />
      <Route path="/amount" element={<Amount />} />
    </Routes>
  )
}