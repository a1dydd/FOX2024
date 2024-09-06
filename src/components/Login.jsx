import React from 'react';
import FOXB from '../assets/FOXB.png';

const Login = () => {
  return (
    <div className='relative px-[100px] py-7'>
      <div className='flex mb-6'>
        <a href="/">
          <img className="w-[90px] h-[45px]" src={FOXB} alt="FOX Logo" />
        </a>
      </div>
      <form action="" className='flex items-center flex-col mt-4 pt-[100px]'>
        <div>
          <h1 className='font-bold text-3xl'>Plan and Implement.</h1>
          <h1>Log in to your FOX account</h1>
        </div>
        <div className='flex flex-col pt-10 pb-6'>
           <label htmlFor="email" className='pb-4'>
            Email</label>
           <input type="text" name="" id="email" placeholder='Enter your email'
           className='w-[300px] h-[40px] px-4 rounded-xl border '/>
        </div>
        <div className='flex flex-col pb-6'>
           <label htmlFor="password" className='pb-4'>
            Password</label>
           <input type="text" name="" id="email" placeholder='Enter your password'
           className='w-[300px] h-[40px] px-4 rounded-xl border'/>
        </div>
        <div>
          <button className='w-[300px] h-[40px] rounded-xl border text-white bg-blue-700'>
          Login</button>
        </div>
      </form>
      <div className='flex flex-col items-center w-full pt-6'>
        <div className='text-left w-full max-w-[300px] pb-8'>
          <p className=' text-blue-600'>Forgot your password?</p>
        </div>
        <div className='text-left w-full max-w-[300px] pb-8'>
          <p>By continuing, you acknowledge that you understand and agree to the terms of  <a href=""><span className='underline  text-blue-600'> Privacy & Policy</span></a>.</p>
        </div>
        <div className='text-left w-full max-w-[300px]'>
          <p>If you don't have any registered account,<a href=""><span className='underline text-blue-600'> contact our team </span></a> to experience FOX.  </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
