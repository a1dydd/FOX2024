import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-[130px] pb-[100px] text-black">
      <p className="text-md">
      &copy; {currentYear} Infinity Wave
      </p>
    </footer>
  );
};

export default Copyright;
