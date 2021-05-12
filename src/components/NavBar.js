import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="main-nav">
    <div className="nav-bar">
      <div className="nav-left">
        <h1>Math Magicians</h1>
      </div>
      <div className="nav-right">

        <NavLink exact to="/" className="nav-item" activeClassName="active-nav">
          <span className="active-nav">H</span>
          ome |
        </NavLink>
        <NavLink to="/calculator" className="nav-item" activeClassName="active-nav">
          <span className="active-nav">C</span>
          alculator |
        </NavLink>
        <NavLink to="/quotes" className="nav-item" activeClassName="active-nav">
          <span className="active-nav">Q</span>
          uotes
        </NavLink>

      </div>
    </div>
  </div>
);

export default NavBar;
