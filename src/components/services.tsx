import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import servicelist from "../db/services.json";
interface servicetype {
  icon_url: string;
  title: string;
  description: string;
}
const services: React.FC = () => {
  let service: servicetype[] = servicelist;
  return (
    <div className="w-100 h-100 bg-white py-5">
      <h1 className=" text-center">
        Why Participate in{" "}
        <span className="" style={{ color: "#44924C" }}>
          AI Challenges
        </span>
      </h1>
      <Container className="w-100 h-100 py-5 ps-5">
        <Row className="py-4 w-100">
          {service.map((data, index) => {
            return (
              <>
                <Col className="py-3">
                  <Card
                    key={index}
                    className="py-5 mx-2"
                    style={{
                      backgroundColor: "rgb(248,249,253)",
                      borderRadius: "1rem",
                      border: "none",
                      width: "30rem",
                    }}
                  >
                    <Card.Body className="mx-4">
                      <Image src={data.icon_url} width={50} height={50} />
                      <Card.Title>
                        <h3 className="py-2">{data.title}</h3>
                      </Card.Title>

                      <Card.Text>
                        <p className="fw-bold" style={{ color: "#64607D" }}>
                          {data.description}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default services;
