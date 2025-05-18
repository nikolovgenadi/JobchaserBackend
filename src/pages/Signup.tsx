import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <h2>Signup Page</h2>
      <form className="signup-form">
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
