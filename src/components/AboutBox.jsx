import React from "react";
import avatar from "../assets/images/avatar.png";
import computer from "../assets/images/computer.png";

const AboutBox = () => {
  return (
    <section className="section" id="About">
      <div className="top-header">
        <h1>About Me </h1>
      </div>
      <div className="row">
        {/** About me */}
        <div className="col">
          <h3></h3>
          <div className="about-image">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
          </div>

          <div className="about-btn"></div>
        </div>

        {/** Skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Computer West gate simulator </h3>
            </div>
            <div className="featured-text-info">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised
              </p>
              <div className="about-image">
                <div className="image">
                  <img src={computer} alt="computer" />
                </div>
              </div>
            </div>
            <div className="featured-text-info">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
