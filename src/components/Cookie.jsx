import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Cookie = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowBanner(true); // Show banner if no consent cookie is found
    } else {
      setConsentGiven(true); // Consent was already given or declined
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowBanner(false);
    setConsentGiven(true);
  };

  const handleDecline = () => {
    Cookies.set('cookieConsent', 'false', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null; // Hide the banner if consent is given or declined

  return (
    <div className="
xxs:py-2 xxs:px-4  xxs:w-full  xxs:h-[100px]  xxs:bottom-0  xxs:fixed
xs:py-2 xs:px-2 xs:w-full  xs:h-[120px]  xs:bottom-0  xs:fixed
sm:py-2 sm:px-2 sm:w-full  sm:h-[140px]  sm:bottom-0  sm:fixed
md:py-2 md:px-2 md:w-full  md:h-[160px]  md:bottom-0  md:fixed
lg:py-2 lg:px-4  lg:w-full  lg:h-[60px]  lg:bottom-0  lg:fixed
xl:py-2 xl:px-4  xl:w-full  xl:h-[60px]  xl:bottom-0  xl:fixed
 bg-black text-white ">
      <div className="
xxs:justify-between xxs:items-center
xs:justify-between xs:items-center
sm:justify-between sm:items-center
md:justify-between md:items-center
lg:justify-between lg:flex
xl:justify-between xl:flex">
        <div className='
xxs:text:sm
xs:text-base
sm:text-lg
md:text-xl
lg:text-base
xl:text-sm'>
          <p className='
xxs:py-1 
xs:py-1
sm:py-1
md:py-1
lg:py-1
xl:py-1
font-bold'>We value your privacy.</p>
          <p className='
xxs:text-[12px]
xs:text-base
sm:text-lg
md:text-xl
lg:text-base
xl:text-base'>This website uses cookies to enhance your experience.</p>
        </div>
        <div className='
xxs:flex xxs:justify-center xxs:gap-5 xxs:mt-[10px]
xs:flex xs:justify-center xs:gap-7 xs:mt-[10px]
sm:flex sm:justify-center sm:gap-9 sm:mt-[10px]
md:flex md:justify-center md:gap-9 md:mt-[10px]
lg:flex
xl:flex
'>
          <div className=''>
            <button
              className='
xxs:text-base xxs:w-[140px] xxs:h-[25px]
xs:text-base xs:w-[190px] xs:h-[35px]
sm:text-xl sm:w-[210px] sm:h-[45px]
md:text-2xl md:w-[230px] md:h-[55px]
lg:text-lg lg:h-[35px] lg:w-[160px]
xl:text-lg xl:h-[35px] xl:w-[160px]
font-semibold  text-black bg-white hover:bg-gray-200 rounded-md '
              onClick={handleAccept}>
              Accept
            </button>
          </div>
          <div className='
xxs:
xs:
sm:
md:
lg:
xl:pr-4'>
            <button
              className='
xxs:text-base xxs:w-[140px] xxs:h-[25px]
xs:text-base xs:w-[190px] xs:h-[35px]
sm:text-xl sm:w-[210px] sm:h-[45px]
md:text-2xl md:w-[230px] md:h-[55px]
lg:h-[35px] lg:w-[160px] lg:text-lg
xl:h-[35px] xl:w-[160px] xl:text-lg
font-semibold text-black bg-white hover:bg-gray-200 rounded-md '
              onClick={handleDecline}>
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
