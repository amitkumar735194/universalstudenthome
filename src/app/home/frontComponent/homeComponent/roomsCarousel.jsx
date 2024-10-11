"use client"
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import styles from './RoomsCarousel.module.css'; // Optional: Custom CSS Module

const RoomsCarousel = () => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1292,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="pt-6 portfolio bg-white-1 rec-pro" style={{ borderTop: 'none' }}>
      <div className="container-fluid">
        <div className="sec-title">
          <h2>
            <span>A Sneak Peek Into </span>Our Rooms
          </h2>
          <p>These are Our Rooms for rent</p>
        </div>
        <div className="p-0 portfolio col-xl-12">
          <Slider {...settings} className="slick-lancers">
            <div className="agents-grid sneak-peek" data-aos="fade-up" data-aos-delay="250">
              <div className="people listing-item compact thehp-2">
                <a href="#" className="recent-16" data-aos="fade-up">
                  <div className="recent-img16 img-center" style={{ backgroundImage: 'url(front/images/interior/p-2.jpg)' }}></div>
                  <div className="recent-content"></div>
                  <div className="recent-details">
                    <div className="recent-title">Non-Ensuite</div>
                    <p>A self-contained flat housing everything you need in one room.</p>
                  </div>
                </a>
              </div>
            </div>
            {/* Repeat for other items */}
            <div className="agents-grid sneak-peek" data-aos="fade-up" data-aos-delay="150">
              <div className="landscapes listing-item compact thehp-2">
                <a href="#" className="recent-16" data-aos="fade-up">
                  <div className="recent-img16 img-fluid img-center" style={{ backgroundImage: 'url(front/images/interior/p-3.jpg)' }}></div>
                  <div className="recent-content"></div>
                  <div className="recent-details">
                    <div className="recent-title">On Ensuite</div>
                    <p>A self-contained flat housing everything you need in one room.</p>
                  </div>
                </a>
              </div>
            </div>
            {/* Add more divs for each room */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RoomsCarousel;
