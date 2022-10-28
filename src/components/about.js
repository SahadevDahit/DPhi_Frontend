import React from "react";
import Image from "react-bootstrap/Image";
function about() {
  return (
    <div
      className="w-100 h-100 row text-light py-5"
      style={{ backgroundColor: "#002A3B" }}
    >
      <div className="col-5 d-grid position-relative py-2 ">
        <div className="d-flex mx-auto ">
          <img
            src="/assets/icons/Group%201000002515.svg"
            className="img-fluid"
            alt="..."
          />
          <div className="ps-4">
            <div className="pt-1 fs-4 fw-bolder">100K+</div>
            <div>AI model submissions</div>
          </div>
        </div>
        <div
          className="pe-5 mt-3 position-absolute end-0"
          style={{
            borderLeft: "1px solid white",
            height: "45px",
          }}
        ></div>
      </div>

      <div className="col-2 d-grid mx-auto">
        <div className="d-flex py-2">
          <img
            src="/assets/icons/Group%201000002516.svg"
            className="img-fluid"
            alt="..."
          />
          <div className="ps-4">
            <div className="pt-1 fs-4 fw-bolder">50K+</div>
            <div className="">Data Scientists</div>
          </div>
        </div>
      </div>

      <div className="col-5 d-grid  position-relative py-2">
        <div className="d-flex mx-auto">
          <img
            src="/assets/icons/Group%201000002518.svg"
            className="img-fluid"
            alt="..."
          />
          <div className="ps-4">
            <div className="pt-1 fs-4 fw-bolder">100+</div>
            <div>AI challenges hosted</div>
          </div>
        </div>
        <div
          className="position-absolute start-0 mt-3 ms-4"
          style={{
            borderLeft: "1px solid white",
            height: "45px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default about;
