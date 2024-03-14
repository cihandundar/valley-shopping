import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        message.success("Login successful");
        navigate("/product");
      } else {
        message.error("Operation failed");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="register">
      <div className="register__container">
        <div className="right">
          <div>
            <h1>Create account</h1>
          </div>
          <div>
            <form onSubmit={handleRegister} className="form">
              <div className="form__group">
                <input
                  type="text"
                  className="form__control"
                  id="userName"
                  name="userName"
                  placeholder="Enter name"
                  onChange={handleChange}
                />
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  className="form__control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div className="form__group">
                <button type="submit">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
