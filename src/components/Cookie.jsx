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
    <section className='w-full h-[70px] bg-white fixed bottom-0 shadow-lg p-4 flex justify-between items-center'>
      <div className='sm:text-[10px] sm:min-w-[140px] md:text-[15px] text-[20px] sm:leading-[15px] md:leading-[20px] leading-[25px]'>
        <h1 className='font-bold tracking-tight'>We value your privacy</h1>
        <p className='font-semibold tracking-tight'>This website uses cookies to enhance your experience</p>
      </div>
      <div className='sm:text-[10px] md:text-[15px] text-[20px] text-center font-semibold flex space-x-3'>
        <button onClick={handleAccept} className='sm:px-[20px] md:px-[20px] px-[50px] rounded-lg text-white bg-[#FF5A5F] hover:bg-[#E14E52] hover:text-white'>Accept</button>
        <button onClick={handleDecline} className='sm:px-[20px] md:px-[20px] px-[50px] rounded-lg text-[#FF5A5F] bg-white sm:border-[2px] border-[3px] border-[#FF5A5F] hover:bg-[#E14E52] hover:text-white'>Decline</button>
      </div>
    </section>
  );
};

export default Cookie;
