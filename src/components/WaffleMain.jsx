import React, { useEffect, useState } from "react";
import CardSec from "./CardSec";
import { Link } from "react-router-dom";

const WaffleMain = () => {
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
        id="waffle"
      >
        <h1
          className="text-start py-2 fst-italic"
          style={{
            fontFamily: '"Playwrite NZ", cursive',
            fontWeight: "bolder",
          }}
        >
          Crispy, Fluffy, Delicious:
        </h1>
        <h3
          className="fst-italic my-3"
          style={{ fontFamily: '"Freehand", cursive' }}
        >
          Decadent chocolate waffles drizzled with rich chocolate sauce <br />{" "}
          and topped with chocolate chips. We source the highest quality
          ingredients to ensure <br />
          every waffle is bursting with flavor.
        </h3>
        <Link to={"/"} className="navbar-brand" href="#" id="btnW">
        <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <div className="row p-5 m-0" id="cardW">
        <h2 className="text-center" style={{"color" : "rgb(93, 43, 21)" , fontFamily: '"Playwrite NZ", cursive'}}>Craving waffles? Find your perfect match and let us serve up a smile!</h2>
        {dataa
          .filter((dataa) => dataa.category === "Waffle")
          .map((dataa) => (
            <CardSec dataa={dataa} key={dataa.id} />
          ))}
      </div>
    </>
  );
};

export default WaffleMain;
