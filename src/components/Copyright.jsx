import React from 'react';
import { MdOutlineCopyright } from "react-icons/md";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-semibold mt-[20px]">
      <p className="flex justify-center">
      <MdOutlineCopyright className='mt-[5px] mr-1'/> {currentYear} Infinity Wave
      </p>
    </footer>
  );
};

export default Copyright;
