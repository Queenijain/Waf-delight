import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";

const CardSec = ({ dataa }) => {
  const { id, title, desc, price, image } = dataa;
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart({ id ,title, desc, price, image, qty: 1 }));
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 g-5 text-light">
        <div className="card mx-5 my-3 rounded-0" id="cardd">
          <img
            src={dataa.image}
            className="card-img-top"
            alt="..."
            style={{ height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title text-dark">{dataa.title}</h5>
            <p className="card-text text-secondary" style={{fontFamily: '"Playwrite AU VIC", cursive'}}>{dataa.desc}</p>
            <span className="d-flex align-items-center justify-content-between">
              <p className="card-text text-dark">price : ₹ {dataa.price}</p>
              <button
                className="btn btn-secondary float-end btn-sm text-center"
                onClick={handleAdd}
              >
              <i class="fa-solid fa-plus"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSec;
