import React from "react";
import tick from "../../assets/tick.png";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="success">
      <div className="success__container">
        <div className="success__box">
          <div className="success__box__img">
            <img src={tick} alt="" />
          </div>
          <div className="success__box__center">
            <h2>Successful !!!</h2>
            <p>Your payment was done successfully</p>
          </div>
          <div className="success__box__bottom">
            <button>
              <Link to="/">Continue</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
