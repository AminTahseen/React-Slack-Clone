import Logo from "../images/slackLogo.svg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Join Slack 2.0</h1>
        <h3>An Online Platform For You To Interact With Your Teammates</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link to="/signup">
          <button className="btn-start">Get Started</button>
        </Link>

        <button className="btn-text">
          Take The Tutorial <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <img src={Logo} height={300} className="hero-image" alt="hero" />
    </div>
  );
};
export default HeroSection;
