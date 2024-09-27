import React, { useState, useEffect } from 'react';
import gr1 from '../assets/Screenshots/6.png';
import gr2 from '../assets/Screenshots/10.png';
import gr3 from '../assets/Screenshots/1.png';
import gr4 from '../assets/Screenshots/1.png';
import planner from '../assets/Icons/calander_icon.png';
import workflow from '../assets/Icons/workflow_icon.png';
import dashboard from '../assets/Icons/dashboard_icon.png';
import customization from '../assets/Icons/custom_icon.png';

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
    <section className='
    sm:mt-[100px] sm:flex sm:flex-col sm:w-full sm:items-center sm:px-[30px]
    md:mt-[100px] md:flex md:flex-col md:w-full md:items-center m
    lg:mt-[100px] lg:flex lg:flex-col lg:w-full lg:items-center
   xl:mt-[100px] xl:flex xl:flex-col xl:w-full xl:items-center
   2xl:mt-[100px] 2xl:flex 2xl:flex-col 2xl:w-full 2xl:items-center
    '> 
      <div className='
      sm:text-left
      md:text-left
      lg:text-left
      xl:text-left
     2xl:text-left
      '>
        <h1 className='
        sm:text-[50px]
        md:text-[80px]
        lg:text-[80px]
        xl:text-[80px]
       2xl:text-[80px]
       tracking-[-4px] font-bold'>Main Features</h1>
        <p className='
        sm:text-[20px] sm:leading-[25px]
        md:text-[25px] md:leading-[30px]
        lg:text-[25px] lg:leading-[30px]
       xl:text-[25px] xl:leading-[30px]
       2xl:text-[25px] 2xl:leading-[30px]
       font-semibold'>
          Empowers maintenance, property, asset, and 
          facilities managers with comprehensive tools 
          for tracking, managing, and optimizing their 
          operations. Experience enhanced efficiency and 
          cost savings.</p>
      </div>
      <div className='
      sm:min-h-[300px] sm:w-full sm:h-full sm:mt-[25px] sm:flex sm:items-center sm:justify-center sm:relative overflow-hidden rounded-lg
      md:min-h-[500px] md:w-full md:h-full md:mt-[25px] md:flex md:items-center md:justify-center md:relative 
      lg:min-h-[500px] lg:w-full lg:h-full lg:mt-[25px] lg:flex lg:items-center lg:justify-center lg:relative 
      xl:min-h-[600px] xl:w-full xl:h-full xl:mt-[25px] xl:flex xl:items-center xl:justify-center xl:relative 
      2xl:min-h-[700px] 2xl:w-full 2xl:h-full 2xl:mt-[25px] 2xl:flex 2xl:items-center 2xl:justify-center 2xl:relative'>
      <img 
      src={images[currentImageIndex]} 
      alt="Current Feature"
      className={`w-full h-auto object-contain transition-opacity duration-700 ease-in-out rounded-lg ${isFading ? 'opacity-100' : 'opacity-0'}`}/>
      </div>


      <div className='
      sm:mt-[25px] sm:gap-2 sm:flex sm:flex-wrap sm:justify-center
      md:mt-[25px] md:gap-5 md:flex md:flex-wrap
      lg:mt-[25px] lg:gap-6 lg:flex lg:flex-wrap
      xl:mt-[25px] xl:gap-6 xl:flex xl:flex-wrap 
     2xl:mt-[25px] 2xl:gap-6 2xl:flex 2xl:flex-wrap
        '>
        <button onClick={() => handleImageChange(0)}
          className='
          sm:text-[14px] sm:px-[5px] sm:py-[2px] sm:flex
          md:text-[20px] md:px-[10px] md:py-[2px] md:flex
          lg:text-[20px] lg:px-[10px] lg:py-[2px] lg:flex
          xl:text-[20px] xl:px-[10px] xl:py-[2px] xl:flex
         2xl:text-[20px] 2xl:px-[10px] 2xl:py-[2px] 2xl:flex
         font-semibold items-center rounded-lg border border-[#E14E52]'>
          <img src={planner} alt="Icon"
          className='
          sm:w-[17px] sm:h-[17px] sm:mr-[2px]
          md:w-[20px] md:h-[20px] md:mr-[2px]
          lg:w-[20px] lg:h-[20px] lg:mr-[2px]
          xl:w-[20px] xl:h-[20px] xl:mr-[2px]
         2xl:w-[20px] 2xl:h-[20px] 2xl:mr-[2px]'/>Planner
        </button>
        <button onClick={() => handleImageChange(1)}
          className='
          sm:text-[14px] sm:px-[5px] sm:py-[2px] sm:flex
          md:text-[20px] md:px-[10px] md:py-[2px] md:flex
          lg:text-[20px] lg:px-[10px] lg:py-[2px] lg:flex
          xl:text-[20px] xl:px-[10px] xl:py-[2px] xl:flex
         2xl:text-[20px] 2xl:px-[10px] 2xl:py-[2px] 2xl:flex
         font-semibold items-center rounded-lg border border-[#E14E52]'>
          <img src={workflow} alt="Icon"
          className='
          sm:w-[17px] sm:h-[17px] sm:mr-[6px]
          md:w-[19px] md:h-[19px] md:mr-[6px]
          lg:w-[19px] lg:h-[19px] lg:mr-[6px]
           xl:w-[19px] xl:h-[19px] xl:mr-[6px]
         2xl:w-[19px] 2xl:h-[19px] 2xl:mr-[6px]'/>Work Flow
        </button>
        <button onClick={() => handleImageChange(2)}
          className='
          sm:text-[14px] sm:px-[5px] sm:py-[2px] sm:flex
          md:text-[20px] md:px-[10px] md:py-[2px] md:flex
          lg:text-[20px] lg:px-[10px] lg:py-[2px] lg:flex
          xl:text-[20px] xl:px-[10px] xl:py-[2px] xl:flex
         2xl:text-[20px] 2xl:px-[10px] 2xl:py-[2px] 2xl:flex
          font-semibold items-center rounded-lg border border-[#E14E52]'>
          <img src={dashboard} alt="Icon"
          className='
          sm:w-[17px] sm:h-[17px] sm:mr-[4px]
          md:w-[21px] md:h-[21px] md:mr-[4px]
          lg:w-[21px] lg:h-[21px] lg:mr-[4px]
          xl:w-[21px] xl:h-[21px] xl:mr-[4px]
         2xl:w-[21px] 2xl:h-[21px] 2xl:mr-[4px]'/>Dashboard
        </button>
        <button onClick={() => handleImageChange(3)}
          className='
          sm:text-[14px] sm:px-[5px] sm:py-[2px] sm:flex
          md:text-[20px] md:px-[10px] md:py-[2px] md:flex
          lg:text-[20px] lg:px-[10px] lg:py-[2px] lg:flex
          xl:text-[20px] xl:px-[10px] xl:py-[2px] xl:flex
         2xl:text-[20px] 2xl:px-[10px] 2xl:py-[2px] 2xl:flex
          font-semibold items-center rounded-lg border border-[#E14E52]'>
          <img src={customization} alt="Icon"
          className='
           sm:w-[17px] sm:h-[17px] sm:mr-[6px]
           md:w-[19px] md:h-[19px] md:mr-[6px]
           lg:w-[19px] lg:h-[19px] lg:mr-[6px]
           xl:w-[19px] xl:h-[19px] xl:mr-[6px]
          2xl:w-[19px] 2xl:h-[19px] 2xl:mr-[6px]'/>Customization
        </button>
      </div>
    </section>
  )
}

export default Main
