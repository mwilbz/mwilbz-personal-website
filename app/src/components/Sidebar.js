import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
      <div className="Sidebar">
        <div className="Sidebar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/adventure">Adventure</NavLink>
        </div>
      </div>
    )
}

export default Sidebar;
