import React, { useEffect, useState, useRef } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import FOX from '../assets/FOXB.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current); // Clear any existing timeout
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay of 200ms before closing
  };

  const handleImageClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });

      setTimeout(() => {
        const carousel = document.querySelector('.carousel');
        if (carousel) {
          const carouselWidth = carousel.offsetWidth;
          const elementWidth = element.offsetWidth;
          const elementOffset = element.offsetLeft;
          const centerOffset = (carouselWidth - elementWidth) / 2;

          const scrollTo = elementOffset - centerOffset;

          carousel.scrollTo({
            left: scrollTo,
            behavior: 'smooth',
          });
        }
      }, 500);
    } else {
      navigate('/');
      setTimeout(() => {
        const newElement = document.getElementById(id);
        if (newElement) {
          window.scrollTo({ top: newElement.offsetTop, behavior: 'smooth' });

          const carousel = document.querySelector('.carousel');
          if (carousel) {
            const carouselWidth = carousel.offsetWidth;
            const elementWidth = newElement.offsetWidth;
            const elementOffset = newElement.offsetLeft;
            const centerOffset = (carouselWidth - elementWidth) / 2;

            const scrollTo = elementOffset - centerOffset;

            carousel.scrollTo({
              left: scrollTo,
              behavior: 'smooth',
            });
          }
        }
      }, 500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
    setIsSidebarDropdownOpen(false);
  };

  const handleBenefitClick = (id) => {
    scrollToSection(id);
    handleSidebarClose();
  };

  const handleSidebarDropdownToggle = () => {
    setIsSidebarDropdownOpen(!isSidebarDropdownOpen);
  };

  return (
    <>
      {/* Header for lg and larger screens */}
      <header className={`hidden lg:flex bg-white h-[60px] w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b-2 border-gray-300 shadow-md' : ''}`}>
        <div className='flex justify-between items-center w-full lg:px-[20px] sm:px-[15px] xs:px-[10px]'>
          <div className='flex items-center'>
            <img className='h-[45px] w-[90px] cursor-pointer' src={FOX} alt="FOX logo" onClick={handleImageClick} />
            <ul className='hidden xxs:flex items-center gap-5 ml-5'>
              <li className='relative group' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className='font-semibold text-md flex items-center'>
                  Product
                  <RiArrowDropDownLine className={`ml-2 text-2xl transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <ul className='absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10'>
                    <li className='font-bold text-md p-3 hover:bg-gray-100'>
                      <button onClick={() => scrollToSection('benefit1')}>Benefit 1</button>
                    </li>
                    <li className='font-bold text-md p-3 hover:bg-gray-100'>
                      <button onClick={() => scrollToSection('benefit2')}>Benefit 2</button>
                    </li>
                    <li className='font-bold text-md p-3 hover:bg-gray-100'>
                      <button onClick={() => scrollToSection('benefit3')}>Benefit 3</button>
                    </li>
                  </ul>
                )}
              </li>
              <li className='font-semibold text-md'>
                <a href="/aboutus">About Us</a>
              </li>
              <li className='font-semibold text-md'>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className='flex items-center ml-auto'>
            <ul className='hidden xxs:flex items-center gap-4'>
              <li>
                <a href="/login"> 
                  <button className='font-semibold text-md hover:bg-gray-200 rounded-lg h-[30px] w-[75px]'>
                    Log in
                  </button>
                </a>
              </li>
              <li>
                <a href="/register">
                  <button className='font-semibold text-md text-white bg-black hover:bg-gray-200 hover:text-black rounded-lg h-[30px] w-[127px]'>
                    Get Fox Now
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Header for screens smaller than lg */}
      <header className='lg:hidden fixed top-0 left-0 w-full bg-white h-[60px] flex items-center justify-between px-4 shadow-md z-50'>
        <img className='h-[45px] w-[90px] cursor-pointer' src={FOX} alt="FOX logo" onClick={handleImageClick} />
        <TiThMenu className='text-3xl cursor-pointer' onClick={handleSidebarToggle} />
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className='fixed top-0 left-0 h-full w-[70%] xs:w-[344px] sm:w-[400px] bg-white z-40 transition-transform duration-300'>
          <div className='flex items-center justify-between p-4'>
            <img className='h-[45px] w-[90px] cursor-pointer' src={FOX} alt="FOX logo" onClick={() => {
              navigate('/');
              handleSidebarClose();
            }} />
            <IoIosClose className='text-3xl cursor-pointer' onClick={handleSidebarClose} />
          </div>
          <ul className='p-4'>
            <li className='py-3'>
              <button className='font-semibold text-md flex items-center w-full' onClick={handleSidebarDropdownToggle}>
                Product
                <RiArrowDropDownLine className={`ml-2 text-2xl transition-transform duration-300 ${isSidebarDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSidebarDropdownOpen && (
                <ul className='mt-2 bg-white border border-gray-300 rounded-lg shadow-lg'>
                  <li className='font-bold text-md p-3 hover:bg-gray-100'>
                    <button onClick={() => handleBenefitClick('benefit1')}>Benefit 1</button>
                  </li>
                  <li className='font-bold text-md p-3 hover:bg-gray-100'>
                    <button onClick={() => handleBenefitClick('benefit2')}>Benefit 2</button>
                  </li>
                  <li className='font-bold text-md p-3 hover:bg-gray-100'>
                    <button onClick={() => handleBenefitClick('benefit3')}>Benefit 3</button>
                  </li>
                </ul>
              )}
            </li>
            <li className='py-3'>
              <a href="/aboutus" className='font-semibold text-md flex items-center w-full' onClick={handleSidebarClose}>
                About Us
              </a>
            </li>
            <li className='py-3'>
              <a href="/blog" className='font-semibold text-md flex items-center w-full' onClick={handleSidebarClose}>
                Blog
              </a>
            </li>
            <li className='py-3'>
              <a href="/login" className='font-semibold text-md flex items-center w-full' onClick={handleSidebarClose}>
                Log in
              </a>
            </li>
            <li className='py-3'>
              <a href="/register" className='font-semibold text-md text-white bg-black hover:bg-gray-200 hover:text-black rounded-lg w-full text-center block'>
                Get Fox Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
