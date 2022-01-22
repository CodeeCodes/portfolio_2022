import meMeme from "../assets/photos/me-meme.jpeg";

export default function Header() {
  return (
    <div className="head_main">
      <div className="hello_avatar_div">
        <img src={meMeme} alt="avatar" className="hello_avatar" />
      </div>
      <h1 className="head_main_title">Codee J Palmer</h1>
      <h2 className="head_main_title_sub">Full Stack Web Developer</h2>
    </div>
  );
}
