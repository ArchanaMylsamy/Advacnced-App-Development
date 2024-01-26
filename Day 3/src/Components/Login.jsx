import { useState } from 'react';
import './Login.css'; // Import your CSS file
import google from '../assets/Google.jpeg';
import facebook from '../assets/facebook.png';
import { Link } from 'react-router-dom';
// import './Signup'
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    if (validateForm()) {
      console.log('Login clicked');
    }
  };

  const handleGoogleLogin = () => {
    // Implement your Google login logic here
    console.log('Login with Google clicked');
  };

  const handleFacebookLogin = () => {
    // Implement your Facebook login logic here
    console.log('Login with Facebook clicked');
  };

  const validateForm = () => {
    let isValid = true;
  
    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }
  
    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters');
      isValid = false;
    } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*/.test(password)) {
      setPasswordError('Password should contain at least one uppercase letter, one number, and one symbol');
      isValid = false;
    } else {
      setPasswordError('');
    }
  
    return isValid;
  };
  return (
    <div className="login-container">
      <div className="side-image"></div>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              id="username"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="error-message">{emailError}</span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="error-message">{passwordError}</span>
          </div>
          <button className="sc1"type="button" onClick={handleLogin}>
            Login
          </button>
          <p className="sign-in-message">Dont have an account?<Link to="/signup">Sign in.</Link></p>
          <div className="social-login">
            <p>Or login with:</p>
            <div className="social-icons">
              <button type="button" onClick={handleGoogleLogin}>
                <img src={google} alt="Google" />
              </button>
              <button type="button" onClick={handleFacebookLogin}>
                <img src={facebook} alt="Facebook" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
