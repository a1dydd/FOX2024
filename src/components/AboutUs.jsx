import React from 'react'
import BOX from '../assets/Dummy/BOX.jpg';

const AboutUs = () => {
  return (
    <section className='w-full flex flex-col text-justify
    sm:mt-[80px] sm:px-[30px] sm:max-w-[1500px]
    md:mt-[80px] md:px-[30px] md:max-w-[1500px]
    lg:mt-[80px] lg:px-[30px] lg:max-w-[1500px]
    xl:mt-[80px] xl:px-[30px] xl:max-w-[1500px]
   2xl:mt-[80px] 2xl:px-[30px] 2xl:max-w-[1500px]'>
    <h1 className=' font-bold 
     sm:text-[50px]
     md:text-[80px]
     lg:text-[80px]
     xl:text-[80px]
    2xl:text-[80px]'>About Us</h1>
    <div className='flex flex-col 
    sm:gap-[100px]
    md:gap-[100px]
    lg:gap-[100px]
    xl:gap-[100px]
    2xl:gap-[100px]'>
       <div className='
        sm:flex-col
        md:flex-col
        lg:flex-row
        xl:flex-row
       2xl:flex-row
       flex justify-between gap-4'>
      <p className='
       sm:text-[15px] sm:leading-[20px] sm:max-w-[600px]
       md:text-[20px] md:leading-[25px] md:max-w-[600px]
       lg:text-[20px] lg:leading-[25px] lg:max-w-[600px]
       xl:text-[20px] xl:leading-[25px] xl:max-w-[600px]
      2xl:text-[25px] 2xl:leading-[30px] 2xl:max-w-[600px] font-semibold '>We are Infinity Wave, the company that created FOX. We believe in the power of simplicity and the impact of efficiency. Our story began with a clear vision: to empower facilities, property, and asset managers with a tool that makes their work not just manageable, but seamless. FOX is born out of our love for beautiful buildings and well maintain facilities.</p>
      <img src={BOX} alt="" className='
      sm:w-full
      md:w-full
      lg:w-[450px]
      xl:w-[500px]
      2xl:w-[600px]'/>
    </div>
    <div className='
        sm:flex-col
        md:flex-col
        lg:flex-row
        xl:flex-row
       2xl:flex-row
       flex justify-between gap-4'>
      <p className='
       sm:text-[15px] sm:leading-[20px] sm:max-w-[600px]
       md:text-[20px] md:leading-[25px] md:max-w-[600px]
       lg:text-[20px] lg:leading-[25px] lg:max-w-[600px]
       xl:text-[20px] xl:leading-[25px] xl:max-w-[600px]
      2xl:text-[25px] 2xl:leading-[30px] 2xl:max-w-[600px] font-semibold'>We saw a gap in the tools available to facilities and property managers—a need for simplicity in a world of complexity. So we created FOX, our bold response to this challenge. Our founders had a hard time to justifiy the name - FOX, was it for Facility Oxygen? A system that breathed life to operations? or FOX - Facility Operation Experts? A digital expert to ease the critical issues in facilities management? We leave it for you to decide.</p>
      <img src={BOX} alt="" className='
      sm:w-full
      md:w-full
      lg:w-[450px]
      xl:w-[500px]
      2xl:w-[600px]'/>
    </div>
    <div className=' 
        sm:flex-col
        md:flex-col
        lg:flex-row
        xl:flex-row
       2xl:flex-row
       flex justify-between gap-4'>
      <p className='
       sm:text-[15px] sm:leading-[20px] sm:max-w-[600px]
       md:text-[20px] md:leading-[25px] md:max-w-[600px]
       lg:text-[20px] lg:leading-[25px] lg:max-w-[600px]
       xl:text-[20px] xl:leading-[25px] xl:max-w-[600px]
      2xl:text-[25px] 2xl:leading-[30px] 2xl:max-w-[600px] font-semibold'>Where others see obstacles, we see opportunities for transformation. FOX isn’t just software; it’s the embodiment of our mission to empower you with seamless, intuitive management solutions.</p>
      <img src={BOX} alt="" className='
      sm:w-full
      md:w-full
      lg:w-[450px]
      xl:w-[500px]
      2xl:w-[600px]'/>
    </div>
    <div className=' 
        sm:flex-col
        md:flex-col
        lg:flex-row
        xl:flex-row
       2xl:flex-row
       flex justify-between gap-4'>
      <p className='
       sm:text-[15px] sm:leading-[20px] sm:max-w-[600px]
       md:text-[20px] md:leading-[25px] md:max-w-[600px]
       lg:text-[20px] lg:leading-[25px] lg:max-w-[600px]
       xl:text-[20px] xl:leading-[25px] xl:max-w-[600px]
      2xl:text-[25px] 2xl:leading-[30px] 2xl:max-w-[600px] font-semibold'>Join us as we redefine what's possible. With FOX, we’re not just changing the game—we’re creating a whole new one.</p>
      <img src={BOX} alt="" className='
      sm:w-full
      md:w-full
      lg:w-[450px]
      xl:w-[500px]
      2xl:w-[600px]'/>
    </div>
    </div>
   </section>
  )
}

export default AboutUs
