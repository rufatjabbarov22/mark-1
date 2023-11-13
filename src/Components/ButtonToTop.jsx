import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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
    <div style={{ position: 'fixed', bottom: 20, right: 30, zIndex: 1000 }}>
      {isVisible && (
        <Button
          variant="contained"
          color="secondary"
          onClick={scrollToTop}
          sx={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            padding: 0,
            fontSize: '30px',
          }}
        >
          <KeyboardArrowUpIcon />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;