import React, { useState } from "react";
import { use } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../layouts/Button";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const navigate = useNavigate()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };
  return (
    

    <div className="bg-white justify-center shadow-lg rounded-lg flex flex-col my-32 mx-4 md:ml-80 p-10 md:w-2/6">
      <form action="" className="space-y-6 w-full" onSubmit={handleSubmit}>
        <div className="text-center">
          <h1 className="text-orange-800 font-semibold text-3xl">Signup Page</h1>
        </div>
        <div className="bg-slate-100 space-y-2 px-6 py-4 rounded-lg">
          <label className="block text-sm font-medium text-orange-800">
            UserName
          </label>
          <input
            type="text"
            className="bg-white border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-800"
          />
        </div>

        <div className="bg-slate-100 space-y-2 px-6 py-4 rounded-lg">
          <label className="block text-sm font-medium text-orange-800">
            Email
          </label>
          <input
            type="email"
            className="bg-white border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-800"
          />
        </div>

        <div className="bg-slate-100 space-y-2 px-6 py-4 rounded-lg">
          <label className="block text-sm font-medium text-orange-800">
            Password
          </label>
          <input
            type="password"
            className="bg-white border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-800"
          />
        </div>

        <div className="bg-slate-100 space-y-2 px-6 py-4 rounded-lg">
          <label className="block text-sm font-medium text-orange-800">
            Confirm Password
          </label>
          <input
            type="password"
            className="bg-white border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-800"
          />
        </div>

        <div className="flex justify-center mt-4">
         <button type="submit"> <Button title="Sign Up"  /></button>
        </div>
        <p className="mt-4 text-center">
          Already have an account? <a href="/signin" className="text-blue-500">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
