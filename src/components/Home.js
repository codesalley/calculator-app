import introSvg from '../assets/undraw_mathematics_4otb.svg';
import './Home.css';

const HomePage = () => (
  <div className="home-intro">
    <div className="home-left">
      <div className="intro-header">
        <h2 className="header-h2">
          Welcome to
          {' '}
          <span>Math</span>
          {' '}
          universe!
        </h2>
        <p className="header-p">Everything can be represented with numbers</p>
      </div>
      <p className="lorem-p hide-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.

      </p>
      <p className="lorem-p">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
        {' '}
      </p>
    </div>
    <div className="home-right">
      <img src={introSvg} alt="intro-logo" className="intro-logo" />
    </div>
  </div>
);

export default HomePage;
