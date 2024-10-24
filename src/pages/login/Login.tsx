import './Login.css';

const Login = () => {
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
            <input type="text" id="username" placeholder="username@gmail.com" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="********" />

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button className="login-button" type="submit">Login</button>
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
