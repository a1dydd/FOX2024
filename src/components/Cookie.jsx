import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Cookie = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowBanner(true); // Show banner if no consent cookie is found
    } else {
      setShowBanner(false); // Hide the banner if consent is already given or declined
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  const handleDecline = () => {
    Cookies.set('cookieConsent', 'false', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null; // Hide the banner if consent is given or declined

  return (
    <section className='
     sm:h-[100px] sm:p-4
     md:h-[60px] md:p-4
     lg:h-[60px] lg:p-4
     xl:h-[60px] xl:p-4
    2xl:h-[70px] 2xl:p-4 
    w-full bg-white fixed bottom-0 shadow-lg flex justify-between items-center'>
      <div className='
       sm:text-[15px] sm:leading-[25px]
       md:text-[16px] md:leading-[21px]
       lg:text-[17px] lg:leading-[22px]
       xl:text-[17px] xl:leading-[22px]
      2xl:text-[20px] 2xl:leading-[25px] '>
        <h1 className='
         sm:
         md:
         lg:
         xl:
        2xl:
        font-bold tracking-tight'>We value your privacy</h1>
        <p className='
         sm:
         md:
         lg:
         xl:
        2xl:
        font-semibold tracking-tight'>This website uses cookies to enhance your experience</p>
      </div>
      <div className='
         sm:text-[18px] sm:gap-2 sm:flex-col
         md:text-[16px] md:space-x-4 md:flex-row
         lg:text-[17px] lg:space-x-4 lg:flex-row
         xl:text-[17px] xl:space-x-4 xl:flex-row
        2xl:text-[20px] 2xl:space-x-4 2xl:flex-row
        text-center font-semibold flex '>
        <button onClick={handleAccept} className='
         sm:px-[30px]
         md:px-[40px]
         lg:px-[50px]
         xl:px-[50px]
        2xl:px-[50px]
         rounded-lg text-white bg-[#FF5A5F] hover:bg-[#E14E52] hover:text-white'>Accept</button>
        <button onClick={handleDecline} className='
         sm:px-[30px]
         md:px-[40px]
         lg:px-[50px]
         xl:px-[50px] 
        2xl:px-[50px]
        border-[2px] rounded-lg text-[#FF5A5F] bg-white border-[#FF5A5F] hover:bg-[#E14E52] hover:text-white'>Decline</button>
      </div>
    </section>
  );
};

export default Cookie;
