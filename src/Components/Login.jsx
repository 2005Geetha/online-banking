import React, { useState } from "react";
import "./Login.css";  // Ensure the correct file path for the styles

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      {/* Left Side (Login) */}
      <div className="form-container sign-in-container">
        <form>
          <h1>Welcome Back!</h1>
          <p>To keep connected with us, please login with your personal info.</p>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="sigin" type="submit">SIGN IN</button>
        </form>
      </div>

      {/* Right Side (Signup) */}
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1> 
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <input type="tel" placeholder="Phone Number" pattern="[0-9]{10}" required />
          <input type="text" placeholder="Postal Code" required />
          <input type="text" placeholder="Address" required />
          <button className="sigin" type="submit">SIGN UP</button>
        </form>
      </div>

      {/* Toggle Panel */}
      <div className="overlay-container">
        <div className="overlay-panel">
          <h1>{isSignUp ? "Already a member?" : "Hello, Friend!"}</h1>
          <p>{isSignUp ? "To keep connected with us, please login with your personal info." : "Enter your personal details and start your journey with us."}</p>
          <button className="ghost" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "SIGN IN" : "SIGN UP"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
