import React, { useEffect, useState } from "react";
import CardSec from "./CardSec";
import { Link } from "react-router-dom";

const CakeMain = () => {
  const [dataa, setDataa] = useState([]);
  const getItem = async () => {
    try {
      const response = await fetch("http://localhost:8000/pizza");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setDataa(data);
    } catch (error) {
      console.error("Failed to fetch Waffle data:", error);
    }
  };
  console.log(dataa);
  useEffect(() => {
    getItem();
  }, []);
  return (
    <>
      <div
        className="conatiner-W  d-flex  justify-content-center flex-column p-5"
        id="cake"
      >
        <h1 className="text-start py-2 fst-italic my-3" style={{"fontFamily" : '"Playwrite NZ", cursive' , "fontWeight" : "bolder"}}>
          Your Sweetest Moments, Our Finest Cakes
        </h1>
        <h3 className="fst-italic" style={{"fontFamily" : '"Freehand", cursive' }}>
          Handcrafted with love, our cakes are a feast for both the eyes and the
          taste buds <br />
          From classic flavors to contemporary designs, we have a cake for every
          taste and style
        </h3>
        <Link to={"/"} className="navbar-brand" href="#" id="btnB">
        <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <div className="row p-5 m-0" id="cardK">
      <h2 className="text-center" style={{"color" : "rgb(236, 121, 121)" , fontFamily: '"Playwrite NZ", cursive'}}>Create unforgettable memories with our delightful cakes. Order a cake which matches your craving!!!</h2>
        {dataa
          .filter((dataa) => dataa.category === "Cake")
          .map((dataa) => (
            <CardSec dataa={dataa} key={dataa.id} />
          ))}
      </div>
    </>
  );
};

export default CakeMain;
