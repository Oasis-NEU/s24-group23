import ReactDOM from "react-dom/client";
import { Auth } from "@supabase/auth-ui-react";
import {Session, createClient} from '@supabase/supabase-js';
import {ThemeSupa} from '@supabase/auth-ui-shared';
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Inputs from "./components/inputs";

const supabase = createClient("https://pqhonecsanegewltxyqv.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxaG9uZWNzYW5lZ2V3bHR4eXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2OTY4OTQsImV4cCI6MjAyNjI3Mjg5NH0.ZBUpGIeAedCka5UKFCoR-xVHl5DqWhE-AvbX6rhm83E");

const logOut = () => {
  supabase.auth.signOut()
}

function App() {

  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
    <Auth 
      supabaseClient={supabase} 
      appearance={{ theme: ThemeSupa }} 
      providers={[]} 
      />)
  }
  else {
    return (
      <div>
        <button onClick={logOut}>Log Out</button>
        <button onClick={() => window.location.href = "/"}>Home</button>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/inputs" element={<Inputs />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

  //const [loggedIn, setLoggedIn] = useState(false)
  //const [email, setEmail] = useState('')

/*  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/inputs" element={<Inputs />}></Route>
      </Routes>
    </BrowserRouter>
  ) */
//}

export default App
