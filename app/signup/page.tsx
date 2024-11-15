"use client";
import { useState } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import truckImage from "@/public/Images/truck2.svg";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError(true);
      setHelperText("Please fill in all fields");
    } else {
      setError(false);
      setHelperText("");
      alert("Signed up successfully (Demo)");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full space-y-6">
        
        <Image src={truckImage} height={80} width={80} alt="Logo" />
        <h1 className="text-3xl font-semibold text-gray-800">Cars Portal</h1>
        <h2 className="text-xl font-medium text-gray-600">Sign Up</h2>

        <form onSubmit={handleSignup} className="w-full space-y-4">
          <TextField
            required
            label="User Name"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setHelperText("");
              setError(false);
            }}
            error={error}
            helperText={error ? helperText : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />

          <TextField
            required
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setHelperText("");
              setError(false);
            }}
            error={error}
            helperText={error ? helperText : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />

          <TextField
            required
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setHelperText("");
              setError(false);
            }}
            error={error}
            helperText={error ? helperText : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />

          <button
            type="submit"
            className="flex items-center justify-center w-full p-3 text-white bg-black rounded-2xl font-semibold hover:bg-gray-900 transition duration-150"
          >
            Sign Up
            <ArrowForwardIosIcon className="ml-2 scale-75" />
          </button>
        </form>

        <div className="text-sm text-gray-500 hover:underline cursor-pointer">
          <p className="">
            Already have an account?{" "}
            <a href="/login" className="text-gray-700">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
