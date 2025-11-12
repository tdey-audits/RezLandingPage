import { Link } from 'react-router-dom';
import logo from '../assets/rez.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Rez Logo" className="nav-logo-img" />
          <span>RezLabs</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/vision" className="nav-link">Vision</Link>
          </li>
          <li className="nav-item">
            <Link to="/why-rez" className="nav-link">Why Rez</Link>
          </li>
          <li className="nav-item">
            <Link to="/litepaper" className="nav-link">Litepaper</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



