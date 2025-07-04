import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      localStorage.setItem("todo_token", JSON.stringify(decoded));
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed", err);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Login to Katomaran Todo
        </h2>
        <GoogleLogin
          onSuccess={handleLogin}
          onError={() => alert("Login Failed")}
        />
      </div>
    </div>
  );
};

export default Login;
