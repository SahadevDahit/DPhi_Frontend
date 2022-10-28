import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
const view_challenge = () => {
  return (
    <>
      <div className="bg-white w-100 h-100">
        <div className="w-100" style={{ backgroundColor: "#F8F9FD" }}>
          <h3
            className="fw-bolder  p-5 ms-3 pb-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {" "}
            Challenge Details
          </h3>
        </div>
        <div className="w-100 h-100 pt-4">
          <Form className="position-absolute " style={{ left: "5rem" }}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fs-5" style={{ color: "#333333" }}>
                Challenge Name
              </Form.Label>
              <Form.Control
                style={{ width: "28rem" }}
                type="text"
                className="fs-5"
                placeholder="Data Sprint 72 -Butterfly Identification"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fs-5 py-2 " style={{ color: "#333333" }}>
                Start Date
              </Form.Label>
              <div className="d- flex " style={{ position: "relative" }}>
                <Form.Control
                  className="text-black-50 w-80   fs-5"
                  style={{
                    width: "28rem",
                    fontFamily: "FontAwesome, Arial; font-style: normal",
                  }}
                  type="text"
                  placeholder="17th Jun'22 09:00 PM"
                  onfocus="(this.type='date')"
                />
                <svg
                  style={{
                    position: "absolute",
                    right: "18rem",
                    top: "15px",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar4"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                </svg>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fs-5 py-2" style={{ color: "#333333" }}>
                End Date
              </Form.Label>
              <div className="d- flex " style={{ position: "relative" }}>
                <Form.Control
                  className="text-black-50 w-80   fs-5"
                  style={{
                    width: "28rem",
                    fontFamily: "FontAwesome, Arial; font-style: normal",
                  }}
                  type="text"
                  placeholder="21st Jun'22 11:00 PM"
                  onfocus="(this.type='date')"
                />
                <svg
                  style={{
                    position: "absolute",
                    right: "18rem",
                    top: "15px",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar4"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                </svg>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fs-5 py-2" style={{ color: "#333333" }}>
                Description
              </Form.Label>
              <FloatingLabel
                controlId=""
                label="Identify the class to which each  butterfly belongs to "
                className="mb-3 fs-5 fw-bold text-black-50"
              >
                <Form.Control
                  style={{ height: "13rem", width: "45rem" }}
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fs-5 py-3" style={{ color: "#333333" }}>
                Image
              </Form.Label>
              <div>
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "#F8F9FD",
                    border: "none",
                  }}
                  className="p-4"
                >
                  <Card.Img
                    style={{ borderRadius: "15px" }}
                    variant="top"
                    src="assets/cardimage/Group 1000002766.png"
                  />
                  <Card.Body>
                    <Card.Title className="d-flex">
                      <Image
                        width={20}
                        height={20}
                        src="assets/icons/bi_image-fill.svg"
                      />
                      <p
                        className="fs-6 fw-bold px-2"
                        style={{ color: "#4F9857" }}
                      >
                        Change image{" "}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        style={{ color: "green" }}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fs-5 py-2" style={{ color: "#333333" }}>
                Level Type
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="fw-bold"
                style={{ width: "15rem" }}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </Form.Select>
            </Form.Group>
            <Button
              variant="success"
              style={{ backgroundColor: "#44924C" }}
              className="my-4"
            >
              <h5 className="px-3 text-white">Save Changes</h5>
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default view_challenge;
