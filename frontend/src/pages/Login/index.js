import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
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
        if (data.role === "admin") {
          window.location.href = "/admin";
        } else {
          navigate("/");
        }
      } else {
        message.error("Login failed");
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
            <h1>Sign In</h1>
          </div>
          <div>
            <form onSubmit={handleLogin} className="form">
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
                <button type="submit">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
