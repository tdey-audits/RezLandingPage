import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vision from './pages/Vision';
import WhyRez from './pages/WhyRez';
import Litepaper from './pages/Litepaper';
import './main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="gradient-bg"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/why-rez" element={<WhyRez />} />
          <Route path="/litepaper" element={<Litepaper />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
