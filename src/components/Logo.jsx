import React from 'react'
import eew from '../assets/eew_logo.png';
import ncia from '../assets/ncia_logo.png'; 
import tnbes from '../assets/tnbes_logo.png'; 
import afes from '../assets/afes_logo.png';  
//didnt resize yet
const Logo = () => {
  return (
    <div className=' xxs:pt-[50px] xxs:gap-4 xxs:flex xxs:flex-wrap xxs:justify-center xxs:items-center 
                     xs:pt-[50px] xs:gap-4 xs:flex xs:flex-wrap xs:justify-center xs:items-center 
                     sm:pt-[50px] sm:gap-4 sm:flex sm:flex-wrap sm:justify-center sm:items-center 
                     md:pt-[50px] md:gap-4 md:flex md:flex-wrap md:justify-center md:items-center 
                     lg:pt-[100px] lg:gap-10 lg:flex lg:justify-center 
                     xl:pt-[100px] xl:gap-28 xl:flex xl:justify-center 
                    '>
        <div className=''>
            <img className='xxs:w-[50px] xxs:h-[px]
                             xs:w-[90px] xs:h-[]
                             sm:w-[120px] sm:h-[]
                             md:w-[150px] md:h-[]
                             lg:w-[150px] lg:h-[]
                             xl:w-[150px] xl:h-[150px]
                            '
            src={eew} alt="" />
        </div>
        <div className=''>
            <img className='xxs:w-[70px] xxs:h-[px]
                             xs:w-[120px] xs:h-[]
                             sm:w-[150px] sm:h-[]
                             md:w-[180px] md:h-[]
                             lg:w-[180px] lg:h-[]
                             xl:w-[200px] xl:h-[100px]
                            '
            src={ncia} alt="" />
        </div>
        <div className=''>
            <img className='xxs:w-[50px] xxs:h-[px]
                             xs:w-[90px] xs:h-[]
                             sm:w-[120px] sm:h-[]
                             md:w-[150px] md:h-[]
                             lg:w-[150px] lg:h-[]
                             xl:w-[150px] xl:h-[150px]
                            '
            src={tnbes} alt="" />
        </div>
        <div className='pb-[]'>
            <img className='xxs:w-[85px] xxs:h-[px]
                             xs:w-[130px] xs:h-[]
                             sm:w-[160px] sm:h-[]
                             md:w-[190px] md:h-[]
                             lg:w-[200px] lg:h-[]
                             xl:w-[200px] xl:h-[90px]
                            '
            src={afes} alt="" />
        </div>
    </div>
  )
}

export default Logo
