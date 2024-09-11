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
    <div className='xxs:flex xxs:flex-col xxs:items-center
                     xs:flex xs:flex-col xs:items-center
                     sm:flex sm:flex-col sm:items-center
                     md:flex md:flex-col md:items-center
                     lg:px-[60px] lg:flex lg:flex-col lg:items-center
                     xl:px-[70px] xl:flex xl:flex-col xl:items-center
                     '>
      <div className='xxs:px-[10px] xxs:flex xxs:flex-col xxs:text-left xxs:items-center
                       xs:px-[10px] xs:flex xs:flex-col xs:text-left xs:items-center
                       sm:px-[10px] sm:flex sm:flex-col sm:text-left sm:items-center
                       md:px-[10px] md:flex md:flex-col md:text-left md:items-center
                       lg:flex lg:flex-col lg:text-left lg:items-center
                       xl:flex xl:flex-col xl:text-left xl:items-center
                       '>
        <h1 className='xxs:text-[28px] xxs:text-center
                        xs:text-[43px] xs:text-center
                        sm:text-[59px] sm:text-center
                        md:text-[71px] md:text-center
                        lg:text-[35px] lg:pr-[650px] lg:text-left
                        xl:text-5xl xl:pr-[801px] xl:text-left
                        font-bold '>
          Main Features
        </h1>
        <p className='xxs:text-[13px] xxs:pb-5 xxs:text-center
                       xs:text-[20px] xs:pb-5 xs:text-center
                       sm:text-[27px] sm:pb-5 sm:text-center
                       md:text-[32px] md:pb-5 md:text-center
                       lg:text-lg lg:pb-5 lg:pr-[139px] lg:text-left
                       xl:text-2xl xl:pb-5 xl:pr-[132px] xl:text-left
                      '>
          Empowers maintenance, property, asset, and 
          facilities managers with comprehensive tools 
          for 
          <br />tracking, managing, and optimizing their 
          operations. Experience enhanced efficiency and 
          cost 
          <br />savings.
        </p>
      </div>
      <div className='xxs:w-[300px] xxs:h-[200px] xxs:relative
                       xs:w-[458px] xs:h-[306px] xs:relative
                       sm:w-[619px] sm:h-[413px] sm:relative
                       md:w-[737px] md:h-[492px] md:relative
                       lg:w-[885px] lg:h-[498px] lg:relative
                       xl:w-[1130px] xl:h-[636px] xl:relative
                      '>
        <img
          className={`absolute rounded-lg top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'}`}
          src={images[currentImageIndex]} alt="Current Feature" 
        />
      </div>
      <div className='xxs:pt-[15px] xxs:gap-1 xxs:flex xxs:justify-center
                       xs:pt-[20px] xs:gap-2 xs:flex xs:justify-center
                       sm:pt-[25px] sm:gap-3 sm:flex sm:justify-center
                       md:pt-[30px] md:gap-3 md:flex md:justify-center
                       lg:pt-[20px] lg:gap-2 lg:flex lg:justify-center
                       xl:pt-[20px] xl:gap-2 xl:flex xl:justify-center
                      '>
        <div>
          <button 
            className='xxs:text-[10px] xxs:px-[3px] xxs:py-[3px] xxs:flex xxs:justify-center
                       xs:text-[15px] xs:px-[6px] xs:py-[3px] xs:flex xs:justify-center
                       sm:text-[20px] sm:px-[9px] sm:py-[3px] sm:flex sm:justify-center
                       md:text-[25px] md:px-[12px] md:py-[3px] md:flex md:justify-center
                       lg:text-[20px] lg:px-[16px] lg:py-[3px] lg:flex lg:justify-center
                       xl:text-[20px] xl:px-[16px] xl:py-[3px] xl:flex xl:justify-center
                       font-semibold items-center rounded-lg border'
            onClick={() => handleImageChange(0)}>
            <img src={plannerIcon} alt="Planner Icon" 
            className='xxs:w-[15px] xxs:h-[15px] xxs:mr-[2px]
                        xs:w-[20px] xs:h-[20px] xs:mr-[2px]
                        sm:w-[25px] sm:h-[25px] sm:mr-[2px]
                        md:w-[25px] md:h-[25px] md:mr-[2px]
                        lg:w-[22px] lg:h-[22px] lg:mr-[2px]
                        xl:w-[22px] xl:h-[22px] xl:mr-[2px]
                       '/>
            Planner 
          </button>
        </div>
        <div>
          <button 
            className='xxs:text-[10px] xxs:px-[3px] xxs:py-[3px] xxs:flex xxs:justify-center
                       xs:text-[15px] xs:px-[6px] xs:py-[3px] xs:flex xs:justify-center
                       sm:text-[20px] sm:px-[9px] sm:py-[3px] sm:flex sm:justify-center
                       md:text-[25px] md:px-[12px] md:py-[3px] md:flex md:justify-center
                       lg:text-[20px] lg:px-[16px] lg:py-[3px] lg:flex lg:justify-center
                       xl:text-[20px] xl:px-[16px] xl:py-[3px] xl:flex xl:justify-center
                       font-semibold items-center rounded-lg border'
            onClick={() => handleImageChange(1)}>
            <img src={workflowIcon} alt="Workflow Icon" 
            className='xss:w-[15px] xxs:h-[15px] xxs:mr-[2px]
                        xs:w-[20px] xs:h-[20px] xs:mr-[2px]
                        sm:w-[25px] sm:h-[25px] sm:mr-[2px]
                        md:w-[25px] md:h-[25px] md:mr-[2px]
                        lg:w-[22px] lg:h-[22px] lg:mr-[2px]
                        xl:w-[22px] xl:h-[22px] xl:mr-[2px]
                       '/>
            Work Flow
          </button>
        </div>
        <div>
          <button 
            className='xxs:text-[10px] xxs:px-[3px] xxs:py-[3px] xxs:flex xxs:justify-center
                       xs:text-[15px] xs:px-[6px] xs:py-[3px] xs:flex xs:justify-center
                       sm:text-[20px] sm:px-[9px] sm:py-[3px] sm:flex sm:justify-center
                       md:text-[25px] md:px-[12px] md:py-[3px] md:flex md:justify-center
                       lg:text-[20px] lg:px-[16px] lg:py-[3px] lg:flex lg:justify-center
                       xl:text-[20px] xl:px-[16px] xl:py-[3px] xl:flex xl:justify-center
                       font-semibold items-center rounded-lg border'
            onClick={() => handleImageChange(2)}>
            <img src={dashboardIcon} alt="Dashboard Icon" 
            className='xss:w-[15px] xxs:h-[15px] xxs:mr-[2px]
                        xs:w-[20px] xs:h-[20px] xs:mr-[2px]
                        sm:w-[25px] sm:h-[25px] sm:mr-[2px]
                        md:w-[25px] md:h-[25px] md:mr-[2px]
                        lg:w-[22px] lg:h-[22px] lg:mr-[2px]
                        xl:w-[22px] xl:h-[22px] xl:mr-[2px]
                        '/>
            Dashboard
          </button>
        </div>
        <div>
          <button 
            className='xxs:text-[10px] xxs:px-[3px] xxs:py-[3px] xxs:flex xxs:justify-center
                       xs:text-[15px] xs:px-[6px] xs:py-[3px] xs:flex xs:justify-center
                       sm:text-[20px] sm:px-[9px] sm:py-[3px] sm:flex sm:justify-center
                       md:text-[25px] md:px-[12px] md:py-[3px] md:flex md:justify-center
                       lg:text-[20px] lg:px-[16px] lg:py-[3px] lg:flex lg:justify-center
                       xl:text-[20px] xl:px-[16px] xl:py-[3px] xl:flex xl:justify-center
                       font-semibold items-center rounded-lg border'
            onClick={() => handleImageChange(3)}>
            <img src={customisationIcon} alt="Customization Icon" 
            className='xss:w-[15px] xxs:h-[15px] xxs:mr-[2px]
                        xs:w-[20px] xs:h-[20px] xs:mr-[2px]
                        sm:w-[25px] sm:h-[25px] sm:mr-[2px]
                        md:w-[25px] md:h-[25px] md:mr-[2px]
                        lg:w-[22px] lg:h-[22px] lg:mr-[2px]
                        xl:w-[22px] xl:h-[22px] xl:mr-[2px]
                      '/>
            Customization
          </button>
        </div>
      </div> 
    </div>
  );
}

export default Main;
