import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="main-header">
      <h1>#todo</h1>
      <nav className="navbar-custom">
        <NavLink to="/" className="nav-link">
          All
          <span className="active__bar"></span>
        </NavLink>
        <NavLink to="active" className="nav-link">
          Active
          <span className="active__bar"></span>
        </NavLink>
        <NavLink to="completed" className="nav-link">
          Completed
          <span className="active__bar"></span>
        </NavLink>
      </nav>
    </header>
  );
};
