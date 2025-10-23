import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <ul className="site-nav__list">
        <li className="site-nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="site-nav__item">
          <Link to="/about">About Organization</Link>
        </li>
        <li className="site-nav__item">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}


