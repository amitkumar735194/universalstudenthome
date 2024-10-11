import { baseUrl } from '@/helper/helper'
import Image from 'next/image'
import React from 'react'

const LatestNewsSection = () => {
  return (
    <>
    <section className="bg-white blog-section home18">
<div className="container-fluid">
  <div className="sec-title">
    <h2>
      <span>Latest news &amp; </span>Articles
    </h2>
    <p>Latest News &amp; articles From the blog</p>
  </div>
  <div className="news-wrap">
    <div className="row">
      <div
        className="col-xl-4 col-md-6 col-xs-12 aos-init aos-animate"
        data-aos="zoom-in"
        data-aos-delay={150}
      >
        <div
          className="news-item aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={150}
        >
          
          <a href="#" className="news-img-link">
            <div className="news-item-img">
              
              <Image
                className="img-responsive"
                src={`${baseUrl}front/images/blog/blog-1.jpg`}
                alt="blog image"
                
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"
              />
            </div>
          </a>
          <div className="news-item-text">
            
            <a href="#">
              <h3>
                Indian Student: Hotwells House Bristol Student Accommodation
              </h3>
            </a>
            {/*  <div className="news-item-descr big-news">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur.</p>
                            </div>
                          <div className="news-item-bottom">
                                <a href="blog-details.html" className="news-link">Read more...</a>
                                <div className="admin">
                                    <p>By, Karl Smith</p>
                                    <img src="front/images/testimonials/ts-6.jpg" alt="">
                                </div>
                            </div> */}
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-md-6 col-xs-12 aos-init aos-animate"
        data-aos="zoom-in"
        data-aos-delay={150}
      >
        <div
          className="news-item aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={250}
        >
          
          <a href="#" className="news-img-link">
            <div className="news-item-img">
              
              <Image
                className="img-responsive"
                src={`${baseUrl}/front/images/blog/blog2.jpg`}
                alt="blog image" 
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"
              />
            </div>
          </a>
          <div className="news-item-text">
            
            <a href="#">
              <h3>
                Discover our Central London apartment shares, offering..
              </h3>
            </a>
          
                            </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-md-6 col-xs-12 aos-init aos-animate"
                            data-aos="zoom-in"
                            data-aos-delay={150}
                        >
                            <div
                            className="news-item no-mb aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={350}
                            >
                            
                            <a href="#" className="news-img-link">
                                <div className="news-item-img">
                                
                                <Image
                                    className="img-responsive"
                                    src={`${baseUrl}/front/images/blog/blog-3.jpg`}
                                    alt="blog image"
                                     
                                    layout="fill"  
                                  objectFit="cover"  
                                  sizes="100vw"
                                />
                                </div>
                            </a>
                            <div className="news-item-text">
                                
                                <a href="#">
                                <h3>
                                    Highest Paying Jobs In CANADA For International Students …
                                </h3>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </section>

  </>
  )
}

export default LatestNewsSection
