import React from 'react'
import BOX from '../assets/BOX.jpg';

const PageNotFound = () => {
  return (
    <div className='
xxs:pt-[100px] xxs:px-[10px]
xs:pt-[100px] xs:px-[10px]
sm:pt-[100px] sm:px-[10px]
md:pt-[100px] md:px-[10px]
lg:pt-[100px] lg:px-[70px]
xl:pt-[100px] xl:px-[70px]'>
        <h1 className='
xxs:text-3xl xxs:pb-[10px] xxs:flex xxs:justify-center 
xs:text-4xl xs:pb-[10px] xs:flex xs:justify-center 
sm:text-5xl sm:pb-[10px] sm:flex sm:justify-center 
md:text-6xl md:pb-[20px] md:flex md:justify-center 
lg:text-6xl lg:pb-[20px] lg:flex lg:justify-center 
xl:text-6xl xl:pb-[36px]
font-bold'>Page Not Found</h1>
        <div className='
xxs:gap-2 xxs:flex xxs:flex-col xxs:items-center
xs:gap-2 xs:flex xs:flex-col xs:items-center
sm:gap-2 sm:flex sm:flex-col sm:items-center
md:gap-2 md:flex md:flex-col md:items-center
lg:gap-9 lg:flex lg:flex-col lg:items-center
xl:gap-9 xl:flex xl:flex-col xl:items-center'>
            <img src={BOX} alt="" className='
xxs:w-[300px] xxs:h-[200px]
xs:w-[458px] xs:h-[306px]
sm:w-[619px] sm:h-[413px]
md:w-[737px] md:h-[492px]
lg:md:w-[467px] lg:h-[300px]
xl:w-[587px] xl:h-[360px] '/>
            <h1 className='
xxs:text-base
xs:text-xl
sm:text-2xl
md:text-3xl
lg:text-4xl
xl:text-4xl
font-bold'>Sorry, that page cannot be found.</h1>
            <p className='
xxs:text-base
xs:text-xl
sm:text-2xl
md:text-3xl
lg:text-3xl
xl:text-3xl
'><a href="/">Go back to main page</a></p>
        </div>
    </div>
  )
}

export default PageNotFound
