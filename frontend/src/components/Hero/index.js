import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <button>
        <Link to="/product">Start Shopping Now</Link>
      </button>
    </div>
  );
};

export default Hero;
