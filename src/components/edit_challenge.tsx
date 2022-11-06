import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
const Edit_challenge = () => {
  const [challenges, setChallenges] = useState<any>();
  const [image, setimage] = useState<any>("");
  const [loading, setloading] = useState<any>("false");
  const { _id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/dphi/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setChallenges(data);
        setloading("true");
      });
  }, []);
  const notify = () => toast.info("Wait updating...");

  const handleedit = async () => {
    try {
      notify();
      if (
        new Date(challenges.endDate).getTime() >
        new Date(challenges.startDate).getTime()
      ) {
        let formData = new FormData();
        formData.append("image", image[0]);
        formData.append("challengeName", challenges.challengeName);
        formData.append("startDate", challenges.startDate);
        formData.append("endDate", challenges.endDate);
        formData.append("description", challenges.description);
        formData.append("levelType", challenges.levelType);
        const res = await fetch(`http://localhost:5000/dphi/${_id}`, {
          method: "PUT",
          body: formData,
        });
        if (res.ok) {
          console.log("sucess to update");
          alert("sucessfully Updated");
        }
      } else {
        alert("End Date can't be earlier than startDate");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
      {loading === "false" ? (
        <h1>Loading.......</h1>
      ) : (
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
                    value={challenges.challengeName}
                    placeholder=""
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      e.preventDefault();
                      setChallenges({
                        ...challenges,
                        challengeName: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label
                    className="fs-5 py-2 "
                    style={{ color: "#333333" }}
                  >
                    Start Date
                  </Form.Label>
                  <div className="d- flex " style={{ position: "relative" }}>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="startdate"
                      value={challenges.startDate}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setChallenges({
                          ...challenges,
                          startDate: e.target.value,
                        });
                      }}
                      style={{ width: "28rem" }}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label
                    className="fs-5 py-2"
                    style={{ color: "#333333" }}
                  >
                    End Date
                  </Form.Label>
                  <div className="d- flex " style={{ position: "relative" }}>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="enddate"
                      value={challenges.endDate}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setChallenges({
                          ...challenges,
                          endDate: e.target.value,
                        });
                      }}
                      style={{ width: "28rem" }}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label
                    className="fs-5 py-2"
                    style={{ color: "#333333" }}
                  >
                    Description
                  </Form.Label>
                  <FloatingLabel
                    controlId=""
                    label=""
                    className="mb-3 fs-5 fw-bold text-black-50"
                  >
                    <Form.Control
                      style={{ height: "13rem", width: "45rem" }}
                      as="textarea"
                      placeholder="Leave a comment here"
                      value={challenges.description}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.preventDefault();
                        setChallenges({
                          ...challenges,
                          description: e.target.value,
                        });
                      }}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label
                    className="fs-5 py-3"
                    style={{ color: "#333333" }}
                  >
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
                        src={challenges.avatar}
                      />
                      <Card.Body>
                        <Card.Title className="d-flex">
                          <Image
                            width={20}
                            height={25}
                            src="assets/icons/bi_image-fill.svg"
                          />
                          <input
                            accept="image/*"
                            type="file"
                            title="sd"
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              event.preventDefault();
                              setimage(event.currentTarget.files);
                            }}
                          />
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label
                    className="fs-5 py-2"
                    style={{ color: "#333333" }}
                  >
                    Level Type
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="fw-bold"
                    style={{ width: "15rem" }}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      e.preventDefault();
                      setChallenges({
                        ...challenges,
                        levelType: e.target.value,
                      });
                      console.log(challenges);
                    }}
                  >
                    <option value={challenges.levelType}>
                      {challenges.levelType}
                    </option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </Form.Select>
                </Form.Group>
                <Button
                  variant="success"
                  style={{ backgroundColor: "#44924C" }}
                  className="my-4"
                  onClick={handleedit}
                >
                  <h5 className="px-3 text-white">Save Changes</h5>
                </Button>
              </Form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Edit_challenge;
