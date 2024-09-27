import React from 'react';
import planner from '../assets/Icons/calander_icon.png';
import workflow from '../assets/Icons/workflow_icon.png';
import dashboard from '../assets/Icons/dashboard_icon.png';
import customization from '../assets/Icons/custom_icon.png';

const MainFeatures = () => {
  return (
    <section className='w-full flex flex-col px-[30px] sm:px-[10px]'>
      <div className='w-full flex flex-col'>
        <h1 className='
          sm:text-[50px] sm:text-left sm:mt-[100px] sm:leading-[55px] sm:px-[10px]
          md:text-[80px] md:text-left md:mt-[100px] md:leading-[85px]
          lg:text-[80px] lg:text-left lg:mt-[100px]
          xl:text-[80px] xl:text-left xl:mt-[100px]
          2xl:text-[80px] 2xl:text-left 2xl:mt-[100px]
          tracking-[-4px] font-bold'>
          Everything for your need
        </h1>
        
        <div className='mt-[60px] ml-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 sm:gap-x-8 md:gap-y-10 lg:gap-x-10'>
          <div className='flex flex-col items-center sm:items-start'>
            <img src={planner} alt="Planner" className='
            sm:w-[50px]
            md:w-[70px] 
            w-[100px] h-auto' />
            <div className='mt-4 text-center sm:text-left'>
              <h2 className='
              sm:text-[22px]
              md:text-[30px]
              text-[35px] font-bold relative overflow-hidden group'>
                <span className='relative inline-block'>
                  <a href="/benefit1">Planner</a>
                  <span className='absolute left-0 bottom-0 w-full h-1 bg-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
                </span>
              </h2>
              <p className='
              sm:text-[15px] sm:leading-[20px]
              md:text-[20px] md:leading-[25px]
              text-[25px] leading-[30px] font-semibold max-w-[200px]'>
                Effortlessly organize and manage tasks for timely execution.
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center sm:items-start'>
            <img src={workflow} alt="Work Flow" className='
            sm:w-[50px]
            md:w-[70px]
            w-[100px] h-auto' />
            <div className='mt-4 text-center sm:text-left'>
              <h2 className='
              sm:text-[22px]
              md:text-[30px]
              text-[35px] font-bold relative overflow-hidden group'>
                <span className='relative inline-block'>
                  <a href="/benefit2">Work Flow</a>
                  <span className='absolute left-0 bottom-0 w-full h-1 bg-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
                </span>
              </h2>
              <p className='
              sm:text-[15px] sm:leading-[20px]
              md:text-[20px] md:leading-[25px]
              text-[25px] leading-[30px] font-semibold max-w-[200px]'>
                Streamline processes and enhance efficiency.
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center sm:items-start'>
            <img src={dashboard} alt="Dashboard" className='
            sm:w-[50px]
            md:w-[70px]
            w-[100px] h-auto' />
            <div className='mt-4 text-center sm:text-left'>
              <h2 className='
              sm:text-[22px]
              md:text-[30px]
              text-[35px] font-bold relative overflow-hidden group'>
                <span className='relative inline-block'>
                  <a href="/benefit3">Dashboard</a>
                  <span className='absolute left-0 bottom-0 w-full h-1 bg-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
                </span>
              </h2>
              <p className='
              sm:text-[15px] sm:leading-[20px]
              md:text-[20px] md:leading-[25px]
              text-[25px] leading-[30px] font-semibold max-w-[200px]'>
                Visualize your achievements with intuitive charts.
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center sm:items-start'>
            <img src={customization} alt="Customization" className='
            sm:w-[50px]
            md:w-[70px]
            w-[100px] h-auto' />  
            <div className='mt-4 text-center sm:text-left'>
              <h2 className='
              sm:text-[22px]
              md:text-[30px]
              text-[35px] font-bold relative overflow-hidden group'>
                <span className='relative inline-block'>
                  <a href="/benefit4">Customization</a>
                  <span className='absolute left-0 bottom-0 w-full h-1 bg-highlight transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out' />
                </span>
              </h2>
              <p className='
              sm:text-[15px] sm:leading-[20px]
              md:text-[20px] md:leading-[25px]
              text-[25px] leading-[30px] font-semibold max-w-[245px]'>
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
