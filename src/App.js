import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import favicon from './assets/FOXB2.png';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Logo from './components/Logo';
import Benefits from './components/Benefits';
import MainFeatures from './components/MainFeatures';
import MainCTA from './components/MainCTA';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Cookie from './components/Cookie';
import Login from './components/Login';
import Register from './components/Register';
import TermPrivacy from './components/TermPrivacy';
import AboutUs from './components/AboutUs';
import PageNotFound from './components/PageNotFound';
import Blog from './components/Blog'; // Import your Blog component

function App() {
  const location = useLocation();

  // Function to update the favicon
  const updateFavicon = (iconURL) => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = iconURL;
    document.getElementsByTagName('head')[0].appendChild(link);
  };

  // Set document title and favicon based on the current route
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'FOX';
        updateFavicon(favicon);
        break;
      case '/login':
        document.title = 'FOX Asset';
        updateFavicon(favicon);
        break;
      case '/register':
        document.title = 'FOX Register';
        updateFavicon(favicon);
        break;
      case '/blog':
        document.title = 'FOX Blog';
        updateFavicon(favicon);
        break;
      default:
        document.title = 'FOX';
        updateFavicon(favicon);
    }
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route path="/home" element={
          <>
            <Header />
            <Hero />
            <Main />
            <Logo />
            <Benefits />
            <MainFeatures />
            <MainCTA />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="/login" element={
          <>
            <Login />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="/register" element={
          <>
            <Header />
            <Register />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="/termprivacy" element={
          <>
            <Header />
            <TermPrivacy />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="/aboutus" element={
          <>
            <Header />
            <AboutUs />
            <MainCTA />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="/blog" element={
          <>
            <Header />
            <Blog />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="" element={
          <>
            <Header />
            <PageNotFound />
            <MainCTA />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
