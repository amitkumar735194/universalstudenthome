import Link from 'next/link'
import React from 'react'
import InquiryModel from './components/inquiryModel'
 
import styled from 'styled-components';
import { baseUrl } from '@/helper/helper';
import Image from 'next/image';

const PropertyList = () => {
  return (
    <>
      <div class="clearfix"></div> 
        <section class="breadcrumb">
            <div class="container-fluid"> 
                <ul class="breadcrumb2">
                <li><Link href="/">Home</Link></li>
                <li><a href="#">United Kingdom</a></li>
                <li class="active">Student Accommodation London</li>
                </ul> 
            </div>
        </section>


        
  <section
    className="bg-white recently portfolio homepage-9"
    style={{ paddingTop: 20 }}
  >
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <div className="inner-pages">
            <div className="sec-title">
              <h2>
                <i className="pr-2 fa fa-map-marker ti-location-pin mrg-r-5" />
                <span>Student Accommodation </span> London
              </h2>
              <div className="font-light2">
                <i className="fa fa-home" /> 150 Places to Stay
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group location">
            <div className="nice-select form-control wide" tabIndex={0}>
              
              <div className="current" style={{overflow:'hidden'}}>Select University</div>
              <ul className="list">
                <li data-value={1} className="option selected focus">
                  
                  <i className="fa fa-graduation-cap" /> King&apos;s College London
                  (KCl) <span>London, United Kingdom</span>
                </li>
                <li data-value={2} className="option">
                  
                  <i className="fa fa-graduation-cap" />
                  University College London (UCL)
                  <span>London, United Kingdom</span>
                </li>
                <li data-value={3} className="option">
                  <i className="fa fa-graduation-cap" />
                  University of Westminster <span>London, United Kingdom</span>
                </li>
                <li data-value={3} className="option">
                  <i className="fa fa-graduation-cap" />
                  University of East London <span>London, United Kingdom</span>
                </li>
                <li data-value={3} className="option">
                  <i className="fa fa-graduation-cap" />
                  Queen Mary University of London (QMUL)
                  <span>London, United Kingdom</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-1">
          <div className="filter2">
            <a href="#">
              <i className="pr-2 fas fa-align-left fs-16" />
              Filter
            </a>
          </div>
        </div>
      </div>
      <div className="worko-tabs">
        <input
          className="state"
          type="radio"
          title="tab-one"
          name="tabs-state"
          id="tab-one"
          defaultChecked=""
        />
        <input
          className="state"
          type="radio"
          title="tab-two"
          name="tabs-state"
          id="tab-two"
        />
        <input
          className="state"
          type="radio"
          title="tab-three"
          name="tabs-state"
          id="tab-three"
        />
        <input
          className="state"
          type="radio"
          title="tab-four"
          name="tabs-state"
          id="tab-four"
        />
        <div className="tabs flex-tabs">
          <label htmlFor="tab-one" id="tab-one-label" className="tab">
            Student Housing
          </label>
          <label htmlFor="tab-two" id="tab-two-label" className="tab">
            Private Apartment
          </label>
          {/*  <label for="tab-three" id="tab-three-label" class="tab">Home Stays</label> */}
          <div id="tab-one-panel" className="panel active">
            <div className="campus">Select Campus</div>
            <div className="tabs2">
              <input
                type="radio"
                name="tab"
                id="tab1"
                role="tab"
                defaultChecked=""
              />
              <label htmlFor="tab1" id="tab1-label">
                Denmark Hill Campus
              </label>
              <section aria-labelledby="tab1-label">
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
                                        src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                                        alt="home-1"
                                        className="img-responsive"
                                      
                                        layout="fill"  
                                      objectFit="cover"  
                                      sizes="100vw"
                                      />
                                    </li>
                                    <li className="slide">
                                      
                                      <Image
                                        src="front/images/feature-properties/02.jpg"
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
                              {/*    <a href="#" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a> */}
                              <a href="#" className="img-poppu btn">
                                <i className="fa fa-photo" />
                              </a>
                            </div>
                          </div>
                          {/* homes content */}
                          <div className="homes-content">
                            <h3>
                              <a href="london-details.html">
                                Vita Student Lewisham Exchange
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/02.jpg"
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
                              <a href="london-details.html">
                                Chapter Islington
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/03.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/04.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/01.jpg"
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
                              {/*    <a href="#" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a> */}
                              <a href="#" className="img-poppu btn">
                                <i className="fa fa-photo" />
                              </a>
                            </div>
                          </div>
                          {/* homes content */}
                          <div className="homes-content">
                            <h3>
                              <a href="london-details.html">
                                Vita Student Lewisham Exchange
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/02.jpg"
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
                              <a href="london-details.html">
                                Chapter Islington
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/03.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/04.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/01.jpg"
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
                              {/*    <a href="#" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a> */}
                              <a href="#" className="img-poppu btn">
                                <i className="fa fa-photo" />
                              </a>
                            </div>
                          </div>
                          {/* homes content */}
                          <div className="homes-content">
                            <h3>
                              <a href="london-details.html">
                                Vita Student Lewisham Exchange
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/02.jpg"
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
                              <a href="london-details.html">
                                Chapter Islington
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/03.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/04.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
              {/* Tab 2 & Content */}
              <input type="radio" name="tab" id="tab2" role="tab" />
              <label htmlFor="tab2" id="tab2-label">
                Guy&apos;s Campus
              </label>
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
                                        src="front/images/feature-properties/03.jpg"
                                        alt="home-1"
                                        className="img-responsive"
                                         
                                        layout="fill"  
                                      objectFit="cover"  
                                      sizes="100vw"
                                      />
                                    </li>
                                    <li className="slide">
                                      
                                      <Image
                                        src="front/images/feature-properties/04.jpg"
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
                              {/*    <a href="#" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a> */}
                              <a href="#" className="img-poppu btn">
                                <i className="fa fa-photo" />
                              </a>
                            </div>
                          </div>
                          {/* homes content */}
                          <div className="homes-content">
                            <h3>
                              <a href="london-details.html">
                                Vita Student Lewisham Exchange
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/02.jpg"
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
                              <a href="london-details.html">
                                Chapter Islington
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/03.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/04.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/01.jpg"
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
                              {/*    <a href="#" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a> */}
                              <a href="#" className="img-poppu btn">
                                <i className="fa fa-photo" />
                              </a>
                            </div>
                          </div>
                          {/* homes content */}
                          <div className="homes-content">
                            <h3>
                              <a href="london-details.html">
                                Vita Student Lewisham Exchange
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/02.jpg"
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
                              <a href="london-details.html">
                                Chapter Islington
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/03.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/04.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/01.jpg"
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
                              {/*    <a href="#" class="btn popup-video popup-youtube"><i class="fas fa-video"></i></a> */}
                              <a href="#" className="img-poppu btn">
                                <i className="fa fa-photo" />
                              </a>
                            </div>
                          </div>
                          {/* homes content */}
                          <div className="homes-content">
                            <h3>
                              <a href="london-details.html">
                                Vita Student Lewisham Exchange
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/02.jpg"
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
                              <a href="london-details.html">
                                Chapter Islington
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/03.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
                                  src="front/images/feature-properties/04.jpg"
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
                              <a href="london-details.html">
                                Hackney Wick Park Residence
                              </a>
                            </h3>
                            <p>
                              <a href="london-details.html">
                                
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </a>
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
          <div id="tab-two-panel" className="panel">
            Private Apartment
          </div>
          {/*  <div id="tab-three-panel" class="panel">
     Home Stays
  </div> */}
        </div>
      </div>
    </div>
  </section>
  <div className="container-fluid">
    <div className="shadow-lg mb_50 box_2">
      <div className="sec-title">
        <h2>
          <span>Drop us a</span> line
        </h2>
      </div>
      {/* <div class="text-center drop">Drop us a line</div> */}
      <div className="agent-contact-form-sidebar">
        <form name="contact_form" method="" action="">
          <div className="row">
            <div className="col-lg-4">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                required=""
              />
            </div>
            {/*  <div class="col-lg-4"><input type="text" name="last-name" placeholder="Last Name"></div> */}
            <div className="col-lg-4">
              {/*  <input type="number" name="phone_number" placeholder="Phone Number" value="+91 "> */}
              <input
                type="text"
                id="mobile_code"
                placeholder="Phone Number"
                name="name"
              />
            </div>
            <div className="col-lg-4">
              <input
                type="email"
                name="email_address"
                placeholder="Email Address"
              />
            </div>
            <div className="col-lg-4">
              <select className="select" style={{ display: "none" }}>
                <option>Select Nationality</option>
                <option value="indian">Indian</option>
                <option value="british">British</option>
                <option value="chinese">Chinese</option>
                <option value="irish">Irish</option>
                <option value="nigerien">Nigerien</option>
                <optgroup label="OTHER NATIONALITIES" />
                <option value="afghan">Afghan</option>
                <option value="albanian">Albanian</option>
                <option value="algerian">Algerian</option>
                <option value="american">American</option>
                <option value="andorran">Andorran</option>
              </select>
            </div>
            <div className="col-lg-4">
              <div className="nice-select select" tabIndex={0}>
                <span className="current">Select Nationality</span>
                <ul className="list">
                  <li
                    data-value="Select Nationality"
                    className="option selected focus"
                  >
                    Select Nationality
                  </li>
                  <li data-value="indian" className="option">
                    Indian
                  </li>
                  <li data-value="british" className="option">
                    British
                  </li>
                  <li data-value="chinese" className="option">
                    Chinese
                  </li>
                  <li data-value="irish" className="option">
                    Irish
                  </li>
                  <li data-value="nigerien" className="option">
                    Nigerien
                  </li>
                  <li data-value="afghan" className="option">
                    Afghan
                  </li>
                  <li data-value="albanian" className="option">
                    Albanian
                  </li>
                  <li data-value="algerian" className="option">
                    Algerian
                  </li>
                  <li data-value="american" className="option">
                    American
                  </li>
                  <li data-value="andorran" className="option">
                    Andorran
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group location">
                <div className="nice-select form-control wide" tabIndex={0}>
                  
                  <span className="current">Select University</span>
                  <ul className="list">
                    <li data-value={1} className="option selected focus">
                      
                      <i className="fa fa-graduation-cap" /> Kin&apos;s College
                      London (KCl) <span>London, United Kingdom</span>
                    </li>
                    <li data-value={2} className="option">
                      
                      <i className="fa fa-graduation-cap" />
                      University College London (UCL)
                      <span>London, United Kingdom</span>
                    </li>
                    <li data-value={3} className="option">
                      <i className="fa fa-graduation-cap" />
                      University of Westminster
                      <span>London, United Kingdom</span>
                    </li>
                    <li data-value={3} className="option">
                      <i className="fa fa-graduation-cap" />
                      University of East London
                      <span>London, United Kingdom</span>
                    </li>
                    <li data-value={3} className="option">
                      <i className="fa fa-graduation-cap" />
                      Queen Mary University of London (QMUL)
                      <span>London, United Kingdom</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <textarea
                placeholder="Message"
                name="message"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="col-lg-12">
              <p className="not">
                By submitting, you agree to our <a href="#">Privacy Policy</a>
                and <a href="#">Terms &amp; Conditions</a>
              </p>
            </div>
            <div className="col-lg-12">
              <div className="text-center update_on">
                Get updates on <i className="fa fa-whatsapp" /> WhatsApp
                <button
                  type="button"
                  className="btn btn-xs btn-toggle active"
                  data-toggle="button"
                  aria-pressed="true"
                  autoComplete="off"
                >
                  <div className="handle" />
                </button>
              </div>
            </div>
            <div className="col-lg-2 offset-5">
              <input
                type="submit"
                name="sendmessage"
                className="multiple-send-message"
                defaultValue="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* START SECTION INFO-HELP */}
  <section className="info-help h18">
    <div className="container">
      <div className="sec-title">
        <h2>
          <span>Why Students loved to book their Accomodation </span>with us
        </h2>
        <p>
          Discover Convenience, Comfort, and Community at Our Proximity-Centric
          Living Spaces.
        </p>
      </div>
    </div>
  </section>
  {/* END SECTION INFO-HELP */}
  {/* START SECTION INFO */}
  <section className="featured-boxes-area bg-white-1">
    <div className="container-fluid">
      <div className="featured-boxes-inner">
        <div className="m-0 row">
          <div
            className="p-0 col-lg-3 col-sm-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay={250}
          >
            <div className="single-featured-box">
              <div className="icon color-fb7756">
                <Image src="front/images/icons/comfort.jpg"  
                  alt="image"
                  layout="fill"  
                objectFit="cover"  
                sizes="100vw"/>
              </div>
              <h3 className="mt-5">Excellence in Comfort</h3>
              <p _ngcontent-bgi-c3="">
                Experience superior living with our cozy accommodations,
                providing comfort and tranquility for focused academic success.
              </p>
            </div>
          </div>
          <div
            className="p-0 col-lg-3 col-sm-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay={350}
          >
            <div className="single-featured-box">
              <div className="icon color-facd60">
                <Image src="front/images/icons/redefine.jpg" 
                  alt="image"
                  layout="fill"  
                objectFit="cover"  
                sizes="100vw"/>
              </div>
              <h3 className="mt-5">Proximity Redefined</h3>
              <p _ngcontent-bgi-c3="">
                Unbeatable proximity to top universities ensures convenient
                access, saving you time and enhancing your overall campus living
                experience.
              </p>
            </div>
          </div>
          <div
            className="p-0 col-lg-3 col-sm-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay={450}
          >
            <div className="single-featured-box">
              <div className="icon color-1ac0c6">
                <Image src="front/images/icons/safe_acommodation.jpg" 
                  alt="image"
                  layout="fill"  
                objectFit="cover"  
                sizes="100vw"/>
              </div>
              <h3 className="mt-5">Trusted &amp; Safe Accommodation</h3>
              <p _ngcontent-bgi-c3="">
                Discover peace of mind with our trusted and safe accommodations.
                Your safety and comfort are our top priorities.
              </p>
            </div>
          </div>
          <div
            className="p-0 col-lg-3 col-sm-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay={550}
          >
            <div className="single-featured-box">
              <div className="icon">
                <Image src="front/images/icons/contact.jpg"  
                  alt="image"
                  layout="fill"  
                objectFit="cover"  
                sizes="100vw"/>
              </div>
              <h3 className="mt-5">24/7 Support</h3>
              <p _ngcontent-bgi-c3="">
                Our commitment goes beyond just providing a room. Enjoy peace of
                mind with our 24/7 support hub, ensuring your comfort
              </p>
              {/* <a class="read-more-btn" href="#">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END SECTION INFO */}
  <section className="mb_50">
    <div className="container-fluid">
      {/* For demo purpose */}
      <div className="py-5 row">
        <div className="mx-auto text-center col-lg-12">
          <h1 className="display-4">Frequently Asked Questions</h1>
          <p className="mb-0 lead">
            Check out these answers to common questions and go to
            <a href="#">Help Centre</a> for more details.
          </p>
        </div>
      </div>
      {/* End */}
      {/* Accordion */}
      <div id="accordionExample" className="accordion">
        <div className="row">
          <div className="col-lg-6">
            {/* Accordion item 1 */}
            <div className="card">
              <div
                id="headingOne"
                className="bg-white border-0 shadow-sm card-header"
              >
                <h2>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    className="btn btn-link collapsed collapsible-link"
                  >
                    Q. What is the cancellation process of My Booking?
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <p>
                    A. The Cancellation policies may differ among properties.
                    Should you wish to cancel your booking, it must align with
                    the terms and conditions of the specific premises, requiring
                    approval from your property manager. For optimal guidance,
                    don’t hesitate to contact our care team at
                    care@universalstudenthomes.com. Q13
                  </p>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Accordion item 2 */}
            <div className="card">
              <div
                id="headingTwo"
                className="bg-white border-0 shadow-sm card-header"
              >
                <h2>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    className="btn btn-link collapsed collapsible-link"
                  >
                    Q. Can I book Private Student apartment with Universal
                    Student Homes?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <p>
                    A. Universal Student Homes offers private accommodation with
                    a range of room types, including shared, En-suite, and
                    studio apartments. To inquire about these options, please
                    send an email to hello@universalstudenthomes.com. Our
                    booking experts will promptly connect with you to provide
                    assistance.
                  </p>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Accordion item 3 */}
            <div className="card">
              <div
                id="headingThree"
                className="bg-white border-0 shadow-sm card-header"
              >
                <h2>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    className="btn btn-link collapsed collapsible-link"
                  >
                    Q. How can I ensure that my accommodation is safe and
                    secure?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <p>
                    A. All properties listed on Universal Student Homes are
                    thoroughly verified and recommended for a safe and secure
                    student life. Our existing students provide positive
                    feedback, and the accommodations are equipped with CCTV
                    surveillance, on-site staff presence, and regular CCTV
                    checks to enhance security measures.
                  </p>
                </div>
              </div>
            </div>
            {/* End */}
          </div>
          {/* End */}
          <div className="col-lg-6">
            {/* Accordion item 1 */}
            <div className="card">
              <div
                id="headingFour"
                className="bg-white border-0 shadow-sm card-header"
              >
                <h2>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                    className="btn btn-link collapsed collapsible-link"
                  >
                    Q. What is “No Visa, No Pay” Policy?
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <p>
                    A. The “No Visa, No Pay” policy is a provision commonly
                    offered by certain accommodation providers, especially in
                    the context of student housing. This policy is designed to
                    provide flexibility to international students who may face
                    challenges obtaining a visa to study in a particular
                    country. Here’s how the “No Visa, No Pay” policy typically
                    works:
                  </p>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Accordion item 2 */}
            <div className="card">
              <div
                id="headingFive"
                className="bg-white border-0 shadow-sm card-header"
              >
                <h2>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                    className="btn btn-link collapsed collapsible-link"
                  >
                    Q. Do I need renters insurance?
                  </button>
                </h2>
              </div>
              <div
                id="collapseFive"
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <p>
                    A. Yes, all the tenants need to have renters insurance
                    before moving in. You have to show a renters’ insurance
                    confirmation before getting the keys.
                  </p>
                </div>
              </div>
            </div>
            {/* End */}
            {/* Accordion item 3 */}
            <div className="card">
              <div
                id="headingSix"
                className="bg-white border-0 shadow-sm card-header"
              >
                <h2>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                    className="btn btn-link collapsed collapsible-link"
                  >
                    Q. When do you increase the rent?
                  </button>
                </h2>
              </div>
              <div
                id="collapseSix"
                aria-labelledby="headingSix"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <p>
                    A. Rent increases usually happen after the lease term
                    expiration. Of course, it isn’t always increased. Our
                    analysis accounts for the property owner’s requests and
                    relevant market conditions.
                  </p>
                </div>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
        {/* End */}
      </div>
    </div>

    <InquiryModel />
  </section>
 


    </>
  )
}

export default PropertyList
