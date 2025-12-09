import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Demo from './demo';
import Contact from './contact';
import Login from './Login';
import './index.css';


function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connecter" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
