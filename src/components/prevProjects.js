import React, { useState } from "react";
import capstoneImage from "../assets/photos/capstone-mock.png";
import portfolioImage from "../assets/photos/portfolio.png";
import particleImage from "../assets/photos/particle.png";

// import liveImage from "../assets/svg/live.svg";

export default function PrevProjects() {
  const [projects, setProjects] = useState([
    {
      image: `${capstoneImage}`,
      url: "https://github.com/CodeeCodes/capstone-codee-palmer",
      techStack: "React, NodeJS, ExpressJS, MongoDb",
      summary:
        "  Sprint is an app, which allows anyone new to a city or new to the exercise world, connecting people in Vancouver about running routes around the city. See what people say about that route and follow yourself as you run these routes. Have up to date weather conditions and join the chat board to organize meetups and look up local races and runs around Vancouver .This is an app based around getting people moving with confidence and hopefully get like minded people connected.",
    },
    {
      image: `${portfolioImage}`,
      url: "https://github.com/CodeeCodes/portfolio-codee-palmer",
      liveUrl: "https://www.codeecodes.com/",
      techStack: "React, CSS, Github Pages",
      summary:
        "My first portfolio created using ReactJS and published using Github Pages. Using my foundations learnt at BrainStation Vancouver, I've built my portfolio to showcase my skills",
    },
    {
      image: `${particleImage}`,
      url: "https://github.com/CodeeCodes/particle-background",
      liveUrl: "https://codeecodes.github.io/particle-background/",
      techStack: "vanillaJS, CSS, Github Pages",
      summary:
        "A background animation of particles being connected. This was created with JavaScript and a JS library p5.JS. I'm exploring libraries and refreshing my JS skills",
    },
  ]);
  const [current, setCurrent] = useState(projects[0]);
  const [active, setActive] = useState(0);
  const handleSetClick = (event) => {
    setCurrent(projects[event.target.getAttribute("data-projects")]);
    setActive(event.target.getAttribute("data-projects"));
    let click = document.querySelector(".slider__button");
    click.classList.toggle("_active");
  };

  return (
    <div className="projects">
      <h1 className="projects__heading">Projects</h1>
      <div className="projects__div">
        <div className="projects__div-images">
          <img
            src={current.image}
            alt="capstone-mock"
            className="projects__image"
          />
          <a href={current.liveUrl}>
            <div className="projects__div-button">
              <h3 className="projects__heading-small">View Site</h3>
            </div>
          </a>
        </div>
        <div className="projects__div-small">
          <h3 className="projects__summary-heading">Tech-stack:</h3>
          <p className="projects__tech">{current.techStack}</p>
          <h3 className="projects__summary-heading"> SUMMARY:</h3>
          <p className="projects__summary">{current.summary}</p>
          <a href={current.url}>
            <div className="projects__div-button">
              <h3 className="projects__heading-small">View Source Code</h3>
            </div>{" "}
          </a>
        </div>
      </div>
      <div className="slider">
        {Object.keys(projects).map((index) => {
          return (
            <span
              onClick={(event) => handleSetClick(event)}
              data-projects={index}
              key={index}
              className="slider__button"
            />
          );
        })}
      </div>
    </div>
  );
}
