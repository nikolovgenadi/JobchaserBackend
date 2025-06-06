import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

type LoginInputs = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const { login, isLoggedIn } = useAuth();
  const [loginError, setLoginError] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const onSubmit = async (data: LoginInputs) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (res.ok && result.token) {
      localStorage.setItem("jwt", result.token);
      login();
      setUserEmail(result.user.email);
      setLoginError("");
    } else {
      setLoginError("Invalid email or password.");
    }
  } catch (err) {
    setLoginError("Login failed.");
    console.error("Error during login:", err);
  }
};

  React.useEffect(() => {
    if (isLoggedIn) {
      const savedUser = localStorage.getItem("jobchaser-user");
      if (savedUser) {
        const user = JSON.parse(savedUser);
        setUserEmail(user.email);
      }
    }
  }, [isLoggedIn]);

  if (isLoggedIn && userEmail) {
    return (
      <div className="max-w-sm mx-auto mt-10 p-6 border border-blue-200 rounded-lg bg-blue-50 shadow text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Welcome, {userEmail}!
        </h2>
        <p>You are now logged in.</p>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border border-blue-200 rounded-lg bg-blue-50 shadow">
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
        Login Page
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="font-semibold">
          Email:
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </label>
        <label className="font-semibold">
          Password:
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" },
            })}
            className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </label>
        {loginError && (
          <span className="text-red-500 text-sm">{loginError}</span>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;