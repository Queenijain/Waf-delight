import React, { useEffect } from "react";
import HeroSec01 from "../components/HeroSec01";
import HeroSecc02 from "../components/HeroSecc02";
import HeroSecc03 from "../components/HeroSecc03";
import HeroSecc04 from "../components/HeroSecc04";

const Home = () => {
  const getItem = async () => {
    try {
      const response = await fetch("http://localhost:8000/pizza");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Failed to fetch pizza data:", error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <div className="container-3">
        <HeroSec01  />
        <HeroSecc02 />
        <HeroSecc03 />
        <HeroSecc04 />
      </div>
    </>
  );
};

export default Home;
