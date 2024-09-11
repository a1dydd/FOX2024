import React from 'react'
import ind from '../assets/in.png'; 
import fa from '../assets/fa.png'; 
import yo from '../assets/yo.png'; 
import wha from '../assets/wha.png'; 


const Footer = () => {
  return (
    <div className='
xxs:pb-[50px] xxs:pt-[100px] xxs:gap-11 xxs:flex xxs:flex-wrap xxs:justify-center
xs:pb-[50px] xs:pt-[100px] xs:gap-11 xs:flex xs:flex-wrap xs:justify-center
sm:pb-[50px] sm:pt-[100px] sm:gap-11 sm:flex sm:flex-wrap sm:justify-center
md:pb-[50px] md:pt-[100px] md:gap-11 md:flex md:flex-wrap md:justify-center
lg:pb-[50px] lg:pt-[100px] lg:gap-[150px] lg:flex lg:flex-wrap lg:justify-center
xl:pb-[50px] xl:pt-[100px] xl:gap-[355px] xl:flex xl:flex-wrap xl:justify-center'>
      <ul className='
xxs:flex xxs:flex-col xxs:gap-2
xs:flex xs:flex-col xs:gap-2
sm:flex sm:flex-col sm:gap-2
md:flex md:flex-col md:gap-2
lg:flex lg:flex-col lg:gap-7
xl:flex xl:flex-col xl:gap-7'>
        <li className='
xxs:text-[18px]
xs:text-[24px]
sm:text-[30px]
md:text-[36px]
lg:text-[35px]
xl:text-2xl
font-bold'>Company</li>
          <li className='
          xxs:text-[13px]
          xs:text-[20px]
          sm:text-[27px]
          md:text-[34px]
          lg:text-xl'><a href="/aboutus">About Us</a></li>
          <li className='
          xxs:text-[13px]
          xs:text-[20px]
          sm:text-[27px]
          md:text-[34px]
          lg:text-xl'><a href="https://infinitywave.io/">Infinity Wave</a></li>
          <li className='
          xxs:text-[13px]
          xs:text-[20px]
          sm:text-[27px]
          md:text-[34px]
          lg:text-xl'><a href="https://infinitywave.io/Career">Careers</a></li>
          <li className='
          xxs:text-[13px]
          xs:text-[20px]
          sm:text-[27px]
          md:text-[34px]
          lg:text-xl'><a href="/termprivacy">Terms & Privacy</a></li>
      </ul>
      <ul className='
xxs:flex xxs:flex-col xxs:gap-2
xs:flex xs:flex-col xs:gap-2
sm:flex sm:flex-col sm:gap-2
md:flex md:flex-col md:gap-2
lg:flex lg:flex-col lg:gap-7
xl:flex xl:flex-col xl:gap-7'>
        <li className='
xxs:text-[18px]
xs:text-[24px]
sm:text-[30px]
md:text-[36px]
lg:text-[35px]
xl:text-2xl
font-bold'>Downlaod</li>
          <li className='
          xxs:text-[13px]
          xs:text-[20px]
          sm:text-[27px]
          md:text-[34px]
          lg:text-xl'><a href="https://apps.apple.com/my/app/fox-smart-facility-management/id6475958098">iOS</a></li>
          <li className='
          xxs:text-[13px]
          xs:text-[20px]
          sm:text-[27px]
          md:text-[34px]
          lg:text-xl'><a href="https://play.google.com/store/apps/details?id=io.foxmy.app&hl=en-MY">Android</a></li>
          <li className='
          xxs:text-[13px]
          xs:text-[20px]
          sm:text-[27px]
          md:text-[34px]
          lg:text-xl'><a href="/cookie">Cookie Settings</a></li>
      </ul>
      <ul className='
xxs:flex xxs:flex-col xxs:gap-5
xs:flex xs:flex-col xs:gap-5
sm:flex sm:flex-col sm:gap-8
md:flex md:flex-col md:gap-8
lg:flex lg:flex-col lg:gap-7
xl:flex xl:flex-col xl:gap-7'>
        <li className='
xxs:text-[18px]
xs:text-[24px]
sm:text-[30px]
md:text-[36px]
lg:text-[35px]
xl:text-2xl
font-bold'>Social</li>
        <li className='
xxs:gap-4 xxs:h-[24px] xxs:flex
xs:gap-5 xs:h-[24px] xs:flex
sm:gap-6 sm:h-[24px] sm:flex
md:gap-7 md:h-[24px] md:flex
lg:gap-3 lg:h-[24px] lg:flex
xl:gap-2 xl:h-[24px] xl:flex '>
        <a href="https://www.linkedin.com/company/infinitywavetech/" target="_blank" rel="noopener noreferrer">
            <img className='
xxs:w-[30px]
xs:w-[40px]
sm:w-[50px]
md:w-[60px]
lg:w-[30px]
xl:w-[30px]' src={ind} alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/myinfinitywave" target="_blank" rel="noopener noreferrer">
            <img className='
xxs:w-[30px]
xs:w-[40px]
sm:w-[50px]
md:w-[60px]
lg:w-[30px]
xl:w-[30px]' src={fa} alt="Facebook" />
          </a>
          <a href="https://whatsapp.com/channel/0029VadFRt8A89MdDwbhF20u" target="_blank" rel="noopener noreferrer">
            <img className='
xxs:w-[30px]
xs:w-[40px]
sm:w-[50px]
md:w-[60px]
lg:w-[30px]
xl:w-[30px]' src={wha} alt="YouTube" />
          </a>
          <a href="https://www.youtube.com/channel/UCX_zJiMFFsTMnH0D2y2DFrg" target="_blank" rel="noopener noreferrer">
            <img className='
xxs:w-[30px]
xs:w-[40px]
sm:w-[50px]
md:w-[60px]
lg:w-[30px]
xl:w-[30px]
' src={yo} alt="YouTube" />
          </a>
        </li>
        <li className='
        xxs:text-[13px]
        xs:text-[20px]
        sm:text-[27px]
        md:text-[34px]
        lg:text-xl'><a href="/blog">Blog</a></li>
      </ul>
    </div>
  )
}

export default Footer
