"use client"
import { baseUrl } from '@/helper/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'  

const PropertyGrid = ({data}) => {

    const [propertyDetails, setPropertyDetails] = useState(null);
    const [leftImage, setLeftImage] = useState([]);
    const [RightImage, setRightImage] = useState([]);
    const [rooms, setRooms] = useState([]);
 

  return (
    <div className="col-lg-4">
            <div className="agents-grid" data-aos="fade-up" data-aos-delay={150} >
              <div className="landscapes">
                <div className="project-single">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href={`${baseUrl}home/p/${data.slug?data.slug:''}`} className="homes-img">
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
                            {data && data.leftImage && data.leftImage.map((img, index)=>(
                                 <li className="slide" data-active-slide="" Key={img._id}>  
                                 <Image
                                      src={`${baseUrl}${img.image}`}
                                      alt="home-1"
                                      className="img-responsive"
                                      layout="fill" // Use fill to make the image cover the parent container
                                      objectFit="cover" // Optional: cover the area with aspect ratio maintained
                                      sizes="100vw"
                                    />
                               </li>
                            ))}
                            {/* <li className="slide" data-active-slide="">  
                              <img
                                src={`${baseUrl}/front/images/feature-properties/01.jpg`}
                                alt="home-1"
                                className="img-responsive"
                              />
                            </li>
                            <li className="slide"> 
                              <img
                                src={`${baseUrl}/front/images/feature-properties/02.jpg`}
                                alt="home-1"
                                className="img-responsive"
                              />
                            </li> */}
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
                      <Link href={`${baseUrl}home/p/${data._id}`}>
                       {data && data.title}
                      </Link>
                    </h3>
                    <p>
                      <Link href={`${baseUrl}home/p/${data._id}`}>
                        
                      {data && data.short_description.substring(0,100)}
                      </Link>
                    </p>
                    {/* Price */}
                    <div className="price-properties">
                      <h3 className="mt-3 title">
                        
                        <a href="">
                          <span>From</span> £{data && data.roomPrices[0].price}
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
        
  )
}

export default PropertyGrid
