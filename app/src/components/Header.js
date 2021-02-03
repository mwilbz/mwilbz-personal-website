import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <div className="Header">
        <div className="Header-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/adventure">Adventure</NavLink>
        </div>
      </div>
    )
}

export default Header;
