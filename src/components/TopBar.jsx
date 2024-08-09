import React from "react";
import imgLg from "../assets/bgndlg/imgLg.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TopBar = () => {
  const {cartItems} = useSelector((state)=> state.cart)
  return (
    <>
      <nav className="navbar navbar-light shadow px-2" id="navbar">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">
            <img
              src={imgLg}
              alt=""
              width="40"
              height="36"
              className="d-inline-block align-text-center"
            />
            Waf-Delights
          </Link>
          <Link to={"/cart"}>
            <button className="btn btn-sm rounded-0 btn-dark" id="cartBtn">
              <i className="fa-solid fa-cart-shopping"></i>
              <span class="position-absolute top-25 start-90 badge rounded-pill bg-danger mt-2">
                {cartItems.length}
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
