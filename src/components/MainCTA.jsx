import React from 'react';

const MainCTA = () => {
  return (
    <div className='xxs:px-[10px] xxs:pb[] xxs:pt-[20px]
                     xs:px-[10px] xs:pb[] xs:pt-[20px]
                     sm:px-[10px] sm:pb[] sm:pt-[20px]
                     md:px-[10px] md:pb[] md:pt-[20px]
                     lg:px-[70px] lg:pb[] lg:pt-[20px]
                     xl:px-[170px] xl:pb-[120px] xl:pt-[130px]'>
      <h1 className=' xxs:text-[28px] xxs:mb-1 xxs:text-center
                      xs:text-[38px] xs:mb-1 xs:text-center
                      sm:text-[52px] sm:mb-1 sm:text-center
                      md:text-[62px] md:mb-1 md:text-center
                      lg:text-[74px] lg:mb-8 lg:text-center
                      xl:text-[95px] xl:mb-8 xl:text-center
                       font-bold'>
        Get Started with FOX
      </h1>
      <div className='xxs:text-center 
                      xs:text-center
                      sm:text-center
                      md:text-center
                      lg:mx-[650px] lg:py-[15px]
                      xl:mx-[800px] xl:py-[15px]'>
        <button className=' xxs:w-[300px] xxs:h-[40px] xxs:text-[13px] xxs:items-center
                            xs:w-[458px] xs:h-[60px] xs:text-xl xs:items-center
                            sm:w-[619px] sm:h-[70px] sm:text-2xl sm:items-center
                            md:w-[737px] md:h-[80px] md:text-3xl md:items-center
                            lg:h-[45px] lg:w-[150px] lg:text-lg
                            xl:h-[45px] xl:w-[150px] xl:text-lg
                            font-bold  text-white bg-black hover:bg-gray-200 hover:text-black rounded-lg  '>
            Get Fox Now</button>
      </div>
    </div>
  );
};

export default MainCTA;
