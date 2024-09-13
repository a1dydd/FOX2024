import React from 'react'
import BOX from '../assets/BOX.jpg';

const AboutUs = () => {
  return (
    <div className='
xxs:
xs:
sm:
md:
lg:
xl:
py-[100px] px-[100px]'>
        <h1 className='
xxs:
xs:
sm:
md:
lg:
xl:
text-5xl font-bold pb-[70px]'>
            About Us</h1>
      <div>
        <ul>
            <li className='
xxs:
xs:
sm:
md:
lg:
xl:
text-2xl pb-[70px]'>
                Infinity Wave is our name, but FOX is our statement.</li>
                <ul className='
xxs:
xs:
sm:
md:
lg:
xl:
flex gap-[95px]'>
                    <li className='
xxs:
xs:
sm:
md:
lg:
xl:
text-2xl leading-[30px] pb-[200px]'>
                        We are Infinity Wave, the company that created FOX. 
                        <br />We believe in the power of simplicity and the 
                        <br />impact of efficiency. Our story began with a clear 
                        <br />vision: to empower facilities, property, and asset 
                        <br />managers with a tool that makes their work not just 
                        <br />manageable, but seamless. FOX is born out of our 
                        <br />love for beautiful buildings and well maintain facilities.</li>
                        <li>
                            <img className='
xxs:
xs:
sm:
md:
lg:
xl:
w-[514px] h-[240px]'
                            src={BOX} alt="" /></li>
                </ul>
                <ul className='
xxs:
xs:
sm:
md:
lg:
xl:
flex gap-[95px]'>
                    <li className='
xxs:
xs:
sm:
md:
lg:
xl:
text-2xl leading-[30px] pb-[200px]'>
                        We saw a gap in the tools available to facilities and 
                        <br />property managers—a need for simplicity in a world of 
                        <br />complexity. So we created FOX, our bold response to 
                        <br />this challenge. Our founders had a hard time to justifiy 
                        <br />the name - FOX, was it for Facility Oxygen? A system 
                        <br />that breathed life to operations? or FOX - Facility 
                        <br />Operation Experts? A digital expert to ease the critical 
                        <br />issues in facilities management? We leave it for you to 
                        <br />decide.</li>
                        <li>
                            <img className='
xxs:
xs:
sm:
md:
lg:
xl:
w-[514px] h-[240px]'
                            src={BOX} alt="" /></li>
                </ul>
                <ul className='
xxs:
xs:
sm:
md:
lg:
xl:
flex gap-[95px]'>
                    <li className='
xxs:
xs:
sm:
md:
lg:
xl:
text-2xl leading-[30px] pb-[200px]'>
                        Where others see obstacles, we see opportunities for 
                        <br />transformation. FOX isn’t just software; it’s the 
                        <br />embodiment of our mission to empower you with 
                        <br />seamless, intuitive management solutions.</li>
                        <li>
                            <img className='w-[514px] h-[240px]'
                            src={BOX} alt="" /></li>
                </ul>
                <ul className='flex gap-[95px]'>
                    <li className='text-2xl leading-[30px] pb-[200px]'>
                        Join us as we redefine what's possible. With FOX, 
                        <br />we’re not just changing the game—we’re creating a 
                        <br />whole new one.</li>
                        <li>
                            <img className='w-[514px] h-[240px]'
                            src={BOX} alt="" /></li>
                </ul>
        </ul>
      </div>
    </div>
  )
}

export default AboutUs
