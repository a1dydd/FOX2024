import React from 'react';
import ind from '../assets/Icons/in.png'; 
import fa from '../assets/Icons/fa.png'; 
import yo from '../assets/Icons/yo.png'; 
import wha from '../assets/Icons/wha.png'; 
const Footer = () => {
  return (
    <footer className='w-full 
    sm:mt-[100px] sm:px-[30px]
    md:mt-[100px] md:px-[30px]
    lg:mt-[100px] lg:px-[30px]
    xl:mt-[100px] xl:px-[30px]
    2xl:mt-[100px] 2xl:px-[30px]'>
      <div className='mx-auto '>
        <div className='grid 
        sm:grid-cols-2 sm:gap-8
        md:grid-cols-3 md:gap-8
        lg:grid-cols-3 lg:gap-8
        xl:grid-cols-3 xl:gap-8
        2xl:grid-cols-3 2xl:gap-8'>
          <div className='flex flex-col text-left 
          sm:gap-1
          md:gap-2
          lg:gap-2
          xl:gap-2
          2xl:gap-2'>
            <h1 className='
            sm:text-[20px]
            md:text-[35px]
            lg:text-[35px] 
            xl:text-[35px] 
            2xl:text-[35px] 
            font-bold'>Company</h1>
            <a href="/aboutus" className='
            sm:text-[15px] sm:mt-2
            md:text-[20px] md:mt-2
            lg:text-[20px] lg:mt-2
            xl:text-[20px] xl:mt-2
            2xl:text-[20px] 2xl:mt-2  
            font-semibold'>About Us</a>
            <a href="https://infinitywave.io/" className='
            sm:text-[15px] sm:mt-2
            md:text-[20px] md:mt-2
            lg:text-[20px] lg:mt-2
            xl:text-[20px] xl:mt-2
            2xl:text-[20px] 2xl:mt-2 
            font-semibold'>Infinity Wave</a>
            <a href="https://infinitywave.io/Career" className='
            sm:text-[15px] sm:mt-2
            md:text-[20px] md:mt-2
            lg:text-[20px] lg:mt-2
            xl:text-[20px] xl:mt-2
            2xl:text-[20px] 2xl:mt-2  
            font-semibold'>Careers</a>
            <a href="/termprivacy" className='
            sm:text-[15px] sm:mt-2
            md:text-[20px] md:mt-2
            lg:text-[20px] lg:mt-2
            xl:text-[20px] xl:mt-2
            2xl:text-[20px] 2xl:mt-2 
            font-semibold'>Term & Privacy</a>
          </div>
          <div className='flex flex-col text-left 
          sm:gap-1
          md:gap-2
          lg:gap-2
          xl:gap-2
          2xl:gap-2'>
            <h1 className='
            sm:text-[20px]
            md:text-[35px]
            lg:text-[35px] 
            xl:text-[35px] 
            2xl:text-[35px] 
            font-bold'>Download</h1>
            <a href="https://apps.apple.com/my/app/fox-smart-facility-management/id6475958098" className='
            sm:text-[15px] sm:mt-2
            md:text-[20px] md:mt-2
            lg:text-[20px] lg:mt-2
            xl:text-[20px] xl:mt-2
            2xl:text-[20px] 2xl:mt-2  
            font-semibold'>iOS</a>
            <a href="https://play.google.com/store/apps/details?id=io.foxmy.app&hl=en-MY" className='
            sm:text-[15px] sm:mt-2
            md:text-[20px] md:mt-2
            lg:text-[20px] lg:mt-2
            xl:text-[20px] xl:mt-2
            2xl:text-[20px] 2xl:mt-2  
            font-semibold'>Android</a>
         {/*<a href="#" className='
            sm:text-[15px] sm:mt-2
            md:text-[20px] md:mt-2
            lg:text-[20px] lg:mt-2
            xl:text-[20px] xl:mt-2
            2xl:text-[20px] 2xl:mt-2  
            font-semibold'>Cookie Settings</a>*/}
          </div>
          <div className='flex flex-col text-left 
          sm:gap-1
          md:gap-1
          lg:gap-1
          xl:gap-1
          2xl:gap-1'>
            <h1 className='
            sm:text-[20px]
            md:text-[35px]
            lg:text-[35px] 
            xl:text-[35px] 
            2xl:text-[35px] 
            font-bold'>Social</h1>
            <div className='flex mt-2'>
              <a href="https://www.linkedin.com/company/fox-infinitywave"> <img src={ind} alt="Linkind" className='
               sm:w-[30px] sm:mr-5
               md:w-[30px] md:mr-5
               lg:w-[30px] lg:mr-5
               xl:w-[30px] xl:mr-5 
               2xl:w-[30px] 2xl:mr-5' /></a>
               <a href="https://www.facebook.com/myinfinitywave"><img src={fa} alt="Facebook" className='
               sm:w-[30px] sm:mr-5
               md:w-[30px] md:mr-5
               lg:w-[30px] lg:mr-5
               xl:w-[30px] xl:mr-5 
               2xl:w-[30px] 2xl:mr-5' /></a>
               <a href="*"><img src={wha} alt="WhatsApp" className='
               sm:w-[30px] sm:mr-5
               md:w-[30px] md:mr-5
               lg:w-[30px] lg:mr-5
               xl:w-[30px] xl:mr-5 
               2xl:w-[30px] 2xl:mr-5' /></a>
              <a href="https://www.youtube.com/@foxsmartfacility"> <img src={yo} alt="YouTube" className='
               sm:w-[30px]
               md:w-[30px]
               lg:w-[30px]
               xl:w-[30px]
               2xl:w-[30px]' /></a>
            </div>
            <a href="/blog" className='
            sm:text-[15px] sm:mt-2
            md:text-[20px] md:mt-2
            lg:text-[20px] lg:mt-2
            xl:text-[20px] xl:mt-2
            2xl:text-[20px] 2xl:mt-2 
            font-semibold'>Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
