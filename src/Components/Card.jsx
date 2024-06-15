import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-12">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt={props.imgsrc}
            height={225}
            width={25}
          />
          <div className="card-body">
            <h5 className="card-title text-center my-2">{props.title}</h5>
            <hr className="w-25 mx-auto border-dark" />
            <p className="card-text text1">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" className="btn card-btn">
              Explore Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
