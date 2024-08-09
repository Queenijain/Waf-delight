import React, { useEffect, useState } from "react";
import CardSec from "./CardSec";
import { Link } from "react-router-dom";

const IceCreamMain = () => {
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
        id="icecream"
      >
        <h1
          className="text-start py-2 fst-italic my-3"
          style={{
            fontFamily: '"Playwrite NZ", cursive',
            fontWeight: "bolder",
          }}
        >
          Creamy Dreams Come True
        </h1>
        <h3
          className="fst-italic"
          style={{ fontFamily: '"Freehand", cursive' }}
        >
          From classic favorites to unique creations, we have a flavor for every
          craving <br /> and topped with chocolate chips. Our ice creams are
          freshly made daily, ensuring the perfect treat every time.
        </h3>
        <Link to={"/"} className="navbar-brand" href="#" id="btnC">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <div className="row p-5 m-0" id="cardC">
        <h2 className="text-center" style={{color : "rgb(250, 51, 105)" , fontFamily: '"Playwrite NZ", cursive'}}>Take a Scoop of happiness in every bite. Order now your favourite flavour!!</h2>
        {dataa
          .filter((dataa) => dataa.category === "Icecream")
          .map((dataa) => (
            <CardSec dataa={dataa} key={dataa.id} />
          ))}
      </div>
    </>
  );
};

export default IceCreamMain;
