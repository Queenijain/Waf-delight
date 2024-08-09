import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <div className="container-1 p-5 d-flex align-items-center justify-content-center flex-column " id="background">
        <div className="card p-5 w-50" id="loginCard">
        <h3 className="text-center mb-5 text-dark">Login Here</h3>
          <form className="my-2 ">
            <span className="d-flex align-items-center">
              <i className="fa-solid fa-at"></i>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control my-3 ms-2"
                required
              />
            </span>
            <span className="d-flex align-items-center">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                className="form-control my-2 ms-2"
                required
              />
            </span>
            <span className="d-flex align-items-center justify-content-center my-2">
              <button className="btn btn-primary w-50" type="submit">Login</button>
            </span>
            <p className="mt-3 text-dark text-center fw-bolder">
            Don’t have an account yet?{" "}
            <Link to={"/register"} className="mt-10 text-primary fw-bolder">
              Sign up
            </Link>
          </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
