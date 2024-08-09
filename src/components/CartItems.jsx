import React from "react";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeCart } from "../features/cart/CartSlice";

const CartItems = ({item}) => {
  const { title, id, price, qty, image } = item;

  const dispatch = useDispatch();
 
  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQty({ id }));
  };

  const handleDercement = (id) => {
    qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0);
  };
  return (
    <div className="card mt-2 rounded-0 p-0">
      <div className="card-body d-flex align-items-center p-1">
        <img
          src={image}
          alt="Cart Item"
          id="cartImg"
          className="img-fluid rounded-0"
        />
        <div className="d-flex justify-content-between flex-grow-1 ms-3">
          <div>
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">₹ {price}</h6>
          </div>
          <div className="d-flex flex-column align-items-end">
            <div className="d-flex align-items-center border rounded mt-5">
              <button className="btn btn-outline-primary btn-sm mx-1" onClick={() => handleDercement(id)}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <h6 className="text-center mb-0 mx-2">{qty}</h6>
              <button className="btn btn-outline-primary btn-sm mx-1" onClick={() => handleIncrement(id)}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <button className="btn btn-danger btn-sm rounded-0 mt-2" onClick={() => handleRemove(id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
