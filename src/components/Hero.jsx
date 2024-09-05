import React from 'react';
import BOX from '../assets/BOX.jpg';
//This page support until 2xl, over than 2xl is not reliable at the moment
const Hero = () => {
  return (
    <div className='xl:px-[90px] xl:pt-[90px] xl:pb-[90px] xl:flex'>
      <div>
        <ul>
          <li>
            <h2 className='xl:text-5xl xl:pb-[20px]
                           font-bold'>
              Plan. Simplify. Deliver.
            </h2>
          </li>
          <li>
            <p className='xl:text-2xl xl:leading-[28px] xl:pb-[40px] xl:pl-[10px]
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
        <div className='xl:pl-[5px]'>
          <a href="">
              <button className='xl:text-md xl:w-[160px] xl:h-[45px]
                                 font-semibold rounded-lg text-white bg-black hover:bg-gray-200 hover:text-black'>
                Get FOX Now
              </button>
            </a>
        </div>
      </div>
      <div>
        <img className='xl:w-[705px] xl:h-[360px] xl:pl-[50px]'
        src={BOX} alt="" />
      </div>
    </div>
  );
}

export default Hero;