import './Login.css';
import { useState } from 'react';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: any) => {
        e.preventDefault();
        window.location.href = '/home';
    }

    return (
        <>
            <div className="login-container">
                <div className="welcome-section">
                    <h1>Welcome Back!</h1>
                </div>
                <div className="login-section">
                    <div className="login-header">
                        <h1>Login</h1>
                        <p>Welcome back! Please login to your account.</p>
                    </div>
                    <form className='login-form'>
                        <label htmlFor="username">User Name</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="username@gmail.com"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember Me
                            </label>
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button className="login-button" type="submit" onClick={handleLogin}>Login</button>
                    </form>
                    <div className="login-footer">
                        New User? <a href="#">Signup</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
