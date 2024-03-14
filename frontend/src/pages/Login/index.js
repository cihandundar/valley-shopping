import React from "react";

const Login = () => {
  return (
    <section className="register">
      <div className="register__container">
        <div className="right">
          <div>
            <h1>Sign In</h1>
          </div>
          <div>
            <form className="form">
              <div className="form__group">
                <input
                  type="email"
                  className="form__control"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  className="form__control"
                  id="password"
                  name="password"
                  placeholder="Password"
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
