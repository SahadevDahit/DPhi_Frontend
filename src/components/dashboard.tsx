import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Dashboard: React.FC = () => {
  let navigate = useNavigate();
  const createChallenge = () => {
    navigate("/createChallenge");
  };
  return (
    <>
      <Row className="w-100 py-5 text-light" style={{ height: "85vh" }}>
        <Col className="position-relative">
          <div
            className="mt-5 position-absolute end-0 pe-2"
            style={{
              borderLeft: "0.5rem solid #FFCE5C",
              height: "100px",
            }}
          ></div>
        </Col>
        <Col xs="7" className="">
          <div className="py-5">
            <h1 className="lh-1 fs-0.7 py-3">
              Acceleration Innovation <br /> with Global AI Challenges
            </h1>
            <p className="py-3 fs-5">
              AI Challenges of DPhi simulate real-world problems. It is a <br />{" "}
              great pace to put your AI/Data Science skills to test on <br />{" "}
              diverse datasets allowing you to foster learning through <br />{" "}
              competitions.
            </p>
            <Button variant="light" onClick={createChallenge}>
              <h5 style={{ color: "#003145" }} className="lh-1 fs-0.7 ">
                Create Challenges{" "}
              </h5>
            </Button>{" "}
          </div>
        </Col>
        <Col>
          <Image src="/assets/icons/PicsArt_04-14-04.42 1.svg"></Image>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
