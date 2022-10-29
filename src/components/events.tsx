import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import Eventlist from "../db/events.json";
interface eventtype {
  image_url: string;
  event_type: string;
  title: string;
  dateAndTime: string;
}
function Events() {
  let events: eventtype[] = Eventlist;
  let navigate = useNavigate();
  const viewchallenge = () => {
    navigate("/view");
  };
  return (
    <div
      className="w-100 d-sm-block d-md-flex flex-wrap my-3 d-lg-flex justify-content-between align-items-center container"
      style={{ overflow: "auto" }}
    >
      {events.map((data, index) => {
        return (
          <>
            <div className="py-5" key={index}>
              <a
                href="#"
                onClick={viewchallenge}
                className="text-decoration-none"
              >
                <Card style={{ width: "20rem", height: "29rem" }}>
                  <Card.Img variant="top" src={data.image_url} />
                  <Card.Body>
                    <div className="text-center pt-2">
                      <span
                        className="p-1 fw-lighter "
                        style={{
                          backgroundColor: "#FCF1D2",
                          borderRadius: "0.5rem",
                        }}
                      >
                        {data.event_type}
                      </span>{" "}
                    </div>
                    <Card.Title className="text-black text-center pt-4">
                      {data.title}
                    </Card.Title>
                    <div className="w-100 text-center">
                      <p className="fs-5 text-black-50">
                        {data.event_type === "Upcoming"
                          ? "Starts in"
                          : "Ended on"}
                      </p>
                      <h5 className="text-black-50 fs-4">{data.dateAndTime}</h5>
                      {data.event_type === "Upcoming" ? (
                        <p className="fs-9 fw-lighter">Days Hours Mins</p>
                      ) : (
                        ""
                      )}
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
          </>
        );
      })}
    </div>
  );
}

export default Events;
