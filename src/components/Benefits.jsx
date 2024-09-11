import React, { useRef, useState, useEffect } from 'react';
import BOX from '../assets/BOX.jpg';

const Benefits = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleDragStart = (e) => {
    e.preventDefault();
    carouselRef.current.style.scrollBehavior = 'auto'; 
    carouselRef.current.isDragging = true;
    carouselRef.current.startX = e.pageX || e.touches[0].pageX;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft || 0;
  };

  const handleDragMove = (e) => {
    if (!carouselRef.current.isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - carouselRef.current.startX) * 0.2; // Adjust sensitivity here
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - walk;
  };

  const handleDragEnd = () => {
    carouselRef.current.isDragging = false;
    carouselRef.current.style.scrollBehavior = 'smooth'; 
    autoSlide();
  };

  const autoSlide = () => {
    const items = Array.from(carouselRef.current.children);
    const visibleItem = items.find(item => {
      const { offsetLeft, offsetWidth } = item;
      return (scrollPosition + carouselRef.current.offsetWidth / 2) >= offsetLeft &&
             (scrollPosition + carouselRef.current.offsetWidth / 2) <= (offsetLeft + offsetWidth);
    });

    if (visibleItem) {
      const itemId = visibleItem.id;
      const nextItem = items.find(item => item.id === itemId);
      if (nextItem) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const elementWidth = nextItem.offsetWidth;
        const elementOffset = nextItem.offsetLeft;
        const centerOffset = (carouselWidth - elementWidth) / 2;

        const scrollTo = elementOffset - centerOffset;

        carouselRef.current.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        setScrollPosition(carouselRef.current.scrollLeft);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element && carouselRef.current) {
      // Scroll page to section
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });

      // Ensure the carousel adjusts after the page scrolls
      setTimeout(() => {
        const carousel = carouselRef.current;
        if (carousel) {
          const carouselWidth = carousel.offsetWidth;
          const elementWidth = element.offsetWidth;
          const elementOffset = element.offsetLeft;
          const centerOffset = (carouselWidth - elementWidth) / 2;

          const scrollTo = elementOffset - centerOffset;

          carousel.scrollTo({
            left: scrollTo,
            behavior: 'smooth'
          });
        }
      }, 500); // Adjust delay if needed
    }
  };

  return (
    <div
      ref={carouselRef}
      className="xxs:my-[50px]
                  xs:my-[50px]
                  sm:my-[50px]
                  md:my-[50px]
                  lg:my-[100px]
                  xl:my-[100px] 
                  carousel flex overflow-x-scroll scroll-smooth cursor-grab"
      style={{
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none', 
      }}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div id="benefit1" className="xxs:min-w-[100vw] xxs:px-[10px] xxs:flex-shrink-0
                                     xs:min-w-[100vw] xs:px-[10px] xs:flex-shrink-0
                                     sm:min-w-[100vw] sm:px-[10px] sm:flex-shrink-0
                                     md:min-w-[100vw] md:px-[10px] md:flex-shrink-0 
                                     lg:min-w-[100vw] lg:px-[70px] lg:flex-shrink-0 lg:flex lg:items-start lg:gap-8
                                     xl:min-w-[100vw] xl:px-[70px] xl:flex-shrink-0 xl:flex xl:items-start xl:gap-8">
        <div>
          <img className="xxs:w-[300px] xxs:h-[200px]
                           xs:w-[458px] xs:h-[306px]
                           sm:w-[619px] sm:h-[413px]
                           md:w-[737px] md:h-[492px]
                           lg:w-[467px] lg:h-[300px]
                           xl:w-[587px] xl:h-[360px] 
                           rounded-xl" src={BOX} alt="Benefit 01" />
        </div>
        <div>
          <h1 className="xxs:text-[26px] xxs:text-center
                          xs:text-[41px] xs:text-center
                          sm:text-[55px] sm:text-center
                          md:text-[65px] md:text-center
                          lg:text-[35px] lg:text-right
                          xl:text-5xl xl:text-right
                          font-bold">
          Streamlined Operations
          </h1>
          <p className="xxs:text-[14px] xxs:text-center
                         xs:text-[22px] xs:pt-[10px] xs:text-center 
                         sm:text-3xl sm:pt-[10px] sm:text-center 
                         md:text-4xl md:pt-[10px] md:text-center 
                         lg:text-lg lg:py-4 lg:text-right
                         xl:text-2xl xl:py-4 xl:text-right
                        ">
            FOX simplifies complex workflows,
            <br />making facility management more 
            <br />efficient and organized.
          </p>
        </div>
      </div>
      <div id="benefit2" className="xxs:min-w-[100vw] xxs:px-[10px] xxs:flex-shrink-0
                                     xs:min-w-[100vw] xs:px-[10px] xs:flex-shrink-0
                                     sm:min-w-[100vw] sm:px-[10px] sm:flex-shrink-0
                                     md:min-w-[100vw] md:px-[10px] md:flex-shrink-0 
                                     lg:min-w-[100vw] lg:px-[70px] lg:flex-shrink-0 lg:flex lg:items-start lg:gap-8
                                     xl:min-w-[100vw] xl:px-[70px] xl:flex-shrink-0 xl:flex xl:items-start xl:gap-20">
        <div>
          <img className="xxs:w-[300px] xxs:h-[200px]
                           xs:w-[458px] xs:h-[306px]
                           sm:w-[619px] sm:h-[413px]
                           md:w-[737px] md:h-[492px]
                           lg:w-[467px] lg:h-[300px]
                           xl:w-[587px] xl:h-[360px] 
                           rounded-xl" src={BOX} alt="Benefit 01" />
        </div>
        <div>
          <h1 className="xxs:text-[26px] xxs:text-center
                          xs:text-[41px] xs:text-center
                          sm:text-[55px] sm:text-center
                          md:text-[65px] md:text-center
                          lg:text-[35px] lg:text-right
                          xl:text-5xl xl:text-right
                          font-bold">
          Enhanced Productivity
          </h1>
          <p className="xxs:text-[14px] xxs:text-center
                         xs:text-[22px] xs:pt-[10px] xs:text-center 
                         sm:text-3xl sm:pt-[10px] sm:text-center 
                         md:text-4xl md:pt-[10px] md:text-center 
                         lg:text-lg lg:py-4 lg:text-right
                         xl:text-2xl xl:py-4 xl:text-right
                        ">
            With intuitive tools for planning and 
          <br />execution, FOX boosts productivity by 
          <br />reducing manual tasks.
          </p>
        </div>
      </div>
      <div id="benefit3" className="xxs:min-w-[100vw] xxs:px-[10px] xxs:flex-shrink-0
                                     xs:min-w-[100vw] xs:px-[10px] xs:flex-shrink-0
                                     sm:min-w-[100vw] sm:px-[10px] sm:flex-shrink-0
                                     md:min-w-[100vw] md:px-[10px] md:flex-shrink-0 
                                     lg:min-w-[100vw] lg:px-[70px] lg:flex-shrink-0 lg:flex lg:items-start lg:gap-8
                                     xl:min-w-[100vw] xl:px-[70px] xl:flex-shrink-0 xl:flex xl:items-start xl:gap-20">
        <div>
          <img className="xxs:w-[300px] xxs:h-[200px]
                           xs:w-[458px] xs:h-[306px]
                           sm:w-[619px] sm:h-[413px]
                           md:w-[737px] md:h-[492px]
                           lg:w-[467px] lg:h-[300px]
                           xl:w-[587px] xl:h-[360px] 
                           rounded-xl" src={BOX} alt="Benefit 01" />
        </div>
        <div>
          <h1 className="xxs:text-[26px] xxs:text-center
                          xs:text-[41px] xs:text-center
                          sm:text-[55px] sm:text-center
                          md:text-[65px] md:text-center
                          lg:text-[35px] lg:text-right
                          xl:text-5xl xl:text-right
                          font-bold">
          Data-Driven Insights
          </h1>
          <p className="xxs:text-[14px] xxs:text-center
                         xs:text-[22px] xs:pt-[10px] xs:text-center 
                         sm:text-3xl sm:pt-[10px] sm:text-center 
                         md:text-4xl md:pt-[10px] md:text-center 
                         lg:text-lg lg:py-4 lg:text-right
                         xl:text-2xl xl:py-4 xl:text-right
                        ">
            FOX provides powerful analytics, helping 
          <br />you make informed decisions and 
          <br />optimize asset performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
