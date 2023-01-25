import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";

const Createchallenge = () => {
  const [image, setimage] = useState<any>();
  const [formdata, set_formdata] = useState({
    challengeName: "",
    startDate: "",
    endDate: "",
    description: "",
    levelType: "Easy",
  });
  const notify = () => toast.info("Wait creating...");

  const handlesubmit = async () => {
    // e.preventDefault();
    try {
      if (
        (new Date(formdata.endDate).getTime() >
          new Date(formdata.startDate).getTime() &&
          image !== undefined) ||
        ""
      ) {
        let formData = new FormData();
        formData.append("image", image[0]);
        formData.append("challengeName", formdata.challengeName);
        formData.append("startDate", formdata.startDate);
        formData.append("endDate", formdata.endDate);
        formData.append("description", formdata.description);
        formData.append("levelType", formdata.levelType);

        const headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
        };
        notify();

         await fetch(`${process.env.REACT_APP_BACKEND_URL}/dphi`, {
//         await fetch(`http://localhost:4000/dphi`, {
          mode: "no-cors",
          // credentials: "include",
          method: "POST",
          headers: headers,
          body: formData,
        })
          .then((res) => alert("Sucessfully created...."))
          .catch((err) => console.log(err));
      } else {
        alert("End Date can't be earlier than startDate or select Image");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />

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
        <div className="w-100 h-100 pt-4 container">
          <Form className="position-absolute " style={{ left: "5rem" }}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fs-5" style={{ color: "#333333" }}>
                Challenge Name
              </Form.Label>
              <Form.Control
                style={{ width: "28rem" }}
                type="text"
                className="fs-5"
                placeholder="Challenge Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  formdata.challengeName = e.target.value;
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fs-5 py-2 " style={{ color: "#333333" }}>
                Start Date
              </Form.Label>
              <div className="d- flex " style={{ position: "relative" }}>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="startdate"
                  placeholder="dd-mm-yyyy"
                  onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                    formdata.startDate = e.target.value;
                  }}
                  style={{ width: "28rem" }}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fs-5 py-2" style={{ color: "#333333" }}>
                End Date
              </Form.Label>
              <div className="d- flex " style={{ position: "relative" }}>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="enddate"
                  placeholder="dd-mm-yyyy"
                  onSelect={(e: React.ChangeEvent<HTMLInputElement>) => {
                    formdata.endDate = e.target.value;
                  }}
                  style={{ width: "28rem" }}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fs-5 py-2" style={{ color: "#333333" }}>
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    formdata.description = e.target.value;
                  }}
                />
              </FloatingLabel>
            </Form.Group>
            {/* //upload button */}
            <Form.Group className="mb-3" controlId="">
              <Form.Label className="pt-4" style={{ color: "#333333" }}>
                Image
              </Form.Label>
            </Form.Group>

            <div className="d-flex justify-content-lg-start  container-fluid pt-1">
              <h5 className=" text-black-50 fw-bold">Upload</h5>
              <Image
                width={20}
                height={20}
                src="assets/icons/bxs_cloud-upload.svg"
              />
              <input
                accept="image/*"
                type="file"
                title="sd"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  setimage(event.currentTarget.files);
                }}
              />
            </div>

            <Form.Group className="mb-3" controlId="">
              <Form.Label className="fs-5 py-2" style={{ color: "#333333" }}>
                Level Type
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="fw-bold"
                style={{ width: "15rem" }}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  formdata.levelType = e.target.value;
                }}
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
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                // e.preventDefault();
                handlesubmit();
              }}
            >
              <h5 className="px-3 text-white">Create Challenge</h5>
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Createchallenge;
