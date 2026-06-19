import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.nav}>
      <h2>Dev Analyzer</h2>

      <button onClick={handleLogout} style={styles.btn}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#111",
    color: "white",
    alignItems: "center",
  },
  btn: {
    padding: "8px 15px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px",
  },
};

export default Navbar;