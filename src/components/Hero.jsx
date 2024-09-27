import React from 'react';
import eew from '../assets/Logos/EEW.svg';
import ncia from '../assets/Logos/NCIA.svg'; 
import tnbes from '../assets/Logos/TNB ES.svg'; 
import afes from '../assets/Logos/AFES.svg';  
import BOX from '../assets/Screenshots/19.png';

const Hero = () => {
  return (
    <section className='
      sm:flex-col sm:mt-[80px] sm:w-full sm:px-[20px]
      md:flex-col md:mt-[120px] md:w-full md:px-[30px]
      lg:flex lg:flex-row lg:justify-between lg:mt-[100px] lg:px-[30px]
      xl:flex xl:flex-row xl:justify-between xl:mt-[100px] xl:px-[30px]
      2xl:flex 2xl:flex-row 2xl:justify-between 2xl:mt-[100px] 2xl:px-[30px]'>
      
      {/* Left Section - Text */}
      <div className='
        sm:flex-col sm:text-center sm:mx-auto
        md:flex-col md:text-center md:mx-auto
        lg:text-left lg:w-1/2
        xl:text-left xl:w-1/2
        2xl:text-left 2xl:w-1/2'>
        
        <h1 className='
          sm:text-[60px] sm:leading-[60px] sm:mx-auto sm:text-left
          md:text-[80px] md:leading-[80px] md:mx-auto md:text-center
          lg:text-[80px] lg:leading-[80px ] lg:mx-0 lg:text-left
          xl:text-[80px] xl:leading-[80px] xl:mx-0
          2xl:text-[80px] 2xl:leading-[80px] 2xl:mx-0
          font-bold tracking-[-4px]'>
          Plan. Simplify. <br /><span>Deliver.</span>
        </h1>
        <p className='
          sm:text-[20px] sm:leading-[25px] sm:mt-[10px] sm:mx-auto sm:text-left
          md:text-[25px] md:leading-[30px] md:mt-[15px] md:mx-auto md:text-center
          lg:text-[25px] lg:leading-[30px] lg:mt-[20px] lg:mx-0 lg:text-left
          xl:text-[25px] xl:leading-[30px] xl:mt-[20px] xl:mx-0
          2xl:text-[25px] 2xl:leading-[30px] 2xl:mt-[20px] 2xl:mx-0
          font-semibold max-w-[632px]'>
          FOX is designed for facilities and property management professionals.
        </p>
        <button className='
          sm:text-[17px] sm:w-full sm:h-[45px] sm:mt-[20px]
          md:text-[17px] md:w-[150px] md:mt-[25px]
          lg:text-[17px] lg:w-[150px] lg:mt-[25px]
          xl:text-[17px] xl:w-[150px] xl:mt-[25px]
          2xl:text-[17px] 2xl:w-[150px] 2xl:mt-[25px]
          font-semibold rounded-lg text-white bg-[#FF5A5F] hover:bg-[#E14E52]'>
          Get FOX Now
        </button>

        <p className='
          sm:text-[16px] sm:mt-[16px] sm:text-left
          md:text-[16px] md:mt-[26px] md:text-center
          lg:text-[16px] lg:mt-[26px] lg:text-left
          xl:text-[16px] xl:mt-[26px] xl:text-left
          2xl:text-[16px] 2xl:mt-[26px] 2xl:text-left
          text-gray-400 font-semibold'>
          Trusted by
        </p>
        <ul className='
          sm:flex sm:flex-wrap sm:justify-center
          md:flex md:flex-wrap md:justify-center
          lg:flex lg:flex-wrap lg:justify-start
          xl:flex xl:flex-wrap xl:justify-start
          2xl:flex 2xl:flex-wrap 2xl:justify-start
          mt-[20px]'>
          <li><img src={eew} alt="EEW" className='
            sm:w-[40px] sm:mx-[10px]
            md:w-[50px] md:mx-[15px]
            lg:w-[40px] lg:mx-[8px]
            xl:w-[50px] xl:mx-[10px]
            2xl:w-[50px] 2xl:mx-[10px]'/></li>
          <li><img src={ncia} alt="NCIA" className='
            sm:w-[80px] sm:mx-[10px]
            md:w-[90px] md:mx-[15px]
            lg:w-[80px] lg:mx-[8px]
            xl:w-[100px] xl:mx-[10px]
            2xl:w-[100px] 2xl:mx-[10px]'/></li>
          <li><img src={tnbes} alt="TNB ES" className='
            sm:w-[30px] sm:mx-[10px]
            md:w-[40px] md:mx-[15px]
            lg:w-[30px] lg:mx-[8px]
            xl:w-[40px] xl:mx-[10px]
            2xl:w-[40px] 2xl:mx-[10px]'/></li>
          <li><img src={afes} alt="AFES" className='
            sm:w-[70px] sm:mx-[10px]
            md:w-[80px] md:mx-[15px]
            lg:w-[70px] lg:mx-[8px]
            xl:w-[80px] xl:mx-[10px]
            2xl:w-[80px] 2xl:mx-[10px]'/></li>
        </ul>
      </div>

      {/* Right Section - Image */}
      <div className='
        sm:w-full sm:mt-[30px]
        md:w-full md:mt-[30px]
        lg:w-[50%] lg:mt-0 lg:flex lg:justify-center
        xl:w-[50%] xl:mt-0 xl:flex xl:justify-center
        2xl:w-[50%] 2xl:mt-0 2xl:flex 2xl:justify-center'>
        <img src={BOX} alt="FOX Platform" className='
          
          w-full  
          rounded-lg object-cover'/></div>
    </section>
  );
}

export default Hero;
