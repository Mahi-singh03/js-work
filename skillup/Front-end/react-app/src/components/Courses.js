import React from "react";
import "../css/Courses.css"
import image from "../Images/React.jpg"


const Courses = () => {
  return (
    <div className="container">
      <div id="card-slider" className="card-slider row">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="col-12 col-md-4">
            <div className="card">
              <img
                src={image} // Replace with your image source
                className="card-img-top"
                alt={`Card ${index + 1}`}
              />
              <div className="card-body">
                <h5 className="card-title">Course {index + 1}</h5>
                <p className="card-text">Detail of the Course {index + 1}.</p>
                <a href="#" className="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
