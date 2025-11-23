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
            <Link to="/manifesto" className="nav-link">Manifesto</Link>
          </li>
          <li className="nav-item">
            <Link to="/why-rez" className="nav-link">Why Rez</Link>
          </li>
          <li className="nav-item">
            <a href="https://github.com/0xtdey/rezlitepaper/blob/main/Rez_Litepaper.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">Litepaper</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



