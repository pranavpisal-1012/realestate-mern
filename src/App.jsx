import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import SignUp from './pages/SignUp';
import Signin from "./pages/Signin";
import About from "./pages/About";
import profile from "./pages/profile";

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<profile />} />

     </Routes>
    </BrowserRouter>
  )
}
