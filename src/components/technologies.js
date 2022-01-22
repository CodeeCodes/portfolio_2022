import React from "react";
import gitHubSvg from "../assets/photos/svg/github.svg";
import htmlSvg from "../assets/photos/svg/html-5.svg";
import cssSvg from "../assets/photos/svg/css.svg";
import reactSvg from "../assets/photos/svg/react.svg";
import jsSvg from "../assets/photos/svg/javascript.svg";
import sassSvg from "../assets/photos/svg/sass.svg";
import nodeSvg from "../assets/photos/svg/nodejs.svg";
import wordPressSvg from "../assets/photos/svg/wordpress.svg";
import phpSvg from "../assets/photos/svg/php.svg";

export default function Technologies() {
  return (
    <div className="tech">
      <h1 className="tech__heading">Technologies</h1>
      <div className="tech__image-div">
        <div className="tech__image-div-small">
          <img src={jsSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">javascript</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={reactSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">ReactJS</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={wordPressSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">WordPress</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={phpSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">PHP</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={nodeSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">NodeJS</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={htmlSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">HTML5</h5>
        </div>
        <div className="tech__image-div-small">
          <img src={cssSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">CSS</h5>
        </div>

        <div className="tech__image-div-small">
          <img src={sassSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">SASS</h5>
        </div>

        <div className="tech__image-div-small">
          <img src={gitHubSvg} alt="github" className="tech__image" />
          <h5 className="tech__image-heading">Github/Git</h5>
        </div>
      </div>
    </div>
  );
}
