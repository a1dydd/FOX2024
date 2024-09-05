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
      className="carousel flex overflow-x-scroll scroll-smooth cursor-grab"
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
      <div id="benefit1" className="flex-shrink-0 flex items-start justify-between min-w-[100vw] px-[70px] py-[150px]">
        <div>
          <img className="w-[810px] h-[500px] rounded-xl" src={BOX} alt="Benefit 01" />
        </div>
        <div className="">
          <h1 className="font-bold text-4xl text-right">
          Streamlined Operations
          </h1>
          <p className="text-right text-2xl py-4">
            FOX simplifies complex workflows,
            <br />making facility management more 
            <br />efficient and organized.
          </p>
        </div>
      </div>
      <div id="benefit2" className="flex-shrink-0 flex items-start justify-between min-w-[100vw] px-[70px] py-[150px]">
        <div>
          <img className="w-[810px] h-[500px] rounded-xl" src={BOX} alt="Benefit 01" />
        </div>
        <div className="">
          <h1 className="font-bold text-4xl text-right">
          Enhanced Productivity
          </h1>
          <p className="text-right text-2xl py-4">
          With intuitive tools for planning and 
          <br />execution, FOX boosts productivity by 
          <br />reducing manual tasks.
          </p>
        </div>
      </div>
      <div id="benefit3" className="flex-shrink-0 flex items-start justify-between min-w-[100vw] px-[70px] py-[150px]">
        <div>
          <img className="w-[810px] h-[500px] rounded-xl" src={BOX} alt="Benefit 03" />
        </div>
        <div className="">
          <h1 className="font-bold text-4xl text-right">
          Data-Driven Insights
          </h1>
          <p className="text-right text-2xl py-4">
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
