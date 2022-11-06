import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Events() {
  const [challenges, setChallenges] = useState<any[]>([]);
  const [output, setOutput] = useState<any[]>([]);
  const [selected, setselected] = useState<string[]>([]);
  const [loading, setloading] = useState<any>("false");
  const [controller, setcontroller] = useState<number>(1);

  const challengetype: any[] = [
    { id: "1", value: "All" },
    { id: "2", value: "Active" },
    { id: "3", value: "Upcoming" },
    { id: "4", value: "Past" },
  ];
  const level: any[] = [
    { id: "1", value: "Easy" },
    { id: "2", value: "Medium" },
    { id: "3", value: "Hard" },
  ];
  let day: any = "";
  let hours: any = "";
  let mins: any = "";
  let upcomingday: any = "";
  let upcominghours: any = "";
  let upcomingmins: any = "";
  useEffect(() => {
    setTimeout(() => {
      setcontroller(controller + 1);
    }, 1000 * 60);
  }, [controller]);
  const fetch_challenges = async () => {
    const res = await fetch(`http://localhost:5000/dphi`);
    const data = await res.json();
    setOutput(data);
    setChallenges(data);
    setloading("true");
  };
  useEffect(() => {
    fetch_challenges();
  }, []);

  useEffect(() => {
    setOutput([]);
    const filteredArray = challenges.filter((value: any) => {
      var d1 = Date.now();
      var d2 = new Date(value.startDate).getTime();
      var d3 = new Date(value.endDate).getTime();

      if (selected.includes("Upcoming")) {
        if (d1 < d3 && d1 < d2) {
          return value;
        }
      }
      if (selected.includes("Past")) {
        if (d1 > d3) {
          return value;
        }
      }
      if (selected.includes("Active")) {
        if (d1 > d2 && d1 < d3) {
          return value;
        }
      }
      if (selected.includes(value.levelType)) {
        return value;
      }
    });

    if (selected.includes("All") || selected.length === 0) {
      setOutput(challenges);
    } else {
      setOutput(filteredArray);
    }
  }, [selected]);

  const Handler = (event: any) => {
    const challenge_type = event.target.value;
    if (!selected.includes(challenge_type)) {
      setselected([...selected, challenge_type]);
    }
  };

  const removeChallengeType = (event: React.MouseEvent<HTMLDivElement>) => {
    const challenge_type: HTMLDivElement = event.currentTarget;
    console.log(challenge_type.textContent);
    const filter = selected.filter((value) => {
      return value !== challenge_type.textContent;
    });
    setselected(filter);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOutput([]);
    const search = event.target.value;
    let filter = challenges.filter((record: any) => {
      if (record.challengeName.toLowerCase().includes(search.toLowerCase())) {
        return record;
      }
    });
    setOutput(filter);
  };
  return (
    <>
      <div
        className="container-fluid w-100 h-100 pb-5"
        style={{ backgroundColor: "#002A3B" }}
      >
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
            onChange={handleSearch}
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
              <Dropdown.Item className="text-black-50 fs-6">
                Status
              </Dropdown.Item>
              <div className="ps-1 ">
                {challengetype.map((data: any) => {
                  return (
                    <>
                      <Dropdown.Item key={data.id}>
                        <div className="d-flex">
                          <Form.Check
                            aria-label="option 1"
                            value={data.value}
                            checked={
                              selected.includes(data.value) ? true : false
                            }
                            onClick={(e) => Handler(e)}
                          />
                          <p className="ps-1 text-black-50">{data.value}</p>
                        </div>
                      </Dropdown.Item>
                    </>
                  );
                })}
              </div>
              <Dropdown.Divider />
              <Dropdown.Item className="text-black-50 fs-6">
                Level
              </Dropdown.Item>
              <div className="ps-1 text-black-50">
                <Dropdown.Item>
                  {level.map((data) => {
                    return (
                      <>
                        <div key={data.id} className="d-flex text-black-50">
                          <Form.Check
                            aria-label="option 1"
                            name={data.value}
                            value={data.value}
                            checked={
                              selected.includes(data.value) ? true : false
                            }
                            onClick={(e) => Handler(e)}
                          />
                          <p className="ps-1 text-black-50">{data.value}</p>
                        </div>
                      </>
                    );
                  })}
                </Dropdown.Item>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className=" w-100 h-100 container ps-5 pb-4 ">
          <div className="w-100 h-100 container  ps-5 ms-5">
            {selected.map((value, index) => {
              return (
                <>
                  <label
                    className="btn mx-1"
                    style={{
                      borderRadius: "30px",
                      border: "none",
                      backgroundColor: "rgb(122,143,154)",
                    }}
                  >
                    <div
                      className="w-100 h-100 d-flex text-light align-items-center justify-content-center container"
                      onClick={removeChallengeType}
                    >
                      <p className="mt-2 pe-1">{value}</p>
                      <img
                        src="assets/icons/x-circle.svg"
                        alt=""
                        width={20}
                        height={18}
                      />
                    </div>
                  </label>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {loading === "false" ? (
        <h1 className="text-center text-black"> Loading......</h1>
      ) : (
        <>
          <div className="container py-5 ">
            <div className="row w-100 g-5 pt-5">
              {output.map((data: any) => {
                // setTimeout(() => {
                var d1 = Date.now();
                var d2 = new Date(data.startDate).getTime();
                var d3 = new Date(data.endDate).getTime();
                if (d1 > d2 && d1 < d3) {
                  let diff = d3 - d1;
                  day = new Date(diff).getDay();
                  hours = new Date(diff).getHours();
                  mins = new Date(diff).getMinutes();
                }
                if (d1 < d3 && d1 < d2) {
                  var diff = d2 - d1;
                  upcomingday = new Date(diff).getDay();
                  upcominghours = new Date(diff).getHours();
                  upcomingmins = new Date(diff).getMinutes();
                }
                // }, 100);
                return (
                  <>
                    <Link
                      className="wrap col-sm-12 col-md-6 col-lg-4"
                      to={`/${data._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Card
                        style={{
                          height: "28rem",
                          width: "21rem",
                          borderRadius: "1rem",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={data.avatar}
                          style={{
                            height: "10rem",
                            borderTopLeftRadius: "1rem",
                            borderTopRightRadius: "1rem",
                          }}
                        />
                        <Card.Body>
                          <div>
                            <div className="text-center">
                              {Date.now() >=
                                new Date(data.startDate).getTime() &&
                              Date.now() <= new Date(data.endDate).getTime() ? (
                                <span
                                  className="p-1 fw-lighter "
                                  style={{
                                    backgroundColor: "#D2E5D4",
                                    color: "green",
                                    borderRadius: "0.5rem",
                                  }}
                                >
                                  Active
                                </span>
                              ) : Date.now() <
                                new Date(data.startDate).getTime() ? (
                                <span
                                  className="p-1 fw-lighter "
                                  style={{
                                    backgroundColor: "#FCF1D2",
                                    borderRadius: "0.5rem",
                                  }}
                                >
                                  Upcoming
                                </span>
                              ) : (
                                <span
                                  className="p-1 fw-lighter "
                                  style={{
                                    backgroundColor: "#FFDED4",
                                    borderRadius: "0.5rem",
                                  }}
                                >
                                  Past
                                </span>
                              )}
                            </div>
                          </div>
                          <Card.Title className="text-center text-black">
                            {data.challengeName}
                          </Card.Title>
                          <Card.Text>
                            <div className="w-100 text-center">
                              <p className="fs-5 text-black-50">
                                {Date.now() >=
                                  new Date(data.startDate).getTime() &&
                                Date.now() <= new Date(data.endDate).getTime()
                                  ? "Ends in"
                                  : Date.now() <
                                    new Date(data.startDate).getTime()
                                  ? "Starts in"
                                  : "Ended on"}
                              </p>
                              <h5 className="text-black fs-4">
                                {Date.now() >
                                new Date(data.endDate).getTime() ? (
                                  new Date(data.endDate)
                                    .toUTCString()
                                    .slice(0, 16)
                                ) : Date.now() >
                                    new Date(data.startDate).getTime() &&
                                  Date.now() <
                                    new Date(data.endDate).getTime() ? (
                                  <>
                                    {/* Active part */}
                                    <div className="d-flex justify-content-between w-50 mx-auto">
                                      <p>
                                        {day.toString().padStart(2, "0") + " :"}
                                      </p>
                                      <p>
                                        {hours.toString().padStart(2, "0") +
                                          " :"}
                                      </p>
                                      <p>{mins.toString().padStart(2, "0")}</p>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {/* Upcoming part */}
                                    <div className="d-flex justify-content-between w-50 mx-auto">
                                      <p>
                                        {upcomingday
                                          .toString()
                                          .padStart(2, "0") + " :"}
                                      </p>
                                      <p>
                                        {upcominghours
                                          .toString()
                                          .padStart(2, "0") + " :"}
                                      </p>
                                      <p>
                                        {upcomingmins
                                          .toString()
                                          .padStart(2, "0")}
                                      </p>
                                    </div>
                                  </>
                                )}
                              </h5>
                              {Date.now() < new Date(data.endDate).getTime() ? (
                                <div className="d-flex justify-content-between w-50 mx-auto">
                                  <p className="fs-10 fw-lighter text-black">
                                    Days
                                  </p>
                                  <p className="fs-10 fw-lighter text-black">
                                    Hours
                                  </p>
                                  <p className="fs-10 fw-lighter text-black">
                                    Mins
                                  </p>
                                </div>
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
                                  className=""
                                />
                                Participate Now
                              </Button>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Events;
