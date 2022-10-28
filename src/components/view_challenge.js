import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
const Events_details = () => {
  let navigate = useNavigate();
  const editChallenge = () => {
    navigate("/edit");
  };
  return (
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
              width: "32rem",
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
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </p>
          <h1 className="fw-bold" style={{ fontFamily: "Inter, sans-serif" }}>
            Data Sprint 72 - Butterfly Identification
          </h1>
          <p className="fs-5">
            Identify the class to which each butterfly belongs to
          </p>

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
            Easy
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
            <button
              className="p-2 px-4 fw-bold text-white me-3"
              style={{
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#44924C",
              }}
              onClick={editChallenge}
            >
              Edit
            </button>
            <button
              className="p-2 px-4 bg-white-50 fw-bold me-5"
              style={{
                borderRadius: "10px",
                color: "red",
                border: "1px solid red",
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="bg-white container text-secondary py-2 fs-5 fw-bold  ps-5 ms-4 pe-5 ">
          <p className="">
            Butterfies are the adult flying stage of certain insects belonging
            to an order or gropu called Lepidoptera.The word "Lepidoptera" means
            "scaly wing" in Greek. This name perfectly suits the insects in this
            group because their wings are covered with thousands of tiny scales
            overlapping in rows.
          </p>
          <p className="">
            An agency of Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
          </p>
          <p>
            Your Task is to build an Image Classification Model using CNN that
            classifies to which of weather each image belongs to.
          </p>
        </div>
      </div>
    </>
  );
};

export default Events_details;
