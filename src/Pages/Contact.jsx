import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    other: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name Is=${data.name}.
       My Email Is=${data.email}.
       My Phone Number=${data.phone}.
       And Other Details=${data.other}`
    );
  };
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
            <form onSubmit={formSubmit} className="mt-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your email"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your phone number"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="other" className="form-label">
                  Other Info.:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="other"
                  name="other"
                  value={data.other}
                  onChange={InputEvent}
                  placeholder="Enter other information"
                  autoComplete="off"
                  required
                />
              </div>
              <button type="submit" className="btn btn-outline-primary mt-3">
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
