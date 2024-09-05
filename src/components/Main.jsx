import React, { useState, useEffect } from 'react';
import gr1 from '../assets/gr1.jpg';
import gr2 from '../assets/gr2.jpg';
import gr3 from '../assets/gr3.jpg';
import gr4 from '../assets/gr1.jpg';
import plannerIcon from '../assets/calander_icon.png';
import workflowIcon from '../assets/calander_icon.png';
import dashboardIcon from '../assets/calander_icon.png';
import customisationIcon from '../assets/calander_icon.png';

const images = [gr1, gr2, gr3, gr4];

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange((currentImageIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleImageChange = (index) => {
    setIsFading(false); // Start fade-out
    setTimeout(() => {
      setCurrentImageIndex(index); // Change the image
      setIsFading(true); // Start fade-in after image has changed
    }, 300); // Duration of the fade-out
  };

  return (
    <div id="main-features" className='flex flex-col items-center pt-5'>
      <div className='w-full flex flex-col justify-start px-[90px]'>
        <h1 className='text-left text-4xl font-bold py-1'>
          Main Features
        </h1>
        <p className='text-xl pb-5'>
          Empowers maintenance, property, asset, and 
          facilities managers with comprehensive tools 
          for 
          <br />tracking, managing, and optimizing their 
          operations. Experience enhanced efficiency and 
          cost 
          <br />savings.
        </p>
      </div>
      <div className='relative w-[965px] h-[430px]'>
        <img
          className={`absolute rounded-lg top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'}`}
          src={images[currentImageIndex]} alt="Current Feature" 
        />
      </div>
      <div className='flex justify-center gap-5 pt-[20px]'>
        <div>
          <button 
            className='flex font-semibold items-center px-[20px] py-[3px] rounded-lg border'
            onClick={() => handleImageChange(0)}>
            <img src={plannerIcon} alt="Planner Icon" className='w-[20px] h-[20px] mr-2' />
            Planner
          </button>
        </div>
        <div>
          <button 
            className='flex font-semibold items-center px-[20px] py-[3px] rounded-lg border'
            onClick={() => handleImageChange(1)}>
            <img src={workflowIcon} alt="Workflow Icon" className='w-[20px] h-[20px] mr-2' />
            Work Flow
          </button>
        </div>
        <div>
          <button 
            className='flex font-semibold items-center px-[20px] py-[3px] rounded-lg border'
            onClick={() => handleImageChange(2)}>
            <img src={dashboardIcon} alt="Dashboard Icon" className='w-[20px] h-[20px] mr-2' />
            Dashboard
          </button>
        </div>
        <div>
          <button 
            className='flex font-semibold items-center px-[20px] py-[3px] rounded-lg border'
            onClick={() => handleImageChange(3)}>
            <img src={customisationIcon} alt="Customization Icon" className='w-[20px] h-[20px] mr-2' />
            Customization
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
