import Lottie from "lottie-react";
import "./Hero.css";
import codeAnimation from "../../../public/Animation/code.json";
const Hero = () => {
  return (
    <section className="hero">
      <div className="lift-section">
        <div className="parent-avatar">
          <img className="avatar" src="./portfolio.jpeg" alt="" />
          <span className="icon-verified icon-avatar" />
        </div>

        <h1 className="title">
          Hi, I am Dev, Ali Software Engineer,<br /> Frontend Developer{" "}
          <span>React JS</span>
        </h1>
        <p className="description">
          I am a software Devolopment and entrepreneur based in Cairo City. <br /> I am
          the Co-founder and Opreation Manager of Living it,<br /> where we teach
          English by different way.
        </p>
        <div className="icon">

          <div className="icons icon-linkedin" />
          <div className="icons icon-github" />
          <div className="icons icon-twitter" />
          <div className="icons icon-instagram" />
        </div>

      </div>
      <div className="rightSection">
        <Lottie loop={true} animationData={codeAnimation} />
      </div>
    </section>
  );
};

export default Hero;
