import hero_image from "../assets/photos/DEMO_DAY_WEB.jpeg";

const hero = () => {
  return (
    <div className="hero_div">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos
        illum deserunt numquam fugiat maiores, reprehenderit at rem tempore
        nulla porro modi maxime molestiae officia vero sint, vitae in commodi.
      </p>
      <img className="hero_div_image" src={hero_image} alt="hero image" />
    </div>
  );
};

export default hero;
