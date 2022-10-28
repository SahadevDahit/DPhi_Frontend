import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const services = () => {
  return (
    <div className="w-100 h-100 bg-white py-5">
      <h1 className=" text-center">
        Why Participate in{" "}
        <span className="" style={{ color: "#44924C" }}>
          AI Challenges
        </span>
      </h1>
      <Container className="w-100 h-100 py-5 ">
        <Row className="py-4 ">
          <Col>
            <Card
              className="py-5 mx-2"
              style={{
                backgroundColor: "rgb(248,249,253)",
                borderRadius: "1rem",
                border: "none",
              }}
            >
              <Card.Body className="mx-4">
                <Image
                  src="/assets/icons/carbon_notebook-reference.svg"
                  width={50}
                  height={50}
                />
                <Card.Title>
                  <h3 className="py-2">Prove your skills</h3>
                </Card.Title>

                <Card.Text>
                  <p className="fw-bold" style={{ color: "#64607D" }}>
                    Gain substantial experience by solving real-world problems
                    and pit against others to come up with innovative solutions.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="py-5 mx-2"
              style={{
                backgroundColor: "rgb(248,249,253)",
                borderRadius: "1rem",
                border: "none",
              }}
            >
              <Card.Body className="mx-4">
                <Image src="/assets/icons/Vector.svg" width={50} height={50} />
                <Card.Title>
                  <h3 className="py-2">Learn from community</h3>
                </Card.Title>

                <Card.Text>
                  <p className="fw-bold" style={{ color: "#64607D" }}>
                    One can look and analyze the solutions submitted by the
                    other Data Scientists in the community and learn from them.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            <Card
              className="py-5 mx-2"
              style={{
                backgroundColor: "rgb(248,249,253)",
                borderRadius: "1rem",
                border: "none",
              }}
            >
              <Card.Body className="mx-4">
                <Image src="/assets/icons/Robot.svg" width={50} height={50} />
                <Card.Title>
                  <h3 className="py-2">Challenge yourself</h3>
                </Card.Title>

                <Card.Text>
                  <p className="fw-bold" style={{ color: "#64607D" }}>
                    There is nothing for you to lose by participating in a
                    challenge. You can fail safe, learn about the entire
                    experience and bounce back harder.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="py-5 mx-2"
              style={{
                backgroundColor: "rgb(248,249,253)",
                borderRadius: "1rem",
                border: "none",
              }}
            >
              <Card.Body className="mx-4">
                <Image
                  src="/assets/icons/IdentificationCard.svg"
                  width={50}
                  height={50}
                />
                <Card.Title>
                  <h3 className="py-2">Earn recognition</h3>
                </Card.Title>

                <Card.Text>
                  <p className="fw-bold" style={{ color: "#64607D" }}>
                    You will stand out from the crowd if you do well in AI
                    challenges, it will not only help you shine in the community
                    but also earns rewards.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default services;
