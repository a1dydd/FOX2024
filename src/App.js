import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet
import favicon from './assets/FOXB2.png';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Benefits from './components/Benefits';
import MainFeatures from './components/MainFeatures';
import MainCTA from './components/MainCTA';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Cookie from './components/Cookie';
import Register from './components/Register';
import TermPrivacy from './components/TermPrivacy';
import AboutUs from './components/AboutUs';
import PageNotFound from './components/PageNotFound';
import Blog from './components/Blog'; // Import your Blog component
import Benefit1 from './components/Benefit1';
import Benefit2 from './components/Benefit2';
import Benefit3 from './components/Benefit3';
import Benefit4 from './components/Benefit4';

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

  // Update favicon based on the current route
  useEffect(() => {
    updateFavicon(favicon);
  }, [location.pathname]);

  return (
    <div className='2xl:max-w-[1500px] 2xl:w-full 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center mx-auto'>
      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <title>FOX</title>
              <meta name="description" content="Home page of FOX website." />
            </Helmet>
             <Header />
            <Hero />
            <Main />
            <Benefits />
            <MainFeatures />
            <MainCTA />
             <Footer />
            <Copyright />
           <Cookie /> {/* */}
          </>
        } />  

        <Route path="/benefit1" element={
          <>
            <Helmet>
              <title>FOX Benefit</title>
              <meta name="description" content="FOX Benefit 1" />
            </Helmet>
            <Header />
            <Benefit1 />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="/benefit2" element={
          <>
            <Helmet>
              <title>FOX Benefit</title>
              <meta name="description" content="FOX Benefit 2" />
            </Helmet>
            <Header />
            <Benefit2 />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="/benefit3" element={
          <>
            <Helmet>
              <title>FOX Benefit</title>
              <meta name="description" content="FOX Benefit 3" />
            </Helmet>
            <Header />
            <Benefit3 />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="/benefit4" element={
          <>
            <Helmet>
              <title>FOX Benefit</title>
              <meta name="description" content="FOX Benefit 4" />
            </Helmet>
            <Header />
            <Benefit4 />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="/register" element={
          <>
            <Helmet>
              <title>FOX Request</title>
              <meta name="description" content="Register for FOX Request." />
            </Helmet>
            <Header />
            <Register />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="/termprivacy" element={
          <>
            <Helmet>
              <title>FOX Terms & Privacy</title>
              <meta name="description" content="FOX Terms & Privacy Policy." />
            </Helmet>
            <Header />
            <TermPrivacy />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

        <Route path="/aboutus" element={
          <>
            <Helmet>
              <title>FOX About Us</title>
              <meta name="description" content="Learn more about FOX." />
            </Helmet>
            <Header />
            <AboutUs />
            <MainCTA />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />

       {/* <Route path="/blog" element={
          <>
            <Helmet>
              <title>FOX Blog</title>
              <meta name="description" content="Explore FOX blog posts."/>
            </Helmet>
            <Header />
            <Blog />
            <Footer />
            <Copyright />
            <Cookie />
          </>
        } />*/}

        <Route path="*" element={
          <>
            <Helmet>
              <title>Page Not Found</title>
              <meta name="description" content="This page does not exist." />
            </Helmet>
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
