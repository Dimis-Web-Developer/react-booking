import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <span className="logo">
          <svg width="150" height="25">
            <text
              x="0"
              y="20"
              id="txt"
              fill=" white"
              stroke="none"
              fontSize="25"
              fontWeight={500}
            >
              DimsBooking
            </text>
          </svg>
        </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
