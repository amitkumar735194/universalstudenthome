"use client";
import React, { useEffect } from 'react'
import BannerTabContent from '../homeComponent/bannerTabContent';
import Image from 'next/image';

const HeaderSearchModel = () => {




  return (
  

<div className="explore__form-checkbox-list full-filter filter-block">
                                {/* =======================tab-section-open============== */}
                                <div className="tabs_two">
                                  <ul className="space-x-1 expanded">
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent11"
                                        className="active"
                                      >
                                        <Image src="front/images/flag/uk.jpg" 
                                         alt="image"
                                         layout="fill"  
                                       objectFit="cover"  
                                       sizes="100vw"/>  
                                        UK
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent12"
                                        className=""
                                      >
                                        <Image src="front/images/flag/aus.jpg" 
                                         alt="image"
                                         layout="fill"  
                                       objectFit="cover"  
                                       sizes="100vw"
                                       />
                                        AUS
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent13"
                                        className=""
                                      >
                                        <Image src="front/images/flag/irl.jpg" 
                                         alt="image"
                                         layout="fill"  
                                       objectFit="cover"  
                                       sizes="100vw"/>
                                        IRL
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent14"
                                        className=""
                                      >
                                        <Image src="front/images/flag/can.jpg" 
                                         alt="image"
                                         layout="fill"  
                                       objectFit="cover"  
                                       sizes="100vw"/>
                                        CAN
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent15"
                                        className=""
                                      >
                                        <Image src="front/images/flag/usa.jpg" 
                                         alt="image"
                                         layout="fill"  
                                       objectFit="cover"  
                                       sizes="100vw"/>
                                        USA
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent16"
                                        className=""
                                      >
                                        <Image src="front/images/flag/ger.jpg" 
                                         alt="image"
                                         layout="fill"  
                                       objectFit="cover"  
                                       sizes="100vw"/>
                                        GER
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab_content_container">
                                   <BannerTabContent tabNumber={'1'} />
                                   <BannerTabContent tabNumber={'2'} />
                                   <BannerTabContent tabNumber={'3'} />
                                   <BannerTabContent tabNumber={'4'} />
                                   <BannerTabContent tabNumber={'5'} />
                                   <BannerTabContent tabNumber={'6'} /> 
                                  
                                </div>
                                {/* =====================teb-section-end====================== */}
                              </div>
   
  )
}

export default HeaderSearchModel
