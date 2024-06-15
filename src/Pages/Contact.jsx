import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="my-3">
        <h2 className="text-center">Contact-Us</h2>
        <hr className="w-25 mx-auto border-dark" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 mx-auto">
            <div className="w-50 mx-auto"></div>
            <form action="#">
              <div className="form-group">
                <label for="Name">Name</label>
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="Enter Name"
                  id="Name"
                  value=""
                />
              </div>

              <div className="form-group">
                <label for="Email">Email</label>
                <input
                  type="Email"
                  className="form-control my-2"
                  placeholder="EnterEmail"
                  id="Email"
                  autocomplete="off"
                  value=""
                />
              </div>

              <div className="form-group">
                <label for="Phone No">Phone No</label>
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="Enter Phone No"
                  id="Pno"
                  value=""
                />
              </div>

              <div className="form-group">
                <label for="Message">Message</label>
                <textarea className="form-control my-2"></textarea>
              </div>

              <div className="form-group form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                id="btn"
                className="btn btn-outline-primary mt-3 my-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
