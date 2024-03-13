import React from "react";

const SignUp = () => {
  return (
    <section className="register">
      <div className="register__container">
        <div className="right">
          <div>
            <h1>Create account</h1>
          </div>
          <div>
            <form className="form">
              <div className="form__group">
                <input
                  type="text"
                  className="form__control"
                  id="userName"
                  name="userName"
                  placeholder="Enter name"
                />
              </div>
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
                <button type="submit">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
