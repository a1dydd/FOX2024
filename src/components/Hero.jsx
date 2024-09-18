import React from 'react';
import eew from '../assets/EEW.svg';
import ncia from '../assets/NCIA.svg'; 
import tnbes from '../assets/TNB ES.svg'; 
import afes from '../assets/AFES.svg';  
import BOX from '../assets/BOX.jpg';

const Hero = () => {
  return (
    <section className='
      sm:mt-[80px] sm:w-full
      md:mt-[120px] md:w-full
      lg:mt-[90px] lg:w-full lg:flex lg:justify-center
      xl:mt-[90px] xl:w-full xl:flex xl:justify-center
      2xl:mt-[90px] 2xl:w-full 2xl:flex 2xl:justify-center'>
      
      <div className='
        sm:flex-col sm:mx-[30px]
        md:flex-col md:mx-[30px] md:text-center
        lg:mx-[60px] lg:text-left 
        xl:mx-[60px] xl:text-left
        2xl:mx-[60px] 2xl:text-left'>
        
        <h1 className='
          sm:text-[60px] sm:leading-[60px] sm:mx-auto
          md:text-[90px] md:leading-[80px] md:mx-auto
          lg:text-[90px] lg:leading-[80px] lg:mx-auto
          xl:text-[90px] xl:leading-[80px] xl:mx-auto
          2xl:text-[80px] 2xl:leading-[80px] 2xl:mx-auto
          tracking-[-4px] font-bold'>
          Plan. Simplify. <br /><h1 className='sm:mt-[2px]'>Deliver.</h1>
        </h1>
        <p className='
          sm:text-[20px] sm:mt-[10px] sm:leading-[25px] sm:mx-auto
          md:text-[25px] md:mt-[20px] md:leading-[30px] md:mx-auto
          lg:text-[25px] lg:mt-[20px] lg:leading-[30px] lg:mx-auto
          xl:text-[25px] xl:mt-[20px] xl:leading-[30px] xl:mx-auto
          2xl:text-[25px] 2xl:mt-[20px] 2xl:leading-[30px] 2xl:mx-auto
          font-semibold'>
          Designed for facilities and asset management professionals: Simplify operations, optimize assets, and deliver results with FOX.
        </p>
        <button className='
          sm:text-[17px] sm:w-full sm:h-[45px] sm:mt-[20px]
          md:text-[17px] md:w-[150px] md:mt-[25px]
          lg:text-[17px] lg:w-[150px] lg:mt-[25px]
          xl:text-[17px] xl:w-[150px] xl:mt-[25px]
          2xl:text-[17px] 2xl:w-[150px] 2xl:mt-[25px]
          font-semibold rounded-lg text-white bg-[#FF5A5F] hover:bg-[#E14E52] hover:text-white'>
          Get FOX Now
        </button>
        <p className='
          sm:text-[18px] sm:mt-[16px] 
          md:text-[15px] md:mt-[26px] 
          lg:text-[15px] lg:mt-[26px] lg:mx-auto
          xl:text-[15px] xl:mt-[26px] xl:mx-auto
          2xl:text-[15px] 2xl:mt-[26px] 2xl:mx-auto
          text-gray-400 font-semibold'>
          Trusted by
        </p>
        {/* Uncomment and adjust as needed */}
        <ul className='
          sm:flex sm:flex-wrap 
          md:flex md:flex-wrap md:justify-center
          lg:flex lg:flex-wrap lg:justify-start
          xl:flex xl:flex-wrap xl:justify-start
          2xl:flex 2xl:flex-wrap 2xl:justify-start'>
          <li><img src={eew} alt="" className='
            sm:w-[50px] sm:mx-[30px] sm:my-[15px]
            md:w-[50px] md:mx-[30px] md:my-[15px]
            lg:w-[40px] lg:mx-[8px]
            xl:w-[50px] xl:mx-[20px]
            2xl:w-[50px] 2xl:mx-[15px]'/>
          </li>
          <li><img src={ncia} alt="" className='
            sm:w-[120px] sm:mx-[30px] sm:my-[15px]
            md:w-[120px] md:mx-[30px] md:my-[15px]
            lg:w-[90px] lg:mx-[10px]
            xl:w-[100px] xl:mx-[20px]
            2xl:w-[100px] 2xl:mx-[15px]'/>
          </li>
          <li><img src={tnbes} alt="" className='
            sm:w-[40px] sm:mx-[35px] sm:my-[15px]
            md:w-[40px] md:mx-[35px] md:my-[15px]
            lg:w-[35px] lg:mx-[10px]
            xl:w-[37px] xl:mx-[20px]
            2xl:w-[37px] 2xl:mx-[15px]'/>
          </li>
          <li><img src={afes} alt="" className='
            sm:w-[110px] sm:mx-[30px] sm:my-[15px]
            md:w-[110px] md:mx-[30px] md:my-[15px]
            lg:w-[90px] lg:mx-[10px]
            xl:w-[100px] xl:mx-[20px]
            2xl:w-[100px] 2xl:mx-[15px]'/>
          </li>
        </ul> 
      </div>

      {/* Right Section (Image) */}
      <div className='
        sm:px-[30px] sm:w-full 
        md:px-[30px] md:w-full
        lg:w-full lg:mx-auto
        xl:w-full xl:mx-auto
        2xl:w-full 2xl:mx-auto'>
        <img src={BOX} alt="Hero" className='
          sm:mx-auto sm:w-full sm:max-w-[100%] sm:min-w-[200px] sm:max-h-[400px] sm:min-h-[200px]
          md:mx-auto md:w-full md:max-w-[80%] md:min-w-[250px] md:max-h-[500px] md:min-h-[250px]
          lg:mx-auto lg:w-full lg:max-w-[70%] lg:min-w-[500px] lg:max-h-[600px] lg:min-h-[300px]
          xl:mx-auto xl:w-full xl:max-w-[60%] xl:min-w-[550px] xl:max-h-[700px] xl:min-h-[350px]
          2xl:mx-auto 2xl:w-full 2xl:max-w-[50%] 2xl:min-w-[600px] 2xl:max-h-[800px] 2xl:min-h-[400px]'/>
      </div>
    </section>
  );
}

export default Hero;
