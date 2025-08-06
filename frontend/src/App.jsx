import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import { HeroSection } from './components/HeroSection';
import Footer from './components/Footer';
import { CourseOverview, LogoSlider } from './components/CourseOverview'
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import Alumni from './pages/Alumni';
import Courses from './pages/Courses';
import './App.css'
const Home = () => (
  <>
    <HeroSection />
    <LogoSlider />
    <CourseOverview />

  </>
);
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

