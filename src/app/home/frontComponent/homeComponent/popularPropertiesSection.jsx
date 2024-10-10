import React from 'react'
import PopularProperty from './popularProperty'
import Image from 'next/image'
import { baseUrl } from '@/helper/helper'

const PopularPropertiesSection = () => {
  return (
    <>
      <section className="recently portfolio homepage-9 bg-white-2">
  <div className="container-fluid">
    <div className="sec-title">
      <h2>
        <span>Popular </span>Properties
      </h2>
      <p>Find your dream home from our Rent added properties.</p>
    </div>
    {/* Nav tabs */}
    <div className="scrtabs-tab-container" style={{ visibility: "visible" }}>
      <div
        className="scrtabs-tab-scroll-arrow scrtabs-tab-scroll-arrow-left scrtabs-disable"
        style={{}}
      >
        
        <span className="" />
      </div>
      <div
        className="scrtabs-tabs-fixed-container"
        style={{ width: "1382.85px" }}
      >
        <div
          className="scrtabs-tabs-movable-container"
          style={{ width: "1382.85px" }}
        >
          <ul className="nav nav-tabs expanded" role="tablist">
            <li className="nav-item current">
              <a
                className="nav-link active"
                href="#tab1"
                role="tab"
                data-toggle="tab"
                aria-selected="true"
              >
                <span>
                  <img src={`${baseUrl}/front/images/flag/uk.jpg`} 
                  alt="image"
                  width={16} // Aspect ratio width
                  height={9} // Aspect ratio height
                  
                />
                  UK
                </span>
              </a>
            </li>
            <li className="nav-item current">
              
              <a
                className="nav-link"
                href="#tab2"
                role="tab"
                data-toggle="tab"
                aria-selected="false"
              >
                <span>
                  <img src={`${baseUrl}/front/images/flag/aus.jpg`} alt="image"
                    
                    width={16}  
                    height={9}  
                    
                    />
                  AUS
                </span>
              </a>
            </li>
            <li className="nav-item current">
              <a className="nav-link" href="#tab3" role="tab" data-toggle="tab">
                <span>
                  <img src={`${baseUrl}/front/images/flag/irl.jpg`} 
                  alt="image"
                  width={16} // Aspect ratio width
                  height={9} // Aspect ratio height
                 
                  />
                  IRL
                </span>
              </a>
            </li>
            <li className="nav-item current">
              <a
                className="nav-link"
                href="#tab4"
                role="tab"
                data-toggle="tab"
                aria-selected="false"
              >
                <span>
                  <img src={`${baseUrl}/front/images/flag/can.jpg`} 
                  alt="image"
                  width={16} // Aspect ratio width
                  height={9} // Aspect ratio height
                />
                  CAN
                </span>
              </a>
            </li>
            <li className="nav-item current">
              <a
                className="nav-link"
                href="#tab5"
                role="tab"
                data-toggle="tab"
                aria-selected="false"
              >
                <span>
                  
                  <img src={`${baseUrl}/front/images/flag/usa.jpg `} alt="image"
             width={16}  
             height={9}/>
                  USA
                </span>
              </a>
            </li>
            <li className="nav-item current">
              <a
                className="nav-link"
                href="#tab6"
                role="tab"
                data-toggle="tab"
                aria-selected="false"
              >
                <span>
                  <img src={`${baseUrl}/front/images/flag/ger.jpg `} alt="image"
              width={16}  
              height={9} />
                  GER
                </span>
              </a>
            </li>
            <li className="nav-item current">
              <a
                className="nav-link"
                href="#tab7"
                role="tab"
                data-toggle="tab"
                aria-selected="false"
              >
                <span>
                  <img src={`${baseUrl}/front/images/flag/ita.jpg `} 
                  alt="image"
                  width={16}  
                  height={9}/>
                  ITA
                </span>
              </a>
            </li>
            <li className="nav-item current">
              <a
                className="nav-link"
                href="#tab8"
                role="tab"
                data-toggle="tab"
                aria-selected="false"
              >
                <span>
                  <img src={`${baseUrl}/front/images/flag/prt.jpg `} 
                  alt="image"
                  width={16}  
                    height={9}/>
                  PRT
                </span>
              </a>
            </li>
            <li className="nav-item current">
              <a
                className="nav-link"
                href="#tab9"
                role="tab"
                data-toggle="tab"
                aria-selected="false"
              >
                <span>
                  <img src={`${baseUrl}/front/images/flag/esp.jpg `} 
                  alt="image"
                  width={16}  
                    height={9}/>
                  ESP
                </span>
              </a>
            </li>
            <li className="nav-item current">
              <a
                className="nav-link"
                href="#tab10"
                role="tab"
                data-toggle="tab"
                aria-selected="false"
              >
                <span>
                  <img src={`${baseUrl}/front/images/flag/era.jpg `} alt="image"
              width={16}  
              height={9}/>
                  ERA
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="scrtabs-tab-scroll-arrow scrtabs-tab-scroll-arrow-right scrtabs-disable"
        style={{}}
      >
        
        <span className="" />
      </div>
    </div>
    {/* Tab panes */}
    <div className="tab-content">

        {/* <PopularProperty tab={`tab1`} /> */}
      {/* 1st-tab-section-open */}
      <div role="tabpanel" className="tab-pane fade active show" id="tab1">
        <div className="tabs-container">
          <nav className="tabs">
            <ul className="expanded">
              <li className="current active" data-tab="tab-1">
                London
              </li>
              <li data-tab="tab-2" className="current">
                Birmingham
              </li>
              <li data-tab="tab-3" className="current">
                Cardiff
              </li>
              <li data-tab="tab-4" className="current">
                Nottingham
              </li>
              <li data-tab="tab-5" className="current">
                Sheffield
              </li>
            </ul>
          </nav>
        </div>
        <div id="tab-1" className="tab-content2 current">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Vita Student Lewisham Exchange</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                          {/*  <a href="#" title="Compare">
                                                          <i className="fas fa-exchange-alt"></i>
                                                      </a> */}
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                               
                              
                            
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
                        <a href="#">Chapter Islington</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/03.jpg`}
                            alt="home-1"
                            className="img-responsive"
                             
                               
                              
                            
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                             
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                               
                              
                            
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/05.jpg`}
                            alt="home-1"
                            className="img-responsive"
                             
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
        </div>
        <div id="tab-2" className="tab-content2">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                
               
             
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
                        <a href="#">Vita Student Lewisham Exchange</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                          {/*  <a href="#" title="Compare">
                                                          <i className="fas fa-exchange-alt"></i>
                                                      </a> */}
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/03.jpg`}
                            alt="home-1"
                            className="img-responsive"
                             
                
               
             
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
                        <a href="#">Chapter Islington</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                
               
             
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive" 
                               
                              
                            
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/05.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
        </div>
        <div id="tab-3" className="tab-content2">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Vita Student Lewisham Exchange</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                          {/*  <a href="#" title="Compare">
                                                          <i className="fas fa-exchange-alt"></i>
                                                      </a> */}
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                             
                             
                            
                          
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
                        <a href="#">Chapter Islington</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/03.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                             
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/05.jpg`}
                            alt="home-1"
                            className="img-responsive"
                             
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
        </div>
        <div id="tab-4" className="tab-content2">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/05.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Vita Student Lewisham Exchange</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                          {/*  <a href="#" title="Compare">
                                                          <i className="fas fa-exchange-alt"></i>
                                                      </a> */}
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Islington</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                            alt="home-1"
                            className="img-responsive"
                             
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
        </div>
        <div id="tab-5" className="tab-content2">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Vita Student Lewisham Exchange</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                          {/*  <a href="#" title="Compare">
                                                          <i className="fas fa-exchange-alt"></i>
                                                      </a> */}
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Islington</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/03.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/05.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
        </div>
      </div>
      {/* 1st-tab-section-end*/}
      {/* ===============================2nd-tab-section-open ===============================*/}
      <div role="tabpanel" className="tab-pane fade" id="tab2">
        <div className="tabs-container">
          <nav className="tabs">
            <ul className="expanded">
              <li className="current" data-tab="tab-6">
                Melbourne
              </li>
              <li data-tab="tab-7" className="current">
                Sydney
              </li>
              <li data-tab="tab-8">Brisbane</li>
              <li data-tab="tab-9">Adelaide</li>
              <li data-tab="tab-10">Perth</li>
            </ul>
          </nav>
        </div>
        <div id="tab-6" className="tab-content2">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/m-1.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Vita Student Lewisham Exchange</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                          {/*  <a href="#" title="Compare">
                                                          <i className="fas fa-exchange-alt"></i>
                                                      </a> */}
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/m-2.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Chapter Islington</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/m-3.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/m-4.jpg`}
                            alt="home-1"
                            className="img-responsive"
                             
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/m-5.jpg`}
                            alt="home-1"
                            className="img-responsive"
                             
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/m-6.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
        </div>
        <div id="tab-7" className="tab-content2">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Vita Student Lewisham Exchange</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                          {/*  <a href="#" title="Compare">
                                                          <i className="fas fa-exchange-alt"></i>
                                                      </a> */}
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/03.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Chapter Islington</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                          
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/05.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
        </div>
        <div id="tab-8" className="tab-content2">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Vita Student Lewisham Exchange</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                          {/*  <a href="#" title="Compare">
                                                          <i className="fas fa-exchange-alt"></i>
                                                      </a> */}
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Islington</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/03.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/05.jpg`}
                            alt="home-1"
                            className="img-responsive"
                         
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
        </div>
        <div id="tab-9" className="tab-content2">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/05.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Vita Student Lewisham Exchange</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                          {/*  <a href="#" title="Compare">
                                                          <i className="fas fa-exchange-alt"></i>
                                                      </a> */}
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Islington</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                          
                             
                            
                           
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
        </div>
        <div id="tab-10" className="tab-content2">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                            alt="home-1"
                            className="img-responsive"
                             
                             
                            
                          
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
                        <a href="#">Vita Student Lewisham Exchange</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                          {/*  <a href="#" title="Compare">
                                                          <i className="fas fa-exchange-alt"></i>
                                                      </a> */}
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Chapter Islington</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
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
                className="agents-grid aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/03.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Hackney Wick Park Residence</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          {/*  <div className="homes-tag button sale rent">For Rent</div> */}
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/04.jpg`}
                            alt="home-1"
                            className="img-responsive"
                            
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
              <div className="agents-grid">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        
                        <a href="#" className="homes-img">
                          <div className="homes-price">643 views last week</div>
                          <img
                            src={`${baseUrl}/front/images/feature-properties/05.jpg`}
                            alt="home-1"
                            className="img-responsive"
                           
                             
                            
                          
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
                        <a href="#">Chapter Old street</a>
                      </h3>
                      <p>
                        <a href="#">
                          
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </a>
                      </p>
                      <div className="price-properties">
                        <h3 className="mt-3 title">
                          
                          <a href="#">
                            <span>From</span> £137
                          </a>
                        </h3>
                        <div className="compare">
                          
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
        </div>
      </div>
      {/* ======================2nd-tab-section-end========================== */}
      <div role="tabpanel" className="tab-pane fade show" id="tab3">
        <div className="row"> 3 </div>
      </div>
      {/* tab content end */}
      <div role="tabpanel" className="tab-pane fade" id="tab4">
        <div className="row"> 4 </div>
      </div>
      <div role="tabpanel" className="tab-pane fade" id="tab5">
        <div className="row"> 5 </div>
      </div>
      <div role="tabpanel" className="tab-pane fade" id="tab6">
        <div className="row"> 6 </div>
      </div>
      <div role="tabpanel" className="tab-pane fade" id="tab7">
        <div className="row"> 7 </div>
      </div>
      <div role="tabpanel" className="tab-pane fade" id="tab8">
        <div className="row"> 8 </div>
      </div>
      <div role="tabpanel" className="tab-pane fade" id="tab9">
        <div className="row"> 9 </div>
      </div>
      <div role="tabpanel" className="tab-pane fade" id="tab10">
        <div className="row"> 10 </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default PopularPropertiesSection
