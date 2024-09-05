import React from 'react'
import ind from '../assets/in.png'; 
import fa from '../assets/fa.png'; 
import yo from '../assets/yo.png'; 
import wha from '../assets/wha.png'; 


const Footer = () => {
  return (
    <div className='flex gap-[350px] pl-[130px] pt-[100px] pb-[50px]'>
      <ul className='flex flex-col gap-7'>
        <li className='font-bold text-2xl'>Company</li>
          <li> <a href="/aboutus">About Us</a></li>
          <li><a href="https://infinitywave.io/">Infinity Wave</a></li>
          <li><a href="https://infinitywave.io/Career">Careers</a></li>
          <li><a href="/termprivacy">Terms & Privacy</a></li>
      </ul>
      <ul className='flex flex-col gap-7'>
        <li className='font-bold text-2xl'>Downlaod</li>
          <li><a href="https://apps.apple.com/my/app/fox-smart-facility-management/id6475958098">iOS</a></li>
          <li><a href="https://play.google.com/store/apps/details?id=io.foxmy.app&hl=en-MY">Android</a></li>
          <li><a href="/cookie">Website Cookie Settings</a></li>
      </ul>
      <ul className='flex flex-col gap-7'>
        <li className='font-bold text-2xl'>Social</li>
        <li className='flex gap-2 h-[24px]'>
        <a href="https://www.linkedin.com/company/infinitywavetech/" target="_blank" rel="noopener noreferrer">
            <img className='w-[30px]' src={ind} alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/myinfinitywave" target="_blank" rel="noopener noreferrer">
            <img className='w-[30px]' src={fa} alt="Facebook" />
          </a>
          <a href="https://whatsapp.com/channel/0029VadFRt8A89MdDwbhF20u" target="_blank" rel="noopener noreferrer">
            <img className='w-[30px]' src={wha} alt="YouTube" />
          </a>
          <a href="https://www.youtube.com/channel/UCX_zJiMFFsTMnH0D2y2DFrg" target="_blank" rel="noopener noreferrer">
            <img className='w-[30px]' src={yo} alt="YouTube" />
          </a>
        </li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>
  )
}

export default Footer
