import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';

import Timer from './components/timer/timer';
import Navbar from './components/navbar/navbar';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <Timer />

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
