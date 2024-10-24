import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
