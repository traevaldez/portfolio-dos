import './App.css';
import './index.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Projects></Projects>
        <About></About>  
      </main>
    </div>
  );
}

export default App;
