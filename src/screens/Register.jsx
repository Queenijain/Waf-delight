import React from 'react'

const Register = () => {
  return (
    <>
     <div className="container-1 d-flex align-items-center justify-content-center flex-column" id='background'>
        <div className="card py-5 w-50 "  id='loginCard'>
        <h3 className="text-center mb-5">Register Here</h3>
          <form className="my-2">
            <span className="d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control my-3 ms-2 w-75"
                required
              />
            </span>
            <span className="d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-at"></i>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control my-2 ms-2 w-75"
                required
              />
            </span>
            <span className="d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                className="form-control my-3 ms-2 w-75"
                required
              />
            </span>
            <span className="d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-key"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control my-2 ms-2 w-75"
                required
              />
            </span>
            <span className="d-flex align-items-center justify-content-center my-3">
              <button className="btn btn-primary w-50" type="submit">
                Register
              </button>
            </span>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
