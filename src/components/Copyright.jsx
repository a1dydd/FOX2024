import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="
xxs:px-[10px] xxs:pb-[10px]
xs:px-[10px] xs:pb-[10px]
sm:px-[10px] sm:pb-[10px]
md:px-[10px] md:pb-[10px]
lg:px-[70px] lg:pb-[50px]
xl:px-[130px] xl:pb-[50px]
 text-black">
      <p className="
xxs:text-[13px]
xs:text-[13px]
sm:text-[20px]
md:text-[20px]
lg:text-base
xl:text-base
">
      &copy; {currentYear} Infinity Wave
      </p>
    </footer>
  );
};

export default Copyright;
