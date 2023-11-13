import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TextWithLine.css';
import './Slider.css'; // Создайте CSS-файл для стилей
import { Typography } from '@mui/material';

function HorizontalSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="text-with-line" sx={{ color: '#FFFFFF', fontSize: '18px' }}>
            <span className="underline"> The Business Time</span>
          </div>
          <Typography variant='h3' sx={{ fontSize: '55px', marginTop: '100px', marginBottom: '100px', color: '#FFFFFF' }}>
            "The smartest product<br /> in the market"
          </Typography>
        </div>
        <div>
          <div className="text-with-line" sx={{ color: '#FFFFFF', fontSize: '18px' }}>
            <span className="underline" > Data Today</span>
          </div>
          <Typography variant='h3' sx={{ fontSize: '55px', marginTop: '100px', marginBottom: '100px', color: '#FFFFFF' }}>
            "The game changing <br/> app you'll nedd"
          </Typography>
        </div>

      </Slider>
    </div>
  );
}

export default HorizontalSlider;
