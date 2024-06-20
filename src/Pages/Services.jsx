import React from "react";
import Card from "../Components/Card";
import CardData from "../Components/CardData";

const Services = () => {
  return (
    <>
      <div className="my-3">
        <h2 className="text-center">Our Services</h2>
        <hr className="w-25 mx-auto border-dark" />
      </div>
      <div className="container-fluid">
        <div className="row pt-4">
          <div className="col-11 mx-auto">
            <div className="row gy-4">
              {CardData.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
