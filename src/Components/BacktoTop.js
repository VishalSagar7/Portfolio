import React, { useState, useEffect } from 'react';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';

const BacktoTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      id='backToTop' 
      onClick={scrollToTop} 
      className={`text-purple-700 bg-transparent ${showButton ? 'block' : 'hidden'} fixed bottom-7 right-7 active:text-purple-400 `}>
        <ArrowCircleUpRoundedIcon sx={{fontSize:'30px'}}/>
    </div>
  );
};

export default BacktoTop;



