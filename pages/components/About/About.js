import a from "../../../images/aboutimg.png";
const About = () => {
  return (
    <div className="about__container">
      <div className="about__wrapper">
        <div className="about__left">
          <p className="block-title white">About us</p>
          <div className="about__text white">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
            <br /> Exercitation veniam consequat sunt nostrud amet. <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
            <br /> Exercitation veniam consequat sunt nostrud amet.
          </div>
        </div>
        <div className="about__right">
          <img src={a.src} alt="about" className="about__img" />
        </div>
      </div>
    </div>
  );
};

export default About;
