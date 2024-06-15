import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import img from "../Images/p5.png";
import Common from "../Components/Common";

const About = () => {
  return (
    <>
      <Common
        name="Wel-Come To About Page Of"
        imgsrc={img}
        visit="/contact"
        btname="Contact Now..."
      />
    </>
  );
};

export default About;
