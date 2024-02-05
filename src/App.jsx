import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Sketchbook from './components/sketchbook/Sketchbook';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Portfolio />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/sketchbook"
            element={<Sketchbook />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
