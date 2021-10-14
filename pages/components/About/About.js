import a from "../../../images/aboutimg.png";
const About = () => {
  return (
    <div className="about__container">
      <div className="about__wrapper">
        <div className="about__left">
          <div className="about__title white">About us</div>
          <div className="about__text white">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
            <br /> Exercitation veniam consequat sunt nostrud amet. <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
            <br /> Exercitation veniam consequat sunt nostrud amet.
          </div>
        </div>

        <img src={a.png} alt="about" className="about__img" />
      </div>
    </div>
  );
};

export default About;
