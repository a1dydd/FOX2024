import React from 'react'

const MainCTA = () => {
  return (
    <section className='
      sm:w-full sm:px-[30px] sm:mt-[100px] sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-center
      md:w-full md:px-[30px] md:mt-[100px] md:flex md:justify-center md:items-center md:text-center
      lg:w-full lg:px-[30px] lg:mt-[100px] lg:flex lg:flex-col lg:justify-center lg:items-center lg:text-center
      xl:w-full xl:px-[30px] xl:mt-[100px] xl:flex xl:flex-col xl:justify-center xl:items-center xl:text-center
      2xl:w-full 2xl:px-[30px] 2xl:mt-[100px] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:text-center'>
      <h1 className='
       sm:text-[50px] sm:leading-[50px]
       md:text-[80px] md:leading-[80px]
       lg:text-[80px] 
       xl:text-[80px] 
      2xl:text-[80px] 
      w-full font-bold tracking-[-4px]'>
      Get Started with FOX
      </h1>
        <a href="/register" className='
        sm:w-full sm:justify-center sm:flex
        md:w-full md:justify-center md:flex
        lg:w-full lg:justify-end lg:flex
        xl:w-full xl:justify-end xl:flex
        2xl:w-full 2xl:justify-end 2xl:flex w-full'>
        <button className='
        sm:text-[17px] sm:h-[40px] sm:w-full sm:mt-[15px] 
        md:text-[17px] md:h-[40px] md:w-[150px] md:mt-[25px]
        lg:text-[17px] lg:h-[40px] lg:w-[150px] lg:mt-[25px] lg:mr-[80px]
        xl:text-[17px] xl:w-[150px] xl:h-[40px] xl:mt-[25px] xl:mr-[130px]
        2xl:text-[17px] 2xl:w-[150px] 2xl:h-[40px] 2xl:mt-[25px] 2xl:mr-[330px]
        font-semibold rounded-lg text-white bg-[#FF5A5F] hover:bg-[#E14E52] hover:text-white'>
        Get FOX Now
        </button>
        </a>
    </section>
  )
}

export default MainCTA;
