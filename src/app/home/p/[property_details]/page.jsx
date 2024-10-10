 
"use client";
import Link from 'next/link'
import React, { useEffect } from 'react'
import '@/styles/front/css/timedropper.css'; 
import '@/styles/front/css/datedropper.css'; 
import '@/styles/front/css/swiper.min.css'; 
import '@/styles/front/css/default.css'; 

import { baseUrl ,loadScript} from '@/helper/helper';
import WhyStudentsLoved from '@/app/home/frontComponent/homeComponent/whyStudentsloved';
import Image from 'next/image';



const PropertyDetails = () => {

    
    useEffect(()=>{

            loadScript(`${baseUrl}front/js/onpagenav.js`);
            loadScript(`${baseUrl}front/js/swiper.min.js`).then(() => {
            // Initialize Swiper after the script has loaded
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: true,
                autoplay: true,
                loopFillGroupWithBlank: true,
                pagination: false,
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                },
            });
            });


      },[]);

      

  return (
    <>
    {/* <div > */}

<div className="clearfix"></div>

<div className="ptb-20">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image
                src={`${baseUrl}front/images/single-property/s-1.jpg`}
                className="img-fluid"
                alt="image"
                layout="fill"  
              objectFit="cover"  
              sizes="100vw"
              />
            </div>
            <div className="swiper-slide">
              <Image
                src={`${baseUrl}front/images/single-property/s-2.jpg`}
                className="img-fluid"
                alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"
              />
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-white" />
          <div className="mr-3 swiper-button-next swiper-button-white" />
          <div className="ml-3 swiper-button-prev swiper-button-white" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="row">
          <div className="col-lg-6 col-6 prl">
            <div className="property_small">
              <Image src={`${baseUrl}front/images/single-property/01.jpg`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
            </div>
          </div>
          <div className="col-lg-6 col-6 prl">
            <div className="property_small">
              <Image src={`${baseUrl}front/images/single-property/02.jpg`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
            </div>
          </div>
          <div className="col-lg-6 col-6 prl">
            
            <div className="property_small margin_none">
              <Image src={`${baseUrl}front/images/single-property/03.jpg`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
            </div>
          </div>
          <div className="col-lg-6 col-6 prl">
            
            <div className="property_small margin_none">
              <Image src={`${baseUrl}front/images/single-property/04.jpg`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
              <div className="position_top">
                <a href="#"> +15 Photos &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ============================================================================================================= */}

      <section className="breadcrumb" id="menu1">
        <div className="container-fluid"> 
            <ul className="breadcrumb2">
            <li><Link href="/">Home</Link></li>
            <li><a href="#">United Kingdom</a></li>
            <li><a href="#">Student Accommodation London</a></li>
            <li className="active">Dashwood Studios Residence</li>
            </ul> 
        </div>
    </section>

{/* ============================================================================================================= */}

    <div className="detail-overvienav ">
        <div className="container-fluid">
            <nav id="desktop-nav">
                <ul>
                <li><a className="js-curnav-switch" href="#menu1">Overview</a></li>
                <li><a className="js-curnav-switch" href="#menu2">Price Trend</a></li>
                <li><a className="js-curnav-switch" href="#menu3">Room Types</a></li>
                <li><a className="js-curnav-switch" href="#menu4">Payment Info</a></li>
                <li><a className="js-curnav-switch" href="#menu5">Similar Properties</a></li>
                </ul> 
            </nav>
        </div>
        </div>
{/* ============================================================================================================= */}
<section className="single-proper blog details">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8 col-md-12">
        <div className="row">
          <div className="col-md-12">
            <section className="pt-0 headings-2">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-wrapper-body">
                    <div className="listing-title-bar">
                      <div style={{ position: "relative", top: "-200px" }} />
                      {/*    <h2>Overview</h2> */}
                      <h3>Dashwood Studios Residence London </h3>
                      <div className="area_location">
                        
                        <p>
                          
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          />
                          120-138 Walworth Rd, London SE17 1JL, United Kingdom
                          {/* <span class="te-vom"><a href="#">View on Map</a></span> */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="compare2">
                    <a href="#" title="Compare">
                      <i className="fa fa-compress" aria-hidden="true" />
                    </a>
                    <a href="#" title="Share">
                      <i className="fa fa-share-alt" aria-hidden="true" /> Share
                    </a>
                    <a href="#" title="Favorites">
                      <i className="fa fa-heart-o" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* Star Description */}
            <div className="blog-info details mb-30">
              <section id="posts">
                <article className="wrapper post one">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div className="readmore">
                    <a href="#" data-article="one">
                      Read more
                    </a>
                  </div>
                  <p className="hide show-this-on-click">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <div className="readless hide">
                    <a href="#" data-article="one">
                      Read less
                    </a>
                  </div>
                </article>
                <div className="list_afk">
                  <ul>
                    <li>No Visa No Pay</li>
                    <li>No University No Pay</li>
                  </ul>
                </div>
                <div className="area_location">
                  {/*  <p> <i class="fa fa-map-marker" aria-hidden="true"></i> 120-138 Walworth Rd, London SE17 1JL, United Kingdom <span class="te-vom"><a href="#">View on Map</a></span></p> */}
                  <div className="row">
                    <div className="col-lg-2">
                      <p className="distance">
                        
                        <i
                          className="fa fa-graduation-cap"
                          aria-hidden="true"
                        />
                        Distance to
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group location">
                        <div
                          className="nice-select form-control wide"
                          tabIndex={0}
                        >
                          
                          <span className="current">Select University</span>
                          <ul className="list">
                            <li
                              data-value={1}
                              className="option selected focus"
                            >
                              
                              <i className="fa fa-graduation-cap" /> King&apos;s
                              College London (KCl)
                              <span>London, United Kingdom</span>
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
                  </div>
                  <div className="flex">
                    <div className="flex items-center">
                      <Image
                        alt="walking"
                        src={`${baseUrl}front/images/step.jpg`}
                        decoding="async"
                        data-nimg={1}
                        className="flex-shrink-0"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                      <span className="min_sdlfj">25 mins</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        alt="transit"
                        src={`${baseUrl}front/images/bus.jpg`}
                        decoding="async"
                        data-nimg={1}
                        className="flex-shrink-0"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                      <span className="min_sdlfj">15 mins</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        alt="driving"
                        src={`${baseUrl}front/images/car.jpg`}
                        decoding="async"
                        data-nimg={1}
                        className="flex-shrink-0"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                      <span className="min_sdlfj">9 mins</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* End Description */}
          </div>
        </div>
        {/* Star Property Details */}
        <div className="single homes-content details mb-30 amenities_dl">
          <h5>Amenities</h5>
          {/* cars List */}
          <ul className="amenites_ei">
            <li>
              <Image src={`${baseUrl}front/images/amenities/furnished.png`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
              <span>Furnished</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/Onsite-Maintenance.png`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
              <span>Onsite Maintenance</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/bicycle-storage.png`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
              <span>Bicycle Storage</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/comon_aria.png`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
              <span>Common Area</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/games_room.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>Games Room</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/sofa.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>Sofa</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/kitchen.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>Kitchen</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/study-room.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>Study Room</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/laundry-room.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>Laundry Room</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/rooftop.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>Rooftop Terrace</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/cenema.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>Cinema</span>
            </li>
          </ul>
          <h5 className="mt-4">
            Your Bills <span>(Inclusive of)</span>
          </h5>
          {/* <h5>Security & Safety</h5>*/}
          {/* cars List */}
          <ul className="amenites_ei">
            <li>
              <Image src={`${baseUrl}front/images/amenities/water.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>Water Included</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/electric.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>Electricity Included</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/door.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>Secure Door-Entry</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/wifiy.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>WiFi</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/gas.png`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
              <span>Gas Included</span>
            </li>
            <li>
              <Image src={`${baseUrl}front/images/amenities/ventilation.png`}
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw" />
              <span>Ventilation system</span>
            </li>
          </ul>
        </div>
        {/*  <div class="property wprt-image-video w50 pro mt-3">
                      <h5>Property Video</h5>
                      <Image alt="image" src={`${baseUrl}front/images/property_videio.jpg`}
                       alt="image"
                        layout="fill"  
                      objectFit="cover"  
                      sizes="100vw">
                      <a class="icon-wrap popup-video popup-youtube" href="https://www.youtube.com/watch?v=14semTlwyUY">
                          <i class="fa fa-play"></i>
                      </a>
                      <div class="iq-waves">
                          <div class="waves wave-1"></div>
                          <div class="waves wave-2"></div>
                          <div class="waves wave-3"></div>
                      </div>
                  </div> */}
        <div className="detail-wrapper-body">
          <div id="menu2" style={{ position: "relative", top: "-100px" }} />
          <div className="listing-title-bar">
            <h2>Price Trend</h2>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="wide_select">
                <select className="form-select">
                  <option value="">Room Type</option>
                  <option value="Premium Plus Studio" selected="">
                    Premium Plus Studio
                  </option>
                  <option value="Deluxe Studio">Deluxe Studio</option>
                  <option value="Premium Studio">Premium Studio</option>
                  <option value="Standard Studio">Standard Studio</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="wide_select">
                <select className="form-select">
                  <option disabled="" value="">
                    Tenancies
                  </option>
                  <option value="44-51 weeks">44-51 weeks</option>
                  <option value="37-43 weeks">37-43 weeks</option>
                  <option value="25-36 weeks">25-36 weeks</option>
                  <option value="13-24 weeks">13-24 weeks</option>
                  <option value="12 weeks">12 weeks</option>
                  <option value="30-43 weeks">30-43 weeks</option>
                  <option value="44-52 weeks">44-52 weeks</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="graph_ei">
              <Image src={`${baseUrl}front/images/price_graph.jpg`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="insight">
              <ul>
                <li>
                  <i className="fa fa-check" /> Average price for
                  <strong>Premium Plus Studio</strong>
                  <strong>with 44-51 weeks tenancy</strong> in
                  <strong>2023-2024</strong> is 500 £/week and average price for
                  Premium Plus Studio with 44-51 weeks tenancy in 2024-2025 is
                  520 £/week
                </li>
                <li>
                  <i className="fa fa-check" /> There is a
                  <strong>4% increase</strong> in the average price from
                  <strong>2023-2024</strong> to <strong>2024-2025</strong> for
                  Premium Plus Studio with 44-51 weeks tenancy
                </li>
                <li>
                  <i className="fa fa-check" /> Cost of living in London is
                  <strong>358 £/ month</strong> and the average price for
                  Premium Plus Studio with 44-51 weeks is
                  <strong>2080 £/month</strong>.
                </li>
              </ul>
            </div>
            <div className="like_outer">
              <p>
                Did the price trends helped?
                <a href="#">
                  <span>
                    <Image src={`${baseUrl}front/images/like.png`} 
                     alt="image"
                     layout="fill"  
                   objectFit="cover"  
                   sizes="100vw"/> Yes
                  </span>
                </a>
                <a href="#">
                  <span>
                    <Image src={`${baseUrl}front/images/no-like.png`} 
                     alt="image"
                     layout="fill"  
                   objectFit="cover"  
                   sizes="100vw"/>
                    No
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* <div class="floor-plan property wprt-image-video w50 pro">
    <h5>What&apos;s Nearby</h5>
    <div class="property-nearby">
      <div class="row">
        <div class="col-lg-12">
          <div class="nearby-info mb-4"> <span class="nearby-title mb-3 d-block text-info"> <i class="fas fa-graduation-cap mr-2"></i><b class="title">Education</b> </span>
            <div class="nearby-list">
              <ul class="property-list list-unstyled mb-0">
                <li class="d-flex">
                  <h6 class="mb-3 mr-2">Education Mandarin</h6>
                  <span>(15.61 miles)</span>
                  <ul class="list-unstyled list-inline ml-auto">
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star-half fa-xs"></i></li>
                  </ul>
                </li>
                <li class="d-flex">
                  <h6 class="mb-3 mr-2">Marry&apos;s Education</h6>
                  <span>(15.23 miles)</span>
                  <ul class="list-unstyled list-inline ml-auto">
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star-half fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="far fa-star fa-xs"></i></li>
                  </ul>
                </li>
                <li class="d-flex">
                  <h6 class="mb-3 mr-2">The Kaplan</h6>
                  <span>(15.16 miles)</span>
                  <ul class="list-unstyled list-inline ml-auto">
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star-half fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="far fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="far fa-star fa-xs"></i></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="nearby-info mb-4"> <span class="nearby-title mb-3 d-block text-success"> <i class="fas fa-user-md mr-2"></i><b class="title">Health & Medical</b> </span>
            <div class="nearby-list">
              <ul class="property-list list-unstyled mb-0">
                <li class="d-flex">
                  <h6 class="mb-3 mr-2">Natural Market</h6>
                  <span>(13.20 miles)</span>
                  <ul class="list-unstyled list-inline ml-auto">
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star-half fa-xs"></i></li>
                  </ul>
                </li>
                <li class="d-flex">
                  <h6 class="mb-3 mr-2">Food For Health</h6>
                  <span>(13.22 miles)</span>
                  <ul class="list-unstyled list-inline ml-auto">
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star-half fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="far fa-star fa-xs"></i></li>
                  </ul>
                </li>
                <li class="d-flex">
                  <h6 class="mb-3 mr-2">A Matter of Health</h6>
                  <span>(13.34 miles)</span>
                  <ul class="list-unstyled list-inline ml-auto">
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star-half fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="far fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="far fa-star fa-xs"></i></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="nearby-info"> <span class="nearby-title mb-3 d-block text-danger"> <i class="fas fa-car mr-2"></i><b class="title">Transportation</b> </span>
            <div class="nearby-list">
              <ul class="property-list list-unstyled mb-0">
                <li class="d-flex">
                  <h6 class="mb-3 mr-2">Airport Transportation</h6>
                  <span>(11.36 miles)</span>
                  <ul class="list-unstyled list-inline ml-auto">
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star-half fa-xs"></i></li>
                  </ul>
                </li>
                <li class="d-flex">
                  <h6 class="mb-3 mr-2">NYC Executive Limo</h6>
                  <span>(11.87 miles)</span>
                  <ul class="list-unstyled list-inline ml-auto">
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star-half fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="far fa-star fa-xs"></i></li>
                  </ul>
                </li>
                <li class="d-flex">
                  <h6 class="mb-3 mr-2">Empire Limousine</h6>
                  <span>(11.52 miles)</span>
                  <ul class="list-unstyled list-inline ml-auto">
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="fas fa-star-half fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="far fa-star fa-xs"></i></li>
                    <li class="list-inline-item m-0 text-warning"><i class="far fa-star fa-xs"></i></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    */}
      </div>
      <aside className="col-lg-4 col-md-12 car ">
        <div className="single widget sidebar">
          {/* Start: Schedule a Tour */}
          <div className="mt-0 schedule widget-boxed">
            <div className="widget-boxed-header">
              <h4>
                <i className="pr-3 fa fa-clock padd-r-10" />
                Clearing Sale
              </h4>
            </div>
            <div className="widget-boxed-body">
              <div className="row">
                <div className="col-lg-8">
                  <div className="title2">
                    <span>From</span> £250/week
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="star_22">
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    5.0
                  </div>
                </div>
                <div className="clearfix" />
                <div className="col-lg-8">
                  <div className="deals">
                    
                    <i className="fa fa-home" /> House of Deals
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="upto_1">
                    <span>upto</span> £1,234
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="btn reservation btn-radius theme-btn full-width mrg-top-10"
              >
                Choose Your Room
              </a>
            </div>
          </div>
          {/* End: Schedule a Tour */}
          {/* end author-verified-badge */}
          <div className="sidebar">
            <div className="mt-5 widget-boxed mt-33">
              <div className="widget-boxed-header">
                <h4>Drop us a line</h4>
              </div>
              <div className="widget-boxed-body">
                <div className="sidebar-widget author-widget2">
                  <div className="agent-contact-form-sidebar">
                    <form name="contact_form" method="" action="">
                      <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                        required=""
                      />
                      <div style={{ marginBottom: "10px !important" }}>
                        <input
                          type="text"
                          id="mobile_code"
                          placeholder="Phone Number"
                          name="name"
                        />
                      </div>
                      {/* <input type="number" name="phone_number" placeholder="Phone Number" /> */}
                      <input
                        type="email"
                        name="email_address"
                        placeholder="Email Address"
                      />
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
                      <div className="form-group location">
                        <div
                          className="nice-select form-control wide"
                          tabIndex={0}
                        >
                          
                          <span className="current">Select University</span>
                          <ul className="list">
                            <li
                              data-value={1}
                              className="option selected focus"
                            >
                              
                              <i className="fa fa-graduation-cap" /> King&apos;s
                              College London (KCl)
                              <span>London, United Kingdom</span>
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
                      <textarea
                        placeholder="Message"
                        name="message"
                        required=""
                        defaultValue={""}
                      />
                      <input
                        type="submit"
                        name="sendmessage"
                        className="multiple-send-message"
                        defaultValue="Submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
    {/* START SIMILAR PROPERTIES */}
    {/* END SIMILAR PROPERTIES */}
  </div>
 
</section>
{/* <!-- END SECTION PROPERTIES LISTING --> */}


<div className="room-types">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div id="menu3" style={{ position: "relative", top: "-100px" }} />
        <h5 className="mb_20">Room Types</h5>
      </div>
      <div className="col-lg-12 ptb-20">
        <div className="shadow-3xl">
          <div className="row">
            <div className="col-lg-3">
              <div className="klsdflk_ri">
                <Image src={`${baseUrl}front/images/room_11.jpg`} 
                 alt="image"
                 layout="fill"  
               objectFit="cover"  
               sizes="100vw"/>
                <a href="#">
                  <div className="image_viewer">
                    <i className="fa fa-picture-o" /> 5
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="standard">
                Standard Studio
                <span>
                  <i className="fa fa-line-chart" aria-hidden="true" /> Price
                  Trend
                </span>
              </div>
              <div className="content_df">
                <div className="list_2dk">
                  <ul>
                    <li>
                      <Image src={`${baseUrl}front/images/sqm.png`}
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw" />
                      17-18 sqm
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/small_bed.png`} 
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw"/>
                      Small Double Bed
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/study_desk.png`} 
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw"/>
                      Study Desk with Chair
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/bed_storage.png`} 
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw"/>
                      Under bed storage
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/word_robe.png`} 
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw"/>
                      Wardrobe
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/kitchen.png`} 
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw"/>
                      Private Kitchen
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/bathroom.png`} 
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw"/>
                      En-suite Bathroom
                    </li>
                  </ul>
                </div>
                <div className="clearfix" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="px-42 lg:px-6">
                <div className="mt-6 mb-3 border-t border-gray-300" />
              </div>
              <table className="table_045">
                <thead>
                  <tr>
                    <th scope="col">Stay Duration</th>
                    <th scope="col">Move</th>
                    <th scope="col">Occupancy</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                    <th scope="col">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Stay Duration">44-51 weeks</td>
                    <td data-label="Move">
                      Flexible weeks (Contract Starts - Sep 7, 2024)
                    </td>
                    <td data-label="Occupancy">Single</td>
                    <td data-label="Price">£460/week</td>
                    <td data-label="Total">£20,240 - £23,460</td>
                    <td>
                      <a href="#" className="border button">
                        Book Now
                      </a>
                      <a href="#" className="border button refer">
                        Enquire
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" data-label="Stay Duration">
                      37-43 weeks
                    </td>
                    <td data-label="Move">
                      Flexible weeks (Contract Starts - Sep 7, 2024)
                    </td>
                    <td data-label="Occupancy">Single</td>
                    <td data-label="Price">£485/week</td>
                    <td data-label="Total">£17,945 - £20,855</td>
                    <td>
                      <a href="#" className="border button">
                        Book Now
                      </a>
                      <a href="#" className="border button refer">
                        Enquire
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" data-label="Stay Duration">
                      25-36 weeks
                    </td>
                    <td data-label="Move">
                      Flexible weeks (Contract Starts - Sep 7, 2024)
                    </td>
                    <td data-label="Occupancy">Single</td>
                    <td data-label="Price">£500/week</td>
                    <td data-label="Total">£12,500 - £18,000</td>
                    <td>
                      <a href="#" className="border button">
                        Book Now
                      </a>
                      <a href="#" className="border button refer">
                        Enquire
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" data-label="Stay Duration">
                      13-24 weeks
                    </td>
                    <td data-label="Move">
                      Flexible weeks (Contract Starts - Sep 7, 2024)
                    </td>
                    <td data-label="Occupancy">Single</td>
                    <td data-label="Price">£515/week</td>
                    <td data-label="Total">£6,695 - £12,360</td>
                    <td>
                      <a href="#" className="border button">
                        Book Now
                      </a>
                      <a href="#" className="border button refer">
                        Enquire
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* second-product===open */}
      <div className="col-lg-12 ptb-20">
        <div className="shadow-3xl">
          <div className="row">
            <div className="col-lg-3">
              <div className="klsdflk_ri">
                <Image src={`${baseUrl}front/images/room_11.jpg`} 
                 alt="image"
                 layout="fill"  
               objectFit="cover"  
               sizes="100vw"/>
                <a href="#">
                  <div className="image_viewer">
                    <i className="fa fa-picture-o" /> 5
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="standard">
                Standard Studio
                <span>
                  <i className="fa fa-line-chart" aria-hidden="true" /> Price
                  Trend
                </span>
              </div>
              <div className="content_df">
                <div className="list_2dk">
                  <ul>
                    <li>
                      <Image src={`${baseUrl}front/images/sqm.png`} 
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw"/>
                      17-18 sqm
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/small_bed.png`} 
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw"/>
                      Small Double Bed
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/study_desk.png`}
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw" />
                      Study Desk with Chair
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/bed_storage.png`} 
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw"/>
                      Under bed storage
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/word_robe.png`}
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw" />
                      Wardrobe
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/kitchen.png`} 
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw"/>
                      Private Kitchen
                    </li>
                    <li>
                      <Image src={`${baseUrl}front/images/bathroom.png`} 
                       alt="image"
                       layout="fill"  
                     objectFit="cover"  
                     sizes="100vw"/>
                      En-suite Bathroom
                    </li>
                  </ul>
                </div>
                <div className="clearfix" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="px-42 lg:px-6">
                <div className="mt-6 mb-3 border-t border-gray-300" />
              </div>
              <table className="table_045">
                <thead>
                  <tr>
                    <th scope="col">Stay Duration</th>
                    <th scope="col">Move</th>
                    <th scope="col">Occupancy</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                    <th scope="col">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Stay Duration">44-51 weeks</td>
                    <td data-label="Move">
                      Flexible weeks (Contract Starts - Sep 7, 2024)
                    </td>
                    <td data-label="Occupancy">Single</td>
                    <td data-label="Price">£460/week</td>
                    <td data-label="Total">£20,240 - £23,460</td>
                    <td>
                      <a href="#" className="border button">
                        Book Now
                      </a>
                      <a href="#" className="border button refer">
                        Enquire
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" data-label="Stay Duration">
                      37-43 weeks
                    </td>
                    <td data-label="Move">
                      Flexible weeks (Contract Starts - Sep 7, 2024)
                    </td>
                    <td data-label="Occupancy">Single</td>
                    <td data-label="Price">£485/week</td>
                    <td data-label="Total">£17,945 - £20,855</td>
                    <td>
                      <a href="#" className="border button">
                        Book Now
                      </a>
                      <a href="#" className="border button refer">
                        Enquire
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" data-label="Stay Duration">
                      25-36 weeks
                    </td>
                    <td data-label="Move">
                      Flexible weeks (Contract Starts - Sep 7, 2024)
                    </td>
                    <td data-label="Occupancy">Single</td>
                    <td data-label="Price">£500/week</td>
                    <td data-label="Total">£12,500 - £18,000</td>
                    <td>
                      <a href="#" className="border button">
                        Book Now
                      </a>
                      <a href="#" className="border button refer">
                        Enquire
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" data-label="Stay Duration">
                      13-24 weeks
                    </td>
                    <td data-label="Move">
                      Flexible weeks (Contract Starts - Sep 7, 2024)
                    </td>
                    <td data-label="Occupancy">Single</td>
                    <td data-label="Price">£515/week</td>
                    <td data-label="Total">£6,695 - £12,360</td>
                    <td>
                      <a href="#" className="border button">
                        Book Now
                      </a>
                      <a href="#" className="border button refer">
                        Enquire
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- ======================payment-info===section=============================== --> */}
<div className="room-types">
  <div className="container-fluid">
    <div id="menu4" style={{ position: "relative", top: "-100px" }} />
    <div className="row">
      <div className="col-lg-4">
        <div className="paymen_info">
          <div className="art-1 img-13">
            
            <Image src={`${baseUrl}front/images/payment_info.png`} 
             alt="image"
             layout="fill"  
           objectFit="cover"  
           sizes="100vw" />
            <h3>Payment Info</h3>
          </div>
          <div className="service-text-p">
            <ul>
              <li>The prices listed are per person, per week.</li>
              <li>
                Rent can be paid via debit/credit cards and bank transfers only.
              </li>
              <li>
                Rent can be paid in installments based on the length of the
                booking, with a maximum of four installments available.
              </li>
              <li>
                Booking can be done securely after paying a security deposit
                equivalent to £250 with an international guarantor.
              </li>
              <li>
                Also, a one-time service and bedding fee equivalent to £189 is
                required at the time of booking.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="paymen_info">
          <div className="art-1 img-13">
            
            <Image src={`${baseUrl}front/images/cancel.png`} 
             alt="image"
             layout="fill"  
           objectFit="cover"  
           sizes="100vw" />
            <h3>Cancellation Policy</h3>
          </div>
          <div className="service-text-p">
            <ul>
              <li>
                1. No Place No Pay - Proof of rejection from the university or
                UCAS along with a written confirmation to cancel the booking.
              </li>
              <li>
                2. No Visa No Pay - Submit your request via post or email to
                cancel the booking with evidence in writing that your Visa
                application has been refused and you no longer have a place on
                your course.
              </li>
              <li>
                3. Initial Cancellation Period/Cooling-Off Period - You can
                cancel your booking by sending us in writing up to six weeks
                before the start date of the tenancy.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="paymen_info">
          <div className="art-1 img-13">
            
            <Image src={`${baseUrl}front/images/we_love.png`} 
             alt="image"
             layout="fill"  
           objectFit="cover"  
           sizes="100vw" />
            <h3>What We Love</h3>
          </div>
          <div className="service-text-p">
            <ul>
              <li>
                Because the property is close to Apex Pharmacy, medications are
                easily accessible.
              </li>
              <li>
                Students can always go to the nearby Tesco Express and City
                Supermarket for groceries and other necessities.
              </li>
              <li>
                Barbican Conservatory is an ideal weekend getaway for students.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* second-product===open */}
    </div>
  </div>
</div>

{/* <!-- ======================payment-info===section==end============================= --> */}



<section
  className="bg-white similar-property featured portfolio"
  style={{ paddingTop: 0 }}
>
  <div id="menu5" style={{ position: "relative", top: "-100px" }}>
    &nbsp;
  </div>
  <div className="container-fluid">
    <h5 className="mb_50">Similar Properties</h5>
    <div className="row ">
      <div className="col-lg-4">
        <div className="agents-grid" data-aos="fade-up" data-aos-delay={150}>
          <div className="landscapes">
            <div className="project-single">
              <div className="project-inner project-head">
                <div className="homes">
                  
                  <a href="#" className="homes-img">
                    <div className="homes-tag button sale rent">
                      Offer upto £50
                    </div>
                    <div className="homes-price">
                      <i className="fa fa-bolt" aria-hidden="true" /> Filling
                      Fast
                    </div>
                    <Image
                      src={`${baseUrl}front/images/feature-properties/03.jpg`}
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
                  <a href="london-details.html">Hackney Wick Park Residence</a>
                </h3>
                <p>
                  <a href="london-details.html">
                    
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
        <div className="agents-grid" data-aos="fade-up" data-aos-delay={150}>
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
                      <i className="fa fa-bolt" aria-hidden="true" /> Filling
                      Fast
                    </div>
                    <Image
                      src={`${baseUrl}front/images/feature-properties/04.jpg`}
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
                  <a href="london-details.html">Hackney Wick Park Residence</a>
                </h3>
                <p>
                  <a href="london-details.html">
                    
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
        <div className="agents-grid" data-aos="fade-up" data-aos-delay={150}>
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
                      <i className="fa fa-bolt" aria-hidden="true" /> Filling
                      Fast
                    </div>
                    <Image
                      src={`${baseUrl}front/images/feature-properties/01.jpg`}
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
  </div>
</section>

<WhyStudentsLoved />

    </>
  )
}

export default PropertyDetails
