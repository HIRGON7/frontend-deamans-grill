import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/register.css";

export default function Register() {
  const nav = useNavigate();
  const API = import.meta.env.VITE_API_URL;


  const registerRhymes = [
    "Wanna step inside and grab a seat? Leave your info first nice and neat.",
    "Think you can stroll in, wild and free? Not in this saloon amigo sa-ry",
    "Name and number don’t be shy no info, partner… you ain’t gettin’ by.",
    "Before you swing them saloon doors wide We need some details don’t run don’t hide",
    "Even outlaws gotta behave sign up proper, bold and brave.",
    "Write your info, nice and slow Or it’s back to the desert you go."
  ];
  


  const [rhyme] = useState(
    registerRhymes[Math.floor(Math.random() * registerRhymes.length)]
  );
   

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: ""
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      const res = await fetch(`${API}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMsg(data.message || "Register failed");
        setLoading(false);
        return;
      }

     
      setLoading(false);
      setTimeout(() => nav("/login"), 800);
    } catch {
      setLoading(false);

    }
  };

  return (
    
    <div className="auth-page">
      <div className="embers"></div>
      <h2>Create Account</h2>

      
      <h3 className="saloon-rhyme">{rhyme}</h3>

      <form onSubmit={onSubmit} className="auth-form">
        <input
          name="first_name"
          placeholder="First name"
          value={form.first_name}
          onChange={onChange}
          required
        />
        <input
          name="last_name"
          placeholder="Last name"
          value={form.last_name}
          onChange={onChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
          required
        />

        <button disabled={loading} type="submit">
          {loading ? "Creating..." : "Register"}
        </button>
      </form>

      {msg && <p>{msg}</p>}

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
