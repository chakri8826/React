import "./index.css";
import {Link} from "react-router-dom"

const Header = () => (

  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <li>
          <Link className="" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
    