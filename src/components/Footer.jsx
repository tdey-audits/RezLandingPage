import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">RezLabs</h3>
            <p className="footer-tagline">Intelligent DeFi</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-list">
                <li><Link to="/vision" className="footer-link">Vision</Link></li>
                <li><Link to="/why-rez" className="footer-link">Why Rez</Link></li>
                <li><Link to="/litepaper" className="footer-link">Litepaper</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-heading">Connect</h4>
              <ul className="footer-list">
                <li><a href="https://twitter.com/rezlabs" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a></li>
                <li><a href="https://discord.gg/rezlabs" target="_blank" rel="noopener noreferrer" className="footer-link">Discord</a></li>
                <li><a href="https://github.com/rezlabs" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a></li>
                <li><a href="https://t.me/rezlabs" target="_blank" rel="noopener noreferrer" className="footer-link">Telegram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 RezLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



