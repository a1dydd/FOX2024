import React from 'react';
import planner from '../assets/calander_icon.png';

const MainFeatures = () => {
  return (
    <section className='w-full flex flex-col px-[30px] sm:px-[10px]'>
      <div className='w-full flex flex-col'>
        <h1 className='
          sm:text-[50px] sm:text-left sm:mt-[80px] sm:leading-[60px] sm:px-[20px]
          md:text-[80px] md:text-left md:mt-[80px] md:leading-[90px]
          lg:text-[80px] lg:text-left lg:mt-[80px]
          xl:text-[80px] xl:text-left xl:mt-[80px]
          2xl:text-[80px] 2xl:text-left 2xl:mt-[80px]
          tracking-[-4px] font-bold'>
          Everything for your need
        </h1>
        <div className='mt-8 grid grid-cols-2'>
          <div className='flex flex-col items-start mb-[30px]'>
            <img src={planner} alt="Planner" className='
            sm:w-[50px]
            md:w-[70px] 
            w-[100px] h-auto' />
            <div className='ml-4'>
              <h2 className='
              sm:text-[22px]
              md:text-[30px]
              text-[35px] font-bold relative overflow-hidden group'>
                <span className='relative inline-block'>
                  Planner
                  <span className='absolute left-0 bottom-0 w-full h-1 bg-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
                </span>
              </h2>
              <p className='
              sm:text-[15px] sm:leading-[20px]
              md:text-[20px] md:leading-[25px]
              text-[25px] leading-[30px] font-semibold max-w-[400px]'>
                Effortlessly organize and manage tasks for timely execution.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <img src={planner} alt="Work Flow" className='
            sm:w-[50px]
            md:w-[70px]
            w-[100px] h-auto' />
            <div className='ml-4'>
              <h2 className='
              sm:text-[22px]
              md:text-[30px]
              text-[35px] font-bold relative overflow-hidden group'>
                <span className='relative inline-block'>
                  Work Flow
                  <span className='absolute left-0 bottom-0 w-full h-1 bg-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
                </span>
              </h2>
              <p className='
              sm:text-[15px] sm:leading-[20px]
              md:text-[20px] md:leading-[25px]
              text-[25px] leading-[30px] font-semibold max-w-[400px]'>
                Streamline processes and enhance efficiency.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <img src={planner} alt="Dashboard" className='
            sm:w-[50px]
            md:w-[70px]
            w-[100px] h-auto' />
            <div className='ml-4'>
              <h2 className='
              sm:text-[22px]
              md:text-[30px]
              text-[35px] font-bold relative overflow-hidden group'>
                <span className='relative inline-block'>
                  Dashboard
                  <span className='absolute left-0 bottom-0 w-full h-1 bg-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
                </span>
              </h2>
              <p className='
              sm:text-[15px] sm:leading-[20px]
              md:text-[20px] md:leading-[25px]
              text-[25px] leading-[30px] font-semibold max-w-[400px]'>
                Visualize your achievements with intuitive charts.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <img src={planner} alt="Customization" className='
            sm:w-[50px]
            md:w-[70px]
            w-[100px] h-auto' />
            <div className='ml-4'>
              <h2 className='
              sm:text-[22px]
              md:text-[30px]
              text-[35px] font-bold relative overflow-hidden group'>
                <span className='relative inline-block'>
                  Customization
                  <span className='absolute left-0 bottom-0 w-full h-1 bg-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
                </span>
              </h2>
              <p className='
              sm:text-[15px] sm:leading-[20px]
              md:text-[20px] md:leading-[25px]
              text-[25px] leading-[30px] font-semibold max-w-[400px]'>
                Tailor your experience with flexible customization options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFeatures;
