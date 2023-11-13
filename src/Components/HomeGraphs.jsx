import React from 'react';
import Slider from 'react-slick';
import './styles.css'; // создайте файл стилей (например, styles.css)

const CarouselComponent = () => {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src="https://static.wixstatic.com/media/d0220c_fc555432fc9542e994e1645024f3ebe1~mv2.png/v1/fill/w_905,h_559,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/d0220c_fc555432fc9542e994e1645024f3ebe1~mv2.png" alt="Фотография 1" className='homeImg'/>
          </div>
          <div>
            <img src="https://static.wixstatic.com/media/d0220c_cd648191fd1540b0b9932493272c53d7~mv2.png/v1/fill/w_905,h_559,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/d0220c_cd648191fd1540b0b9932493272c53d7~mv2.png" alt="Фотография 2" className='homeImg'/>
          </div>
        </Slider>
      </div>
    );
  };
  
  export default CarouselComponent