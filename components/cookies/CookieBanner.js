import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Run on the client side to check the cookie
    const consent = Cookies.get("cookieConsent");
    setShowBanner(!consent); // Show banner if no consent cookie
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        background: "#0218B7",
        color: "#fff",
        padding: "10px",
        width: "100%",
        zIndex: '999',
      }}
    >
      <div className="d-flex">
      <p style={{padding: '0px 30px' , margin:0}}>
       We use cookies to personalise content and ads, to provide social media features and to analyse our traffic.<br/>
       We also disclose information about your use of our site with our social media, advertising.
      </p>
      <button 
        style={{
          padding: '0px 20px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '12px',
          background: '#0218B7',
          fontWeight: '500',
          textTransform: 'capitalize',
          color: '#ffff',
          border: '1px solid #ffff',
          marginLeft: '30px',
          height: '40px',
        }}
        onClick={acceptCookies}
        >Accept</button>
      </div>
    </div>
  );
};

export default CookieBanner;
