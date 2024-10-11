"use client"
import React, {useEffect} from 'react'
import PropertyGrid from './property_grid'
import { baseUrl } from '@/helper/helper'
import Link from 'next/link' 
import Image from 'next/image'

const PropertyListSection = ({property, selectedPropertyType}) => {

 
  return (
    <div id={`tab-one${property._id}-panel`} className={`panel active`} style={{display:`${selectedPropertyType==property._id?'block':'none'}`}}>
    {/* <div className="campus">Select Campus</div> */}
    <div className="tabs2">
      <input type="radio" name="tab" id="tab1" role="tab" defaultChecked="true" />
      {/* <label htmlFor="tab1" id="tab1-label"> */}
        {/* Denmark Hill Campus */}
      {/* </label> */}
      <section aria-labelledby="tab1-label" style={{display:'block'}}>
        <div className="row">
            {property && property.properties.map((item, index)=>( 
                        <PropertyGrid key={index} data={item}/> 
            ))}
          {/* <div className="col-lg-4">
            <div className="agents-grid" data-aos="fade-up" data-aos-delay={150} >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <div className="carousel">
                          <button
                            className="slider-button slider-button-prev"
                            data-slide-direction="prev"
                          >
                            ←
                          </button>
                          <button
                            className="slider-button slider-button-next"
                            data-slide-direction="next"
                          >
                            →
                          </button>
                          <ul className="slides">
                            <li className="slide" data-active-slide="">
                              
                              <Image
                                src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                                alt="image"
                                layout="fill"  
                              objectFit="cover"  
                              sizes="100vw"
                                className="img-responsive"
                              />
                            </li>
                            <li className="slide">
                              
                              <Image
                                src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                                alt="image"
                                layout="fill"  
                              objectFit="cover"  
                              sizes="100vw"
                                className="img-responsive"
                              />
                            </li>
                          </ul>
                          <div className="slides-circles">
                            <div data-active-slide="" />
                            <div />
                            <div />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                     
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Vita Student Lewisham Exchange
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare ">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        
        </div>
        <div className="row align-items-center">
          {/* <div className="col-lg-6">
            Showing 13 - 24 properties out of 216
          </div>
          <div className="col-lg-6">
            <nav aria-label="..." className="agents">
              <ul className="pagination disabled">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1}>
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </section>
      {/* Tab 2 & Content */}
      <input type="radio" name="tab" id="tab2" role="tab" />
      {/* <label htmlFor="tab2" id="tab2-label">  */}
        {/* Guy's Campus */}
      {/* </label> */}
      <section aria-labelledby="tab2-label">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <div className="carousel">
                          <button
                            className="slider-button slider-button-prev"
                            data-slide-direction="prev"
                          >
                            ←
                          </button>
                          <button
                            className="slider-button slider-button-next"
                            data-slide-direction="next"
                          >
                            →
                          </button>
                          <ul className="slides">
                            <li className="slide" data-active-slide="">
                              
                              <Image
                                src={`${baseUrl}/front/images/feature-properties/03.jpg`}
                                alt="home-1"
                                className="img-responsive"
                                
                                layout="fill"  
                              objectFit="cover"  
                              sizes="100vw"
                              />
                            </li>
                            <li className="slide">
                              
                              <Image
                                src={`${baseUrl}/front/images/feature-properties/04`}
                                alt="home-1"
                                className="img-responsive"
                                
                                layout="fill"  
                              objectFit="cover"  
                              sizes="100vw"
                              />
                            </li>
                          </ul>
                          <div className="slides-circles">
                            <div data-active-slide="" />
                            <div />
                            <div />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      {/*    <a href="#" className="btn popup-video popup-youtube"><i className="fas fa-video"></i></a> */}
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Vita Student Lewisham Exchange
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    {/* Price */}
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare ">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <Image
                          src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                          alt="home-1"
                          className="img-responsive"
                         
                          layout="fill"  
                        objectFit="cover"  
                        sizes="100vw"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Chapter Islington
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <Image
                          src={`${baseUrl}/front/images/feature-properties/03.jpg`}
                          alt="home-1"
                          className="img-responsive"
                          
                          layout="fill"  
                        objectFit="cover"  
                        sizes="100vw"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Hackney Wick Park Residence
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    {/* Price */}
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <Image
                          src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                          alt="home-1"
                          className="img-responsive"
                          
                          layout="fill"  
                        objectFit="cover"  
                        sizes="100vw"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Hackney Wick Park Residence
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <Image
                          src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                          alt="home-1"
                          className="img-responsive"
                          
                          layout="fill"  
                        objectFit="cover"  
                        sizes="100vw"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      {/*    <a href="#" className="btn popup-video popup-youtube"><i className="fas fa-video"></i></a> */}
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Vita Student Lewisham Exchange
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    {/* Price */}
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <Image
                          src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                          alt="home-1"
                          className="img-responsive"
                         
                          layout="fill"  
                        objectFit="cover"  
                        sizes="100vw"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Chapter Islington
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <Image
                          src={`${baseUrl}/front/images/feature-properties/03.jpg`}
                          alt="home-1"
                          className="img-responsive"
                           
                          layout="fill"  
                        objectFit="cover"  
                        sizes="100vw"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Hackney Wick Park Residence
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    {/* Price */}
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <Image
                          src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                          alt="home-1"
                          className="img-responsive"
                           
                          layout="fill"  
                        objectFit="cover"  
                        sizes="100vw"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Hackney Wick Park Residence
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <Image
                          src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                          alt="home-1"
                          className="img-responsive"
                         
                          layout="fill"  
                        objectFit="cover"  
                        sizes="100vw"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      {/*    <a href="#" className="btn popup-video popup-youtube"><i className="fas fa-video"></i></a> */}
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Vita Student Lewisham Exchange
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    {/* Price */}
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <Image
                          src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                          alt="home-1"
                          className="img-responsive"
                          
                          layout="fill"  
                        objectFit="cover"  
                        sizes="100vw"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Chapter Islington
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <Image
                          src={`${baseUrl}/front/images/feature-properties/03.jpg`}
                          alt="home-1"
                          className="img-responsive"
                          
                          layout="fill"  
                        objectFit="cover"  
                        sizes="100vw"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Hackney Wick Park Residence
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    {/* Price */}
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="agents-grid"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="#" className="homes-img">
                        <div className="homes-tag button sale rent">
                          Offer upto £50
                        </div>
                        <div className="homes-price">
                          <i
                            className="fa fa-rocket"
                            aria-hidden="true"
                          />
                          Filling Fast
                        </div>
                        <Image
                          src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                          alt="home-1"
                          className="img-responsive"
                          
                          layout="fill"  
                        objectFit="cover"  
                        sizes="100vw"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      
                      <a href="#" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a href="#" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  <div className="homes-content">
                    <h3>
                      <Link href="/home/p/london">
                        Hackney Wick Park Residence
                      </Link>
                    </h3>
                    <p>
                      <Link href="/home/p/london">
                        
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry
                      </Link>
                    </p>
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="#">
                          <span>From</span> £137
                        </a>
                      </h3>
                      <div className="compare">
                        
                        <a
                          href="#"
                          className="enquire_now show-reg-form modal-open"
                        >
                          
                          Enquire Now
                        </a>
                        <a href="#" title="Share">
                          
                          <i className="fas fa-share-alt" />
                        </a>
                        <a href="#" title="Favorites">
                          
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            Showing 13 - 24 properties out of 216
          </div>
          <div className="col-lg-6">
            <nav aria-label="..." className="agents">
              <ul className="pagination disabled">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1}>
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default PropertyListSection
