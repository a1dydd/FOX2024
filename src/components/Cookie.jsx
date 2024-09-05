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
    <div className="fixed bottom-0 w-full h-[60px] bg-black text-white py-2 px-4">
      <div className="flex justify-between items-center">
        <div className='text-sm'>
          <p className='font-bold py-1'>We value your privacy.</p>
          <p>This website uses cookies to enhance your experience.</p>
        </div>
        <div className='flex'>
          <div className='px-11'>
            <button
              className='font-semibold text-md text-black bg-white hover:bg-gray-200 rounded-md h-[30px] w-[160px]'
              onClick={handleAccept}>
              Accept
            </button>
          </div>
          <div className='pr-4'>
            <button
              className='font-semibold text-md text-black bg-white hover:bg-gray-200 rounded-md h-[30px] w-[160px]'
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
