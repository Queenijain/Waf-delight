import React from "react";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const total = cartItems.reduce((p, c) => {
    return p + c.qty * c.price;
  }, 0);
  return (
    <div className="containerC" id="cartBg">
      <div className="row px-5 my-4">
      <h1 className="text-center" style={{fontFamily: '"Playwrite NZ", cursive' , fontWeight : "bolder"}} id="carttt">YOUR CART</h1>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row">
          {cartItems?.map((item) => (
            <CartItems key={item.id} item={item} />
          ))}
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 my-2 mx-auto">
          <div className="card">
            <div className="card-body d-flex justify-content-between flex-column">
              <div className="mb-3">
                <h5 className="card-title">Your Total</h5>
                <h6 className="card-subtitle mb-2 text-muted">₹  {total.toFixed(2)}</h6>
              </div>
              <button className="btn btn-primary align-self-end mt-3">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
