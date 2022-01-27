import cvPdf from "../assets/photos/CODEE_CV.pdf";
import email from "../assets/photos/email.svg";
import github from "../assets/photos/svg/github.svg";
import linkedin from "../assets/photos/linkedin.svg";
import cv from "../assets/photos/cv.svg";

export default function Header() {
  return (
    <div className="head_main">
      <ul className="head_details_div">
        <li className="head_details_div_small">
          <a
            href="https://github.com/CodeeCodes"
            target="_blank"
            rel="noopener noreferrer"
            className="head_details_div_small_link"
          >
            <img className="head_details_image" src={github} alt="github" />
            <h3 className="head_details">Github</h3>
          </a>
        </li>
        <li className="head_details_div_small">
          <a
            href="https://www.linkedin.com/in/codeepalmer/"
            target="_blank"
            rel="noopener noreferrer"
            className="head_details_div_small_link"
          >
            <img className="head_details_image" src={linkedin} alt="linkedin" />
            <h3 className="head_details">LinkedIn</h3>
          </a>
        </li>
        <li className="head_details_div_small">
          <a
            href="https://mail.google.com/mail"
            target="_blank"
            rel="noopener noreferrer"
            className="head_details_div_small_link"
          >
            <img className="head_details_image" src={email} alt="email" />
            <h3 className="head_details">Email</h3>
          </a>
        </li>
        <li className="head_details_div_small">
          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="head_details_div_small_link"
          >
            <img className="head_details_image" src={cv} alt="email" />
            <h3 className="head_details">CV</h3>
          </a>
        </li>
        {/* <img src={meMeme} alt="avatar" className="hello_avatar" /> */}
      </ul>
      <div className="hello_avatar_div">
        <h1 className="head_main_title">Codee J Palmer</h1>
        <h2 className="head_main_title_sub">Full Stack Web Developer</h2>
        <p className="head_main_title_sub">
          I’am Codee Palmer, a freelance web developer, from South Africa, lives
          in the USA. I loves to design and develop websites and applications.
          Working as freelance web developer since 2019 having gone to one of
          the premier development schools.
        </p>
      </div>
    </div>
  );
}
