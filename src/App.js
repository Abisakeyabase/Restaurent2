
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Foods from './components/Foods';
import FooterSection from './components/FooterSection';
import ImageSlider from './components/ImageSlider';
import ScrollArrow from './components/Arrow';
import Content from './components/Content';
import CallSection from './components/CallSection';

function App() {
  return (
    <div>
      <CallSection/>
      <ScrollArrow />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <ImageSlider />
              <Content />            
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Foods" element={
            <>
            <Foods />
              <Home />
              </>
          }/>

        </Routes>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
