import './App.css';
import Navbar from './components/UI/Navbar';
// import Home from './pages';
import About from './pages/About';
import Skills from './pages/Skills';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Rent from './pages/Rent';
import HomePage from './components/UI/HomePage';



function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/rent' element={<Rent />} />
      </Routes>
    </Router>
  );
}

export default App;
