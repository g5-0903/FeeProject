import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🚆 Rail<span>Sync</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Find Train</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
