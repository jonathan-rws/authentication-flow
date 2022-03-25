import { Routes, Route } from "react-router-dom";
import { Private } from "./private.route";
import { SingIn } from '../SingIn'
import { Dashboard } from '../Dashboard'
import { SingUp } from "../SingUp";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />}/>
      <Route path="/singup" element={<SingUp />}/>
      <Route path="/dashboard" element={<Private><Dashboard /></Private>}/>
    </Routes>
  )
}