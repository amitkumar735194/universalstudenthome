"use client";
import { baseUrl } from '@/helper/helper';
import Image from 'next/image';
import React, { useEffect, useLayoutEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/owl.carousel.min.js'; // Import Owl Carousel plugin
// import 'owl.carousel/dist/assets/owl.carousel.min.css';

// import dynamic from “next/dynamic”;


const WhatStudentsSaySection = () => {

    // const OwlCarousel = dynamic(() => import(“react-owl-carousel”), {
    //     ssr: false,
    //   }); 

    useLayoutEffect(()=>{
        const loadScript = (src) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
          };
          loadScript('./front/js/jquery-3.4.1.min.js');
    },[])

    const options = {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1,
                margin: 20
            },
            500: {
                items: 1,
                margin: 20
            },
            768: {
                items: 2,
                margin: 20
            },
            991: {
                items: 2,
                margin: 20
            },
            1025: {
                items: 3,
                margin: 20
            }
        }
    };
    


  return (
    <>

<section className="h18 testimonials">
  <div className="container-fluid">
    <div className="sec-title">
      <h2>
        <span>What Students </span> Say
      </h2>
      <p>
        There are many variations of lorem of Lorem Ipsum available for use a
        sit amet, consectetur debits adipisicing lacus.
      </p>
    </div>
    <OwlCarousel className="owl-carousel style1" {...options}>
      <div className="single-testimonial" data-aos="zoom-in" aos-delay={150}>
        <div className="client-comment">
          <p>
            Lorem ipsum dolor sit amet, luctus posuere semper felis consectetuer
            hendrerit, enim varius enim, tellus tincidunt tellus est sed
          </p>
        </div>
        <div className="clinet-inner">
          <div className="client-thumb">
            
            <img src={`${baseUrl}/front/images/testimonials/ts-1.jpg`} alt="" 
              
              />
          </div>
          <div className="client-info">
            <h2>Lisa Smith</h2>
            <span>New York City</span>
            <div className="client-reviews">
              
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="single-testimonial"
        data-aos="zoom-in"
        data-aos-delay={250}
      >
        <div className="client-comment">
          <p>
            Lorem ipsum dolor sit amet, luctus posuere semper felis consectetuer
            hendrerit, enim varius enim, tellus tincidunt tellus est sed
          </p>
        </div>
        <div className="clinet-inner">
          <div className="client-thumb">
            
            <img src={`${baseUrl}/front/images/testimonials/ts-2.jpg`}  
             alt="image"
             />
          </div>
          <div className="client-info">
            <h2>Jhon Morris</h2>
            <span>Los Angeles</span>
            <div className="client-reviews">
              
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star-half-empty" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="single-testimonial"
        data-aos="zoom-in"
        data-aos-delay={350}
      >
        <div className="client-comment">
          <p>
            Lorem ipsum dolor sit amet, luctus posuere semper felis consectetuer
            hendrerit, enim varius enim, tellus tincidunt tellus est sed
          </p>
        </div>
        <div className="clinet-inner">
          <div className="client-thumb">
            
            <img src={`${baseUrl}/front/images/testimonials/ts-3.jpg`} alt="" 
           />
          </div>
          <div className="client-info">
            <h2>Mary Deshaw</h2>
            <span>Chicago</span>
            <div className="client-reviews">
              
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="single-testimonial"
        data-aos="zoom-in"
        data-aos-delay={450}
      >
        <div className="client-comment">
          <p>
            Lorem ipsum dolor sit amet, luctus posuere semper felis consectetuer
            hendrerit, enim varius enim, tellus tincidunt tellus est sed
          </p>
        </div>
        <div className="clinet-inner">
          <div className="client-thumb">
            
            <img src={`${baseUrl}/front/images/testimonials/ts-4.jpg`} alt="" 
              
              
           />
          </div>
          <div className="client-info">
            <h2>Gary Steven</h2>
            <span>Philadelphia</span>
            <div className="client-reviews">
              
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star-half-empty" />
            </div>
          </div>
        </div>
      </div>
      <div className="single-testimonial" data-aos="zoom-in">
        <div className="client-comment">
          <p>
            Lorem ipsum dolor sit amet, luctus posuere semper felis consectetuer
            hendrerit, enim varius enim, tellus tincidunt tellus est sed
          </p>
        </div>
        <div className="clinet-inner">
          <div className="client-thumb">
            
            <img src={`${baseUrl}/front/images/testimonials/ts-5.jpg`} alt="" 
              
              />
          </div>
          <div className="client-info">
            <h2>Cristy Mayer</h2>
            <span>San Francisco</span>
            <div className="client-reviews">
              
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
      <div className="single-testimonial" data-aos="zoom-in">
        <div className="client-comment">
          <p>
            Lorem ipsum dolor sit amet, luctus posuere semper felis consectetuer
            hendrerit, enim varius enim, tellus tincidunt tellus est sed
          </p>
        </div>
        <div className="clinet-inner">
          <div className="client-thumb">
            
            <img src={`${baseUrl}/front/images/testimonials/ts-6.jpg`} alt="" 
             
             />
          </div>
          <div className="client-info">
            <h2>Ichiro Tasaka</h2>
            <span>Houston</span>
            <div className="client-reviews">
              
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star" /> <i className="fa fa-star" />
              <i className="fa fa-star-half-empty" />
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  </div>
</section>

 
  

    </>
  )
}

export default WhatStudentsSaySection
