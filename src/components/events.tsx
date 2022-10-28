import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function Events() {
  return (
    <div
      className="w-100 d-sm-block d-md-flex flex-wrap my-3 d-lg-flex justify-content-space align-items-center ps-5 ms-5"
      style={{ overflow: "auto" }}
    >
      <div className="py-5">
        <a href="/view" className="text-decoration-none">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="assets/cardimage/Group 1000002771.png"
            />
            <Card.Body>
              <div className="text-center pt-2">
                <span
                  className="p-1 fw-lighter "
                  style={{ backgroundColor: "#FCF1D2", borderRadius: "0.5rem" }}
                >
                  Upcoming
                </span>{" "}
              </div>
              <Card.Title className="text-black text-center pt-4">
                Data Science Bootcamp- Graded Datathon
              </Card.Title>
              <div className="w-100 text-center">
                <p className="fs-5 text-black-50">Starts in</p>
                <h5 className="text-black-50 fs-4">00: 15 : 22</h5>
                <p className="fs-9 fw-lighter">Days Hours Mins</p>
              </div>
              <div className=" w-100 mx-auto text-center d-flex">
                <Button
                  variant="success"
                  className="d-flex align-items-center justify-content-center ms-5"
                >
                  {" "}
                  <Image
                    src="/assets/cardimage/check.svg"
                    width={30}
                    height={20}
                    className="pe-2"
                  />
                  Participate Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </a>
      </div>
      //2nd card
      <div className="py-5">
        <a href="/view" className="text-decoration-none">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="assets/cardimage/Group 1000002766.png"
            />
            <Card.Body>
              <div className="text-center pt-2">
                <span
                  className=" p-1 fw-lighter"
                  style={{ backgroundColor: "#FCF1D2", borderRadius: "0.5rem" }}
                >
                  Upcoming
                </span>{" "}
              </div>
              <Card.Title className="text-black text-center pt-4">
                Data Sprint 72 - Butterfly Identification
              </Card.Title>
              <div className="w-100 text-center">
                <p className="fs-5 text-black-50">Starts in</p>
                <h5 className="text-black-50 fs-4">00: 15 : 22</h5>
                <p className="fs-9 fw-lighter">Days Hours Mins</p>
              </div>
              <div className="text-center">
                <Button
                  variant="success"
                  className="d-flex align-items-center justify-content-center ms-5"
                >
                  {" "}
                  <Image
                    src="/assets/cardimage/check.svg"
                    width={30}
                    height={20}
                    className="pe-2"
                  />
                  Participate Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </a>
      </div>
      //3rd card
      <div className="py-5">
        <a href="/view" className="text-decoration-none">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="assets/cardimage/Group 1000002773.png"
            />
            <Card.Body>
              <div className="text-center pt-2">
                <span
                  className="p-1 fw-lighter"
                  style={{ backgroundColor: "#FFDED4", borderRadius: "0.5rem" }}
                >
                  Past
                </span>{" "}
              </div>
              <Card.Title className="text-black text-center pt-4">
                Engineering Graduates Employment Outcomes
              </Card.Title>
              <div className="w-100 text-center">
                <p className="fs-5 text-black-50">Ended on</p>
                <h4 className="text-black-50 fs-5W">16th May'22 09:00 PM</h4>
              </div>
              <div className="text-center pt-4">
                <Button
                  variant="success"
                  className="d-flex align-items-center justify-content-center ms-5"
                >
                  {" "}
                  <Image
                    src="/assets/cardimage/check.svg"
                    width={30}
                    height={20}
                    className="pe-2"
                  />
                  Participate Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </a>
      </div>
      //4th card
      <div className="py-5">
        <a href="/view" className="text-decoration-none">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="assets/cardimage/Group 1000002466.png"
            />
            <Card.Body>
              <div className="text-center pt-2">
                <span
                  className="p-1 fw-lighter"
                  style={{ backgroundColor: "#FFDED4", borderRadius: "0.5rem" }}
                >
                  Past
                </span>{" "}
              </div>
              <Card.Title className="text-black text-center pt-4">
                Travel Insurance Claim Prediction
              </Card.Title>
              <div className="w-100 text-center">
                <p className="fs-5 text-black-50">Ended on</p>
                <h4 className="text-black-50 fs-5W">16th May'22 09:00 PM</h4>
              </div>
              <div className="text-center pt-4">
                <Button
                  variant="success"
                  className="d-flex align-items-center justify-content-center ms-5"
                >
                  {" "}
                  <Image
                    src="/assets/cardimage/check.svg"
                    width={30}
                    height={20}
                    className="pe-2"
                  />
                  Participate Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </a>
      </div>
    </div>
  );
}

export default Events;
