
import './App.css';
import './index.js'
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Foods from './components/Foods';
import FooterSection from './components/FooterSection';
import ImageSlider from './components/ImageSlider';
import ScrollArrow from './components/Arrow';
import Menus from './components/Menus';
import CallSection from './components/CallSection';
import ScrollToTop from './components/ScrolltoTop.js';

function App() {
  return (
    <div>
      <CallSection/>
      <ScrollArrow />
      <Router>
      <ScrollToTop/>

        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <ImageSlider />  
              <Home/>         
            </>
          } />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Foods" element={
            <>
            <ImageSlider/>
            <Foods />
              <Menus/>
              </>
          }/>

        </Routes>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
