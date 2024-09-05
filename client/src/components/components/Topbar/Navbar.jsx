import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const HandleLandingPage = () => {
    navigate("/");
  };
  
  return (
    <nav>
      <div className="navbar-container">
        <button className="nav-btn" onClick={HandleLandingPage}>
          Home
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;