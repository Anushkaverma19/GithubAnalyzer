import React, { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await registerUser({
        name,
        email,
        password,
      });

      console.log("Success:", res.data);

      alert("Signup success");

      // ✅ redirect to login page
      navigate("/login");

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.message || "Signup failed");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Signup</h2>

        <form onSubmit={handleSignup}>
          <input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button
            type="submit"
            style={styles.button}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#43cea2,#185a9d)",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "none",
    borderRadius: "5px",
    background: "#185a9d",
    color: "white",
    cursor: "pointer",
  },
};

export default Signup;