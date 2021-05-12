import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="nav-bar">
    <div className="nav-left">
      <h1>Math Magicians</h1>
    </div>
    <div className="nav-right">

      <NavLink exact to="/" className="nav-item">
        Home |
      </NavLink>
      <NavLink to="/calculator" className="nav-item">
        Calculator |
      </NavLink>
      <NavLink to="/quotes" className="nav-item">
        Quotes
      </NavLink>

    </div>
  </div>
);

export default NavBar;
