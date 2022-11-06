import Image from "react-bootstrap/Image";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";

const Events_details = () => {
  const [challenges, setChallenges] = useState<any>(null);
  const [loading, setloading] = useState<any>("false");
  const navigate = useNavigate();
  const { _id } = useParams();
  const notify = () => toast.info("Wait deleting...");

  useEffect(() => {
    fetch(`http://localhost:5000/dphi/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setChallenges(data);
        setloading("true");
      });
  }, []);
  const handledelete = async () => {
    try {
      notify();
      const res = await fetch(`http://localhost:5000/dphi/${_id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        navigate("/");
        alert("Sucessfully Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />

      {loading == "false" ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <div className="w-100 h-100" style={{ backgroundColor: "#003145" }}>
            <div
              className="container text-white w-100"
              style={{
                paddingTop: "9rem",
                paddingBottom: "9rem",
              }}
            >
              <p
                className="fs-6 py-2 fw-bold text-black"
                style={{
                  width: "33rem",
                  backgroundColor: "#FFCE5C",
                  fontFamily: "Inter, sans-serif",
                  borderRadius: "5px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="mx-2 ms-4 bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                Starts on
                {new Date(challenges.startDate).toUTCString()} (India Standard
                Time)
              </p>
              <h1
                className="fw-bold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {challenges.challengeName}
              </h1>
              <p className="fs-5">Level</p>

              <button
                style={{
                  borderRadius: "5px",
                  border: "none",
                  color: "#003145",
                }}
                className="p-1 px-3 fw-bold d-flex"
              >
                <Image
                  width={20}
                  height={20}
                  src="assets/icons/carbon_skill-level-basic.svg"
                  className="me-1"
                />
                {challenges.levelType}
              </button>
            </div>
          </div>
          <div className="bg-white">
            <div className="bg-white h-100 d-flex justify-content-between align-items-center py-4 shadow-lg p-3 mb-5 bg-body">
              <div
                className="container h-25 d-flex justify-content-center position-relative"
                style={{ flexDirection: "column" }}
              >
                <p className="ps-5  fw-bolder fs-4 position-absolute pt-5">
                  Overvview
                </p>
                <div
                  className="divider pt-1 bg-success rounded-3 ms-5 position-absolute"
                  style={{ width: "7.5rem", marginTop: "5rem" }}
                ></div>
              </div>
              <div className="d-flex">
                <Link
                  to={`/edit/${_id}`}
                  className="p-2 px-4 fw-bold text-white me-3"
                  style={{
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#44924C",
                  }}
                >
                  Edit
                </Link>
                <Button
                  className="p-2 px-4 bg-white-50 fw-bold me-5"
                  style={{
                    borderRadius: "10px",
                    color: "red",
                    border: "1px solid red",
                  }}
                  onClick={handledelete}
                >
                  Delete
                </Button>
              </div>
            </div>
            <div className="bg-white container text-secondary py-2 fs-5 fw-bold  ps-5 ms-4 pe-5 ">
              <p>{challenges.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Events_details;
