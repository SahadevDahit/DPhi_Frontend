import React from "react";
import { Navbar, Container } from "react-bootstrap";
const navbar = () => {
  return (
    <>
      <Navbar bg="white" variant="white">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://dphi.tech/static/images/favicon.1b324cf4d888.ico"
              width="40"
              height="35"
              className="d-inline-block align-top"
            />{" "}
            DPhi
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
