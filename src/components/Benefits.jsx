import React, { useRef, useState, useEffect } from 'react';
import BOX1 from '../assets/BOX.jpg';
import BOX2 from '../assets/BOX.jpg';
import BOX3 from '../assets/BOX.jpg';

const images = [BOX1, BOX2, BOX3];

const Benefits = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const sections = Array.from(carousel.children);
    const targetSection = sections[index];
    if (targetSection) {
      const offset = targetSection.offsetLeft;
      carousel.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const sections = Array.from(carousel.children);
    const scrollPosition = carousel.scrollLeft + carousel.offsetWidth / 2;
    const newIndex = sections.findIndex((section) =>
      scrollPosition >= section.offsetLeft &&
      scrollPosition < section.offsetLeft + section.offsetWidth
    );

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => {
        carousel.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <section className='
    sm:mt-[80px] sm:px-[30px]
    md:mt-[80px] md:px-[10px]
    lg:mt-[80px] lg:px-[10px]
    xl:mt-[80px] xl:px-[10px] 
    2xl:mt-[80px] 2xl:px-[10px] 
    w-full flex flex-col items-center '>
      <div
        ref={carouselRef}
        className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full gap-10'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {[...Array(3).keys()].map((index) => (
          <div
            key={index}
            className='
            sm:gap-[20px] sm:flex-col
            md:gap-[20px] md:px-[20px] md:flex-row
            lg:gap-[20px] lg:px-[20px] lg:flex-row
            xl:gap-[20px] xl:px-[20px] xl:flex-row
            2xl:gap-[20px] 2xl:px-[20px] 2xl:flex-row
            flex-shrink-0 w-full flex items-center snap-start'
          >
            <img src={images[index]} alt={`Benefit ${index + 1}`} 
            className='
            sm:min-h-[300px] sm:w-full sm:h-full 
            md:w-[583px] md:h-[290px]
            lg:w-[781px] lg:h-[389px]
            xl:w-[874px] xl:h-[437px]
            2xl:w-[1000px] 2xl:h-[500px] 
            rounded-lg' />
            <div className='
            sm:text-center
            md:text-right
            lg:text-right
            xl:text-right
            2xl:text-right
            flex flex-col items-end '>
              <h1 className='
              sm:text-[40px] sm:leading-[40px] 
              md:text-[40px] md:leading-[40px] 
              lg:text-[60px] lg:leading-[60px] 
              xl:text-[70px] xl:leading-[70px] 
              2xl:text-[80px] 2xl:leading-[80px] 
              tracking-tight font-bold'>
                {index === 0 && 'Streamlined\nOperations'}
                {index === 1 && 'Enhanced\nProductivity'}
                {index === 2 && 'Data-Driven\nInsights'}
              </h1>
              <p className='
              sm:text-[20px]  sm:leading-[25px] sm:mt-[20px] sm:max-w-[400px] 
              md:text-[20px]  md:leading-[25px] md:mt-[20px] md:max-w-[400px] 
              lg:text-[25px] lg:leading-[30px] lg:mt-[20px] lg:max-w-[400px] 
              xl:text-[25px] xl:leading-[30px] xl:mt-[20px] xl:max-w-[400px] 
              2xl:text-[25px] 2xl:leading-[30px] 2xl:mt-[20px] 2xl:max-w-[400px] 
              font-semibold'>
                {index === 0 && 'FOX simplifies complex workflows, making facility management more efficient and organized.'}
                {index === 1 && 'With intuitive tools for planning and execution, FOX boosts productivity by reducing manual tasks.'}
                {index === 2 && 'FOX provides powerful analytics, helping you make informed decisions and optimize asset performance.'}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/*no need change*/}
      <div className=' 
      sm:mt-[30px]
      mt-[20px] gap-[10px] 
      flex'>
        {[...Array(3).keys()].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`
            sm: sm:
            w-[15px] h-[15px] 
            rounded-full ${index === activeIndex ? 'bg-[#FF5A5F]' : 'bg-gray-500'} hover:bg-[#FF5A5F] focus:outline-none`}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
