import React from 'react'
import BOX from '../assets/BOX.jpg';

const PageNotFound = () => {
  return (
    <div className='pt-[100px] px-[100px]'>
        <h1 className='text-5xl font-bold pb-[36px]'>Page Not Found</h1>
        <div className='flex flex-col items-center gap-9'>
            <img src={BOX} alt="" className='h-[400px] w-[760px]'/>
            <h1 className='text-5xl font-bold'>Sorry, that page cannot be found.</h1>
            <p className='text-xl'>Go back to main page</p>
        </div>
    </div>
  )
}

export default PageNotFound
