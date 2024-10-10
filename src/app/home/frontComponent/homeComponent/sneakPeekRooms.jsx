"use client";

import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'jquery';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel'; 
//  import '../../../slick.min.js'

import $ from 'jquery';
import { baseUrl, loadScript } from '@/helper/helper';

const SneakPeekRooms = () => {


    useEffect(() => {
        // Initialize Slick carousel

 
            $('.slick-lancers').slick({
              infinite: false,
              slidesToShow: 5,
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
            });

            // Cleanup on component unmount
            return () => {
              if ($('.slick-lancers').slick) {
                $('.slick-lancers').slick('unslick');
              }
            };
            
    
        
      }, []);



    const roomData =[
        {
            image:'./front/images/interior/p-3.jpg',
            title:'Ensuite',
            description: 'A self-contained flat housing everything you need in one room.'
        },

        {
            image:'./front/images/interior/p-3.jpg',
            title:'Ensuite',
            description: 'A self-contained flat housing everything you need in one room.'
        }
    ];
  return (
    <section
  className="pt-6 recently portfolio bg-white-1 rec-pro"
  style={{ borderTop: "none" }}
>
  <div className="container-fluid">
    <div className="sec-title">
      <h2>
        <span>A Sneak Peek Into </span>Our Rooms
      </h2>
      <p>These are Our Rooms for rent</p>
    </div>
    <div className="p-0 portfolio col-xl-12">
      <div className="slick-lancers" >
        <div
          className="agents-grid sneak-peek"
          data-aos="fade-up"
          data-aos-delay={250}
        >
          <div className="people listing-item compact thehp-2">
            
            <a href="#" className="recent-16" data-aos="fade-up">
              <div
                className="recent-img16 img-center"
                style={{ backgroundImage: "url(front/images/interior/p-2.jpg)" }}
              />
              <div className="recent-content" />
              {/* <div className="listing-badges">
                                  <span>For Rent</span>
                              </div> */}
              <div className="recent-details">
                <div className="recent-title">Non-Ensuite</div>
                <p>
                  A self-contained flat housing everything you need in one room.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div
          className="agents-grid sneak-peek"
          data-aos="fade-up"
          data-aos-delay={150}
        >
          <div className="landscapes listing-item compact thehp-2">
            
            <a href="#" className="recent-16" data-aos="fade-up">
              <div
                className="recent-img16 img-fluid img-center"
                style={{ backgroundImage: "url(front/images/interior/p-3.jpg)" }}
              />
              <div className="recent-content" />
              <div className="recent-details">
                <div className="recent-title">On Ensuite</div>
                <p>
                  A self-contained flat housing everything you need in one room.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div
          className="agents-grid sneak-peek"
          data-aos="fade-up"
          data-aos-delay={150}
         >
          <div className="landscapes listing-item compact thehp-2">
            
            <a href="#" className="recent-16" data-aos="fade-up">
              <div
                className="recent-img16 img-fluid img-center"
                style={{ backgroundImage: "url(/front/images/interior/p-1.jpg)" }}
              />
              <div className="recent-content" />
              <div className="recent-details">
                <div className="recent-title">Studio Apartment </div>
                <p>
                  A self-contained flat housing everything you need in one room.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div
          className="agents-grid sneak-peek"
          data-aos="fade-up"
          data-aos-delay={250}
        >
          <div className="people listing-item compact thehp-2">
            
            <a href="#" className="recent-16" data-aos="fade-up">
              <div
                className="recent-img16 img-center"
                style={{ backgroundImage: "url(/front/images/interior/p-4.jpg)" }}
              />
              <div className="recent-content" />
              <div className="recent-details">
                <div className="recent-title">Private Apartments</div>
                <p>
                  A self-contained flat housing everything you need in one room.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div
          className="agents-grid sneak-peek"
          data-aos="fade-up"
          data-aos-delay={250}
        >
          <div className="people listing-item compact thehp-2">
            
            <a href="#" className="recent-16" data-aos="fade-up">
              <div
                className="recent-img16 img-center"
                style={{ backgroundImage: "url(/front/images/interior/p-2.jpg)" }}
              />
              <div className="recent-content" />
              {/* <div className="listing-badges">
                                  <span>For Rent</span>
                              </div> */}
              <div className="recent-details">
                <div className="recent-title">
                  More than one bedroom Apartment
                </div>
                <p>
                  A self-contained flat housing everything you need in one room.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}

export default SneakPeekRooms
