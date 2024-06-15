import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import img from "../Images/p4.png"
import Common from "../Components/Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Telent With"
        imgsrc={img}
        visit="/services"
        btname="Get Started..."
      />
    </>
  );
};

export default Home;
