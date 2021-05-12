import introSvg from '../assets/undraw_mathematics_4otb.svg';
import './Home.css';

const HomePage = () => (
  <div className="home-intro">
    <div className="home-left">
      right side
    </div>
    <div className="home-right">
      <img src={introSvg} alt="intro-logo" className="intro-logo" />
    </div>
  </div>
);

export default HomePage;
