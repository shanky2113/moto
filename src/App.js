import './App.css';
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Product from './Components/Product.jsx';
import Designing from './Components/Designing.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './Components/Slider.jsx';



function App() {
  return (
    <div>
 <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Designing" element={<Designing />} />
        
      </Routes>
    </Router>

    </div>
    
    
  );
}

export default App;
