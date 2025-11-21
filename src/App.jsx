import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
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
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/why-rez" element={<WhyRez />} />
          <Route path="/litepaper" element={<Litepaper />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
