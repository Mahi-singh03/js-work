import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import image from "../Images/b3.jpg";
import image_2 from "../Images/React.jpg";
import "../css/Home.css";

const App = () => {
  const scrollLeft = () => {
    document.getElementById("card-slider").scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("card-slider").scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image} className="d-block w-100 cropped-img" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image} className="d-block w-100 cropped-img" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image} className="d-block w-100 cropped-img" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2>Available Courses</h2>

      <div className="card-slider-container">
        <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
        <div id="card-slider" className="card-slider">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="card">
              <img src={image_2} className="card-img-top" alt={`Card ${index + 1}`} />
              <div className="card-body">
                <h5 className="card-title">Course {index + 1}</h5>
                <p className="card-text">Details of course {index + 1}.</p>
                <Link to="/Registration" className="btn btn-primary">Register</Link>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
      </div>

      <div className="see-all-btn-container">
        <Link to="/courses" className="see-all-btn ">See All Courses</Link>
      </div>

      <h2>About Us</h2>

      <figure className="text-center">
        <blockquote className="blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales tortor vel neque facilisis suscipit...</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default App;
