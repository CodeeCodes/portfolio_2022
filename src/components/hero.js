import hero_image from "../assets/photos/DEMO_DAY_WEB.jpeg";

const hero = () => {
  return (
    <div className="hero">
      <h1 className="hero_heading">About me</h1>
      <div className="hero_div">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eos illum deserunt numquam fugiat maiores, reprehenderit at rem
            tempore nulla porro modi maxime molestiae officia vero sint, vitae
            in commodi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eos illum deserunt numquam fugiat maiores, reprehenderit at rem
            tempore nulla porro modi maxime molestiae officia vero sint, vitae
            in commodi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eos illum deserunt numquam fugiat maiores, reprehenderit at rem
            tempore nulla porro modi maxime molestiae officia vero sint, vitae
            in commodi.
          </p>
        </div>
        <div>
          <img className="hero_div_image" src={hero_image} alt="hero image" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
            accusantium aperiam. Voluptates dicta dolores dolor, at natus
            voluptatum nihil laboriosam nulla excepturi amet distinctio maxime
            velit accusamus, dolore adipisci quis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default hero;
