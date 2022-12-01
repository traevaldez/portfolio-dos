import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
