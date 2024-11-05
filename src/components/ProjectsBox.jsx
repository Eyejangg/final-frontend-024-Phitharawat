import React from "react";
import laptop from "../assets/images/laptop.jpg";

const ProjectsBox = () => {
  return (
    <section className="section" id="Projects">
      <div className="top-header">
        <h1>Poppular</h1>
      </div>

      <div className="project-container">
        <div className="project-box">
          <i class="uil uil-laptop"></i>
          <h3>Laptop</h3>
          <label>
            Laptop<i className="uil uil-star"></i>
          </label>
          <h4>5$</h4>
          <div className="featured-text-card">
            <span>
              <i class="uil uil-shopping-cart"></i>
            </span>
          </div>
        </div>

        <div className="project-box">
          <i class="uil uil-laptop"></i>
          <h3>Computer</h3>
          <label>
            Computer<i className="uil uil-star"></i>
          </label>
          <h4>5$</h4>
          <div className="featured-text-card">
            <span>
              <i class="uil uil-shopping-cart"></i>
            </span>
          </div>
        </div>

        <div className="project-box">
          <i class="uil uil-laptop"></i>
          <h3>Pc</h3>
          <label>
            Pc<i className="uil uil-star"></i>
          </label>
          <h4>5$</h4>
          <div className="featured-text-card">
            <span>
              <i class="uil uil-shopping-cart"></i>
            </span>
          </div>
        </div>

        <div className="project-box">
          <i class="uil uil-laptop"></i>
          <h3>Chock</h3>
          <label>
            Chock<i className="uil uil-star"></i>
          </label>
          <h4>5$</h4>
          <div className="featured-text-card">
            <span>
              <i class="uil uil-shopping-cart"></i>
            </span>
          </div>
        </div>

        <div className="col">
          <div className="contact-info">
            <h2>
              .. <i className="uil uil-corner-right-down"></i>
            </h2>
            <p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </p>
            </p>
            <p>
              <i class="uil uil-eye"></i>Eyejang
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
