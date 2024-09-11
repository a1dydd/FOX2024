import React from 'react';
import BOX from '../assets/BOX.jpg';

// This page supports up to 2xl, over than 2xl is not reliable at the moment
const Hero = () => {
  return (
    <div className='xxs:px-[10px] xxs:pt-[90px] xxs:pb-[10px] xxs:flex xxs:flex-col xxs:items-center
                    xs:px-[10px] xs:pt-[90px] xs:pb-[90px] xs:flex xs:flex-col xs:items-center
                    sm:px-[10px] sm:pt-[90px] sm:pb-[90px] sm:flex sm:flex-col sm:items-center
                    md:px-[10px] md:pt-[90px] md:pb-[90px] md:flex md:flex-col md:items-center
                    lg:px-[70px] lg:pt-[90px] lg:pb-[90px] lg:flex-row lg:justify-center
                    xl:px-[70px] xl:pt-[90px] xl:pb-[90px] xl:flex-row xl:justify-center'>
      <div>
        <ul>
          <li>
            <h2 className='xxs:text-[28px] xxs:pb-[10px]
                           xs:text-[43px] xs:pb-[20px]
                           sm:text-[59px] sm:pb-[20px]
                           md:text-[71px] md:pb-[20px]
                           lg:text-[35px] lg:pb-[10px] lg:text-left
                           xl:text-5xl xl:pb-[20px] xl:text-left
                           font-bold'>
              Plan. Simplify. Deliver.
            </h2>
          </li>
          <li>
            <p className='xxs:text-[14px] xxs:leading-[15px] xxs:pb-[20px] xxs:text-center
                          xs:text-[22px] xs:leading-[25px] xs:pb-[30px] xs:text-center
                          sm:text-3xl sm:leading-[35px] sm:pb-[40px] sm:text-center
                          md:text-4xl md:leading-[45px] md:pb-[40px] md:text-center
                          lg:text-lg lg:leading-[20px] lg:pb-[40px] lg:text-left
                          xl:text-2xl xl:leading-[30px] xl:pb-[40px] xl:text-left
                          '>
              FOX is designed for facilities and property
              <br />management professionals, offering robust
              <br />tools to organize, simplify, and deliver results.
              <br />Optimize asset performance, streamline
              <br />maintenance, and ensure seamless operations
              <br />with all-in-one solution.
            </p>
          </li>
        </ul>
        <div className='xxs:pb-[20px] 
                        xs:pb-[40px] 
                        sm:pb-[40px]
                        md:pb-[45px] 
                        lg:pl-[5px] lg:text-left
                        xl:pl-[5px] xl:text-left'>
          <a href="">
            <button className='xxs:text-[13px] xxs:w-[300px] xxs:h-[40px]
                               xs:text-xl xs:w-[458px] xs:h-[60px]
                               sm:text-2xl sm:w-[619px] sm:h-[70px]
                               md:text-3xl md:w-[737px] md:h-[80px]
                               lg:text-lg lg:w-[150px] lg:h-[45px]
                               xl:text-lg xl:w-[150px] xl:h-[45px]
                               font-semibold rounded-lg text-white bg-black hover:bg-gray-200 hover:text-black'>
              Get FOX Now
            </button>
          </a>
        </div>
      </div>
      <div className='xxs:flex xxs:justify-center xxs:pb-[40px]
                      xs:flex xs:justify-center xs:pb-[40px]
                      sm:flex sm:justify-center sm:pb-[40px]
                      md:flex md:justify-center md:pb-[40px]
                      lg:pl-[50px] 
                      xl:pl-[50px]
                      '>
        <img className='xxs:w-[300px] xxs:h-[200px]
                        xs:w-[458px] xs:h-[306px]
                        sm:w-[619px] sm:h-[413px]
                        md:w-[737px] md:h-[492px]
                        lg:w-[467px] lg:h-[300px]
                        xl:w-[587px] xl:h-[360px]' 
             src={BOX} alt="" />
      </div>
    </div>
  );
}

export default Hero;
