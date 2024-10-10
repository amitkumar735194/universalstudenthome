import React from 'react'
import BookYourPlaceSection from '../frontComponent/homeComponent/bookYourPlaceSection'
import Link from 'next/link'
import { baseUrl } from '@/helper/helper'
import Image from 'next/image'


const FindMySpot = () => {
  return (
    <>
      <section
  className="breadcrumb-outer"
  style={{
    background: `url(${baseUrl}front/images/finmy-spot.jpg) no-repeat`,
    backgroundSize: "cover"
  }}
>
  <div className="container-fluid">
    <div className="detail-title">
      <div className="detail-title-inner">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h1 className="white2">
              <span>Find</span> my Spot
            </h1>
            <h2 className="white">
              <span>How ideal Universal Student Homes works for you</span>
            </h2>
            <div className="list-single-contacts">
              <ul>
                <li className="mb-4 white">
                  Rent out your rooms to tenants who are the right fit and will
                  stay together longer
                </li>
              </ul>
              <div className="listing-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <span className="white3">Harpreet Singh</span>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <Link href="/start-booking" className="letsget-started">
                    Let&apos;s Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12" style={{}}>
            <div className="list-single-details"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ======================================================================== */}

<section className="about-us feature-area2 fh">
  <div className="container-fluid">
    <div className="row">
      <div
        className="col-lg-12 col-md-12"
        style={{ position: "relative", zIndex: 10000 }}
      >
        <div className="sec-title">
          <h2>
            <span>Reasons </span> To Choose Us
          </h2>
        </div>
      </div>
    </div>
    <div className="featured-boxes-inner">
      <div className="row">
        <div
          className="p-0 col-lg-3 col-sm-6 col-md-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={250}
        >
          <div className="single-featured-box">
            <div className="icon color-fb7756">
              <Image src={`${baseUrl}front/images/verified-properties.jpg`} alt="" 
               
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
            </div>
            <h3 className="mt-5">100% verified properties</h3>
            <p _ngcontent-bgi-c3="">
              Verified by our property experts so you don’t have to.
            </p>
          </div>
        </div>
        <div
          className="p-0 col-lg-3 col-sm-6 col-md-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={350}
        >
          <div className="single-featured-box">
            <div className="icon color-facd60">
              <Image src={`${baseUrl}front/images/icons/redefine.jpg`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"
             />
            </div>
            <h3 className="mt-5">Price Match Guarantee</h3>
            <p _ngcontent-bgi-c3="">
              If you got a lesser price for the same property elsewhere we
              match.
            </p>
          </div>
        </div>
        <div
          className="p-0 col-lg-3 col-sm-6 col-md-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={450}
        >
          <div className="single-featured-box">
            <div className="icon color-1ac0c6">
              <Image src={`${baseUrl}front/images/icons/safe_acommodation.jpg`} 
               alt="image"
               layout="fill"  
             objectFit="cover"  
             sizes="100vw"/>
            </div>
            <h3 className="mt-5">360° view of property</h3>
            <p _ngcontent-bgi-c3="">
              View property from all different sides to plan before you get in.
            </p>
          </div>
        </div>
        <div
          className="p-0 col-lg-3 col-sm-6 col-md-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={550}
        >
          <div className="single-featured-box">
            <div className="icon">
              <Image src={`${baseUrl}/front/images/live_chat.jpg`} alt="" 
               layout="fill"  
                objectFit="cover"  
                sizes="100vw"
              />
            </div>
            <h3 className="mt-5">Live chat assistance</h3>
            <p _ngcontent-bgi-c3="">
              Get instant student assistance on the go while you explore.
            </p>
            {/* <a className="read-more-btn" href="#">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
    
  </div>

  
</section>

{/* =================================================================================== */}

<section className="mb-4 info-help h17">
            <div className="container-fluid">
                <div className="row info-head">
                    <div className="col-lg-6 col-md-8 col-xs-8 aos-init aos-animate" data-aos="fade-right">
                        <div className="info-text">
                            <h3>Looking for a Place?</h3>
                            <h5 className="mt-3">From £137</h5>
                            <p className="pt-2">We Help you find the best places and offer near you. Bring to the table win-win survival strategies to ensure proactive domination going forward.</p>
                            <div className="inf-btn pro">
                                <Link href="/start-booking" className="letsget-started">Start Booking</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

{/* ============================================================= */}
            <BookYourPlaceSection />
            {/* =============================================================================== */}
    </>
  )
}

export default FindMySpot
