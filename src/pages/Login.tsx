import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form className="login-form">
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
