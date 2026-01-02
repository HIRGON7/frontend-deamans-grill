import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add("login-body");
    return () => document.body.classList.remove("login-body");
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setMsg(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setMsg("Backend not reachable or server error");
    }
  }
  const loginRhymes = [
    "No funny business no disguise Even outlaws gotta sign in nice.",
    "Howdy partner don’t be rude Log yourself in then grab some food.",
    "This saloon don’t serve the unknown Log yourself in or ride alone.",
    "Before the doors go creak and swing Type your details then do your thing",
    "No name no fame log in cowboy.",
    "tip your hat and sign on in This saloon don’t serve no ghost nor kin."
  ];

  const [login] = useState(
    loginRhymes[Math.floor(Math.random() * loginRhymes.length)]
  );
  return (
    <div className="login-container">
      <div className="embers"></div>
      <div className="login-card">
        <h2>LOGIN</h2>
         
      <h3 className="saloon-rhyme">{login}</h3>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>EMAIL</label>
          </div>

          <div className="input-group">
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <label>PASSWORD</label>
          </div>

          <div className="remember-forgot">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">REMEMBER ME</label>
            </div>
            <a href="#" className="red-link">FORGOT PASSWORD?</a>
          </div>

          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? "SIGNING IN..." : "SIGN IN"}
          </button>

          {msg && <p className="error-msg">{msg}</p>}

          <div className="signup-link">
            DON'T HAVE AN ACCOUNT?{" "}
            <Link to="/register" className="red-link">REGISTER</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
