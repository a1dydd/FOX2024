import React from 'react'
import eew from '../assets/eew_logo.png';
import ncia from '../assets/ncia_logo.png'; 
import tnbes from '../assets/tnbes_logo.png'; 
import afes from '../assets/afes_logo.png';  
//didnt resize yet
const Logo = () => {
  return (
    <div className='flex pt-[100px] px-[10px] justify-center gap-[110px]'>
        <div className=''>
            <img className='w-[150px] h-[150px]'
            src={eew} alt="" />
        </div>
        <div className=''>
            <img className='w-[200px] h-[100px]'
            src={ncia} alt="" />
        </div>
        <div className=''>
            <img className='w-[150px] h-[150px]'
            src={tnbes} alt="" />
        </div>
        <div className='pb-[]'>
            <img className='w-[200px] h-[90px]'
            src={afes} alt="" />
        </div>
    </div>
  )
}

export default Logo
