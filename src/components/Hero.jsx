import React from 'react';
import eew from '../assets/EEW.svg';
import ncia from '../assets/NCIA.svg'; 
import tnbes from '../assets/TNB ES.svg'; 
import afes from '../assets/AFES.svg';  
import BOX from '../assets/BOX.jpg';

const Hero = () => {
  return (
    <section className='
      xxs:mt-[118px]
      xs:mt-[118px]
      sm:mt-[118px]
      md:mt-[118px] 
      lg:w-[875px] lg:mt-[100px] lg:mx-auto lg:flex 
      xl:w-[1110px] xl:mt-[100px] xl:mx-auto xl:flex
      2xl:w-[1300px] 2xl:px-[19px] 2xl:mt-[100px] 2xl:mx-auto 2xl:flex-row 2xl:justify-start'>
      
      <div className='
        xxs:w-1/2 xxs:flex-col xxs:mx-auto xxs:text-center
        xs:w-1/2 xs:flex-col xs:mx-auto xs:text-center
        sm:w-1/2 sm:flex-col sm:mx-auto sm:text-center
        md:w-1/2 md:flex-col md:mx-auto md:text-center
        lg:w-1/2 lg:flex lg:flex-col lg:justify-start
        xl:w-1/2 xl:flex xl:flex-col xl:justify-start
        2xl:w-1/2 2xl:flex 2xl:flex-col 2xl:justify-start'>
        
        <h1 className='
        xxs:text-[50px] xxs:leading-[50px]
        xs:text-[70px] xs:leading-[70px]
        sm:text-[85px] sm:leading-[85px] 
        md:text-[75px] md:leading-[75px] 
        lg:text-[65px] lg:leading-[65px] lg:text-left
        xl:text-[78px] xl:leading-[78px] xl:text-left
        2xl:text-[90px] 2xl:leading-[90px] 2xl:text-left
        tracking-[-4px] font-bold'>
        Plan. Simplify. <br /><h1 className='xxs:mt-[10px]
                                              xs:mt-[15px]
                                              sm:mt-[15px]
                                              md:mt-[15px]'>Deliver.</h1>
        </h1>

        <p className='
          xxs:text-[15px] xxs:mt-[10px] xxs:leading-[15px] xxs:text-center 
          xs:text-[21px] xs:mt-[10px] xs:leading-[23px] xs:text-center 
          sm:text-[21px] sm:mt-[10px] sm:leading-[23px] sm:text-center 
          md:text-[21px] md:mt-[10px] md:leading-[23px] md:text-center 
          lg:text-[18px] lg:mt-[10px] lg:mr-[50px] lg:ml-[5px] lg:leading-[23px] lg:text-left
          xl:text-[23px] xl:mt-[10px] xl:mr-[80px] xl:ml-[5px] xl:leading-[30px] xl:text-left
          2xl:text-[25px] 2xl:mt-[16px] 2xl:mr-[80px] 2xl:ml-[5px] 2xl:leading-[30px] 2xl:text-left
          font-semibold'>
          Designed for facilities and asset management professionals: Simplify operations, optimize assets, and deliver results with FOX.
        </p>
        
        <button className='
          xxs:text-lg xxs:w-[150px] xxs:h-[45px] xxs:mt-[20px]
          xs:text-lg xs:w-[150px] xs:h-[45px] xs:mt-[20px]
          sm:text-lg sm:w-[150px] sm:h-[45px] sm:mt-[20px]
          md:text-lg md:w-[150px] md:h-[45px] md:mt-[20px]
          lg:text-lg lg:w-[150px] lg:h-[45px] lg:mt-[16px] lg:ml-[5px] 
          xl:text-lg xl:w-[150px] xl:h-[45px] xl:mt-[16px] xl:ml-[5px] 
          2xl:text-lg 2xl:w-[150px] 2xl:h-[45px] 2xl:mt-[26px] 2xl:ml-[5px] 
          font-semibold rounded-lg text-white bg-[#FF5A5F] hover:bg-[#E14E52] hover:text-white'>
          Get FOX Now
        </button>
        
        <p className='
          xxs:text-[18px] xxs:mt-[16px] xxs:leading-[30px]
          xs:text-[18px] xs:mt-[16px] xs:leading-[30px]
          sm:text-[18px] sm:mt-[16px] sm:leading-[30px]
          md:text-[18px] md:mt-[16px] md:leading-[30px]
          lg:text-[18px] lg:mt-[16px] lg:mr-[80px] lg:ml-[5px] lg:leading-[30px] lg:text-left
          xl:text-[18px] xl:mt-[16px] xl:mr-[80px] xl:ml-[5px] xl:leading-[30px] xl:text-left
          2xl:text-[18px] 2xl:mt-[16px] 2xl:mr-[80px] 2xl:ml-[5px] 2xl:leading-[30px] 2xl:text-left
          text-gray-500 font-semibold'>
          Trusted by
        </p>
        
        {/* Uncomment and adjust as needed */}
        {/* <ul className='
          xxs:
          xs:
          sm:
          md:
          lg:gap-3 lg:flex
          xl:gap-3 xl:flex
          2xl:gap-4 2xl:flex '>
          <li><img src={eew} alt="" className='
            xxs:
            xs:
            sm:
            md:
            lg:w-[50px] lg:h-[50px]
            xl:w-[50px] xl:h-[50px]
            2xl:w-[40px] 2xl:h-[40px]'/></li>
          <li><img src={ncia} alt="" className='
            xxs:
            xs:
            sm:
            md:
            lg:w-[70px] lg:h-[50px]
            xl:w-[70px] xl:h-[50px]
            2xl:w-[70px] 2xl:h-[50px]'/></li>
          <li><img src={tnbes} alt="" className='
            xxs:
            xs:
            sm:
            md:
            lg:w-[50px] lg:h-[50px]
            xl:w-[50px] xl:h-[50px]
            2xl:w-[50px] 2xl:h-[50px]'/></li>
          <li><img src={afes} alt="" className='
            xxs:
            xs:
            sm:
            md:
            lg:w-[80px] lg:h-[40px]
            xl:w-[80px] xl:h-[40px]
            2xl:w-[80px] 2xl:h-[40px]'/></li>
        </ul> */}
      </div>

      {/* Right Section (Image) */}
      <div className='
        xxs:w-full 
        xs:w-full
        sm:w-full
        md:w-full
        lg:w-1/2 lg:justify-end
        xl:w-1/2 xl:justify-end
        2xl:w-1/2 2xl:justify-end'>
    <img src={BOX} alt="Hero" className='
          xxs:w-full xxs:h-[200px] xxs:object-cover 
          xs:w-[375px] xs:h-[200px] xs:object-cover xs:mx-auto
          sm:w-[375px] sm:h-[200px] sm:object-cover sm:mx-auto
          md:w-[375px] md:h-[200px] md:object-cover md:mx-auto
          lg:w-[435px] lg:h-[300px] lg:object-cover
          xl:w-[555px] xl:h-[370px] xl:object-cover
          2xl:w-[630px] 2xl:h-[420px] 2xl:object-cover' />
</div>

    </section>
  );
}

export default Hero;
