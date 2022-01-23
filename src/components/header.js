import meMeme from "../assets/photos/PP-WD.jpeg";
import email from "../assets/photos/email.png";
import github from "../assets/photos/svg/github.svg";
import linkedin from "../assets/photos/linkedin.png";

export default function Header() {
  return (
    <div className="head_main">
      <div className="head_details_div">
        <div className="head_details_div_small">
          <img className="head_details_image" src={github} alt="github" />
          <h3 className="head_details">Github</h3>
        </div>
        <div className="head_details_div_small">
          <img className="head_details_image" src={linkedin} alt="linkedin" />
          <h3 className="head_details">LinkedIn</h3>
        </div>
        <div className="head_details_div_small">
          <img className="head_details_image" src={email} alt="email" />
          <h3 className="head_details"> Email</h3>
        </div>
      </div>

      <div className="hello_avatar_div">
        <img src={meMeme} alt="avatar" className="hello_avatar" />
      </div>
      {/* <h1 className="head_main_title">Codee J Palmer</h1> */}
      {/* <h2 className="head_main_title_sub">Full Stack Web Developer</h2> */}
    </div>
  );
}
