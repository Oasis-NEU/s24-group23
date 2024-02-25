import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Inputs from "./components/inputs";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/inputs" element={<Inputs />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
