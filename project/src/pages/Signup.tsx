import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

type SignupInputs = {
  email: string;
  password: string;
};

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>();
  const { login } = useAuth();
  const [registered, setRegistered] = useState(false);

  const onSubmit = (data: SignupInputs) => {
    localStorage.setItem("jobchaser-user", JSON.stringify(data));
    login();
    setRegistered(true);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border border-blue-200 rounded-lg bg-blue-50 shadow">
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
        Signup Page
      </h2>
      {registered && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded text-center">
          You are now registered! Proceed to{" "}
          <a href="/" className="underline text-blue-600">
            Job listings
          </a>
          .
        </div>
      )}
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
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition"
          disabled={registered}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
