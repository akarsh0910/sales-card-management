import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      await loginUser(email, password);

      if (email === "admin@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/sales");
      }

    } catch (error) {

      alert("Invalid Email or Password");

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-slate-900 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            CardFlow
          </h1>

          <p className="text-slate-500 mt-2">
            Business Card Management System
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>

          <div>
            <label className="text-sm font-medium text-slate-600">
              Email
            </label>

            <div className="flex items-center border rounded-xl px-4 mt-2 h-12">
              <FiMail className="text-slate-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none px-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-600">
              Password
            </label>

            <div className="flex items-center border rounded-xl px-4 mt-2 h-12">
              <FiLock className="text-slate-400" />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none px-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white h-12 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;