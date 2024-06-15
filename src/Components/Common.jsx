import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid">
          <div className="row pt-5">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 img-header">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Img Pic"
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-12 space">
                  <h1>
                    {props.name} <strong className="text">Uddan</strong>
                  </h1>
                  <p className="my-3">Our Staff Are Profetional Dwvlopers..</p>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn get-started px-4">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
