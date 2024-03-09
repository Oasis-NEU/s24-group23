import ReactDOM from "react-dom/client";
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Inputs from "./components/inputs";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/inputs" element={<Inputs />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
