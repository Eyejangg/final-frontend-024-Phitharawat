import React from "react";
import avatar from "../assets/images/avatar.png";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>ProLabtop</span>
        </div>
        <div className="featured-name">
          ll <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            I'm here to present a store that sells laptops, PCs, and computers
            where you can find product models, product previews, and many
            designs to choose from.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Shop Now <i className=""></i>
          </button>
          <button className="btn">
            Know More <i className=""></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/eyejang_03/profilecard/?igsh=MXBmZ21rMTQyaWRibw==">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/eye.phitharawat.9?mibextid=LQQJ4d">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/Eyejangg">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>

      
    </section>
  );
};

export default FeaturedBox;
