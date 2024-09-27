import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import FOX from '../assets/Logos/FOXB.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [hasShadow, setHasShadow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear any existing timeout
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const newTimeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay of 200ms before closing
    setTimeoutId(newTimeoutId);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
    setIsSidebarDropdownOpen(false);
  };

  const handleSidebarDropdownToggle = () => {
    setIsSidebarDropdownOpen(!isSidebarDropdownOpen);
  };

  return (
    <>
      {/* Header for xl and larger screens */}
      <header className={`bg-white h-[55px] w-full fixed top-0 left-0 z-50 flex items-center justify-between px-4 ${hasShadow ? 'shadow-md' : ''}`}>
        <div className='flex items-center'>
            <a href="/"><img  src={FOX} alt="FOX Logo" className='w-[90px] h-[45px] mb-[5px]' /></a>
          <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='relative ml-4'
          >
            <button className='flex items-center font-semibold text-md'>
              Product
              <RiArrowDropDownLine className={`text-2xl transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <ul className='absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg'>
                <li className='font-semibold text-md p-3 hover:bg-gray-100'>
                  <a href="/benefit1">Planner</a>
                </li>
                <li className='font-semibold text-md p-3 hover:bg-gray-100'>
                  <a href="/benefit2">Work Flow</a>
                </li>
                <li className='font-semibold text-md p-3 hover:bg-gray-100'>
                  <a href="/benefit3">Dahsboard</a>
                </li>
                <li className='font-semibold text-md p-3 hover:bg-gray-100'>
                  <a href="/benefit4">Customisation</a>
                </li>
              </ul>
            )}
          </div>
        <span className='relative inline-block ml-[20px] group'>
         <a href="/aboutus" className='cursor-pointer font-semibold text-md'>
             About Us
         </a>
         <span className='absolute left-0 bottom-0 w-full h-1 bg-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
        </span>
        <span className='relative inline-block ml-[30px] group'>
         <a href="*" className='cursor-pointer font-semibold text-md'>
             Blog
         </a>
         <span className='absolute left-0 bottom-0 w-full h-1 bg-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
        </span>
        </div>
        <div className='flex items-center'>
          <a href="https://app.foxmy.io/login">
            <button className='font-semibold text-md hover:bg-gray-200 rounded-lg h-[30px] w-[75px]'>
              Log in
            </button>
          </a>
          <a href="/register">
            <button className='font-semibold text-md text-white bg-[#FF5A5F] hover:bg-[#E14E52] hover:text-white rounded-lg h-[30px] w-[127px] ml-4'>
              Get FOX Now
            </button>
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className='lg:hidden fixed top-0 left-0 w-full bg-white h-[55px] flex items-center justify-between px-4 shadow-md z-50'>
        <a href="/">
          <img 
            src={FOX} 
            alt="FOX Logo" 
            className='w-[90px] h-[45px]' />
        </a>
        <TiThMenu className='text-3xl cursor-pointer' onClick={handleSidebarToggle} />
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className='fixed top-0 left-0 h-full w-[70%] xs:w-[344px] sm:w-[400px] bg-white z-40 transition-transform duration-300'>
          <div className='flex items-center justify-between p-4'>
          <a href="/" >
          <img 
            src={FOX} 
            alt="FOX Logo" 
            className='w-[90px] h-[45px]' />
        </a>
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
                  <li className='font-semibold text-md p-3 hover:bg-gray-100'>
                    <a href="/benefit1">Planner</a>
                  </li>
                  <li className='font-semibold text-md p-3 hover:bg-gray-100'>
                    <a href="/benefit2">Work Flow</a>
                  </li>
                  <li className='font-semibold text-md p-3 hover:bg-gray-100'>
                    <a href="/benefit3">Dashboard</a>
                  </li>
                  <li className='font-semibold text-md p-3 hover:bg-gray-100'>
                    <a href="/benefit3">Customisation</a>
                  </li>
                </ul>
              )}
            </li>
            <li className='py-3'>
              <a href="/aboutus" className='font-semibold text-md flex items-center w-full'>
                About Us
              </a>
            </li>
            <li className='py-3'>
              <a href="/blog" className='font-semibold text-md flex items-center w-full'>
                Blog
              </a>
            </li>
            <li className='py-3'>
              <a href="https://app.foxmy.io/login" className='font-semibold text-md flex items-center w-full'>
                Log in
              </a>
            </li>
            <li className='py-3'>
              <a href="/register" className='py-3'>
                <button className='font-semibold text-md text-white bg-[#FF5A5F] hover:bg-[#E14E52] hover:text-white rounded-lg w-full text-center h-[30px]'>
                  Get FOX Now
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
