import CarouselPage from './components/carousel/CarouselPage';
import NavPage from './components/navbar/NavPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Home from './pages/Home';
import BlogDetails from './components/Blog/BlogDetails';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog/blog-details" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
