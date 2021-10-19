import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav flex-row">
      <div className="nav-brand">Blog</div>
      <div className="nav-items flex-row">
        <NavLink to="/" exact={true}>
          Home
        </NavLink>
        <NavLink to="/Categories">Categories</NavLink>
        <NavLink to="/Account">Account</NavLink>
      </div>
    </nav>
  );
}
