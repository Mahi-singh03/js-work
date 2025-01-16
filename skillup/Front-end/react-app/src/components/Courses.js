import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../css/Courses.css";
import image from "../Images/React.jpg";

const Courses = () => {
  return (
    <div className="container">
      <h1 className="text-center main_heading">All Courses</h1>
      <div className="Card_T row justify-content-center">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm">
              <img
                src={image} // Replace with your image source
                className="card-img-top img-fluid"
                alt={`Card ${index + 1}`}
              />
              <div className="card-body">
                <h5 className="card-title">Course {index + 1}</h5>
                <p className="card-text">Detail of the Course {index + 1}.</p>
                {/* Wrap the Register button with Link */}
                <Link to="/Registration" className="btn btn-primary">
                  Register
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
