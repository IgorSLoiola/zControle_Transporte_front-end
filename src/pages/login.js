import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth";
import axios from "axios";
import "../App.css";

function Login() {
  const [username, setUsername] = useState([]);
  const [password_hash, setPassword_hash] = useState([]);

  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  // const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password_hash,
      });
      const token = response.data.token;
      // setToken(token);
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);
      setIsLoggedIn(true); // Atualiza o estado de autenticação
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password_hash}
            onChange={(e) => setPassword_hash(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
