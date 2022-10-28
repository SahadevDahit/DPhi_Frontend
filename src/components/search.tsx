import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
const search = () => {
  const eventtype = ["All", "Active", "Upcoming", "Past"];
  const level = ["Easy", "Medium", "Hard"];
  const selected = ["Upcoming", "Past", "Selected"];
  return (
    <div className="container-fluid">
      <div className="w-100 h-100">
        <h3 className="text-center text-light py-5">Explore Challenges</h3>
      </div>
      <div className="text-center d-flex justify-content-center align-content-between py-5">
        <input
          className="w-50 fas"
          style={{
            borderRadius: "15px",
            height: "3.2rem",
            border: "none",
            fontFamily: "FontAwesome, Arial; font-style: normal",
          }}
          type="text"
          placeholder="&#xF002; Search"
        />
        <Dropdown
          className="bg-light text-black ms-5"
          style={{ borderRadius: "15px" }}
        >
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant=""
            className="mx-1 fs-5"
          >
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu variant="light">
            <p className="fs-5 ps-3 text-black-100">Filter</p>
            <Dropdown.Divider />
            <Dropdown.Item className="text-black-50 fs-6">Status</Dropdown.Item>
            <div className="ps-1 ">
              <Dropdown.Item>
                {eventtype.map((value, index) => {
                  return (
                    <>
                      <div key={index} className="d-flex">
                        <Form.Check aria-label="option 1" />
                        <p className="ps-1 text-black-50">{value}</p>
                      </div>
                    </>
                  );
                })}
              </Dropdown.Item>
            </div>
            <Dropdown.Divider />
            <Dropdown.Item className="text-black-50 fs-6">Level</Dropdown.Item>
            <div className="ps-1 text-black-50">
              <Dropdown.Item>
                {level.map((value, index) => {
                  return (
                    <>
                      <div key={index} className="d-flex text-black-50">
                        <Form.Check aria-label="option 1" />
                        <p className="ps-1 text-black-50">{value}</p>
                      </div>
                    </>
                  );
                })}
              </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className=" w-100 h-100 container ps-5 pb-5 ">
        <div className="w-100 h-100 container  ps-5 ms-5">
          {selected.map((value, index) => {
            return (
              <>
                <label
                  className="btn mx-2"
                  style={{
                    borderRadius: "40px",
                    border: "none",
                    backgroundColor: "rgb(122,143,154)",
                  }}
                >
                  <div className="d-flex text-light justify-content-center px-1">
                    <p className="pt-2">{value}</p>
                    <button
                      className="fw-bold text-black-50 ms-2 mb-2 "
                      style={{ borderRadius: "50%", border: "none" }}
                    >
                      X
                    </button>
                  </div>
                </label>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default search;
