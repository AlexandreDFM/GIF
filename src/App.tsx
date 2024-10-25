import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

import "./App.css";

import Landing from "./pages/landingPage/Landing.tsx";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";

import Timer from "./components/timer/timer";
import Navbar from "./components/navbar/navbar";
import { SidebarWrapper } from "./components/sidebar/sidebar";
import Generate from "./pages/generate/Generate.tsx";

function App() {
    return (
        <Router>
            <Content />
        </Router>
    );
}

function Content() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== "/login" &&
                location.pathname !== "/landing" && (
                    <>
                        <Navbar />
                        <Timer />
                    </>
                )}

            {location.pathname !== "/login" &&
                location.pathname !== "/landing" && (
                    <SidebarWrapper>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </SidebarWrapper>
                )}

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/generate" element={<Generate />} />
            </Routes>
        </>
    );
}

export default App;
