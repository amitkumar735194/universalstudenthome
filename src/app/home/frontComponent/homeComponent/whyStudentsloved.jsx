import { baseUrl } from '@/helper/helper'
import Image from 'next/image'
import React from 'react'

const WhyStudentsLoved = () => {
  return (
    <>
    <div className="clearfix"></div>
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


            <section className="featured-boxes-area bg-white-1">
            <div className="container-fluid">
                <div className="featured-boxes-inner">
                <div className="m-0 row">
                    <div
                    className="p-0 col-lg-3 col-sm-6 col-md-6 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={250}
                    >
                    <div className="single-featured-box">
                        <div className="icon color-fb7756">
                        <Image src={`${baseUrl}front/images/icons/comfort.jpg`} alt="" 
                          
                         layout="fill"  
                            objectFit="cover"  
                            sizes="100vw"
                       />
                        </div>
                        <h3 className="mt-5">Excellence in Comfort</h3>
                        <p _ngcontent-bgi-c3="">
                        Experience superior living with our cozy accommodations, providing
                        comfort and tranquility for focused academic success.
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
                        <img src={`${baseUrl}front/images/icons/redefine.jpg`} />
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
                    className="p-0 col-lg-3 col-sm-6 col-md-6 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={450}
                    >
                    <div className="single-featured-box">
                        <div className="icon color-1ac0c6">
                        <img src={`${baseUrl}front/images/icons/safe_acommodation.jpg`} />
                        </div>
                        <h3 className="mt-5">Trusted &amp; Safe Accommodation</h3>
                        <p _ngcontent-bgi-c3="">
                        Discover peace of mind with our trusted and safe accommodations.
                        Your safety and comfort are our top priorities.
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
                        <img src={`${baseUrl}front/images/icons/contact.jpg`} alt="" />
                        </div>
                        <h3 className="mt-5">24/7 Support</h3>
                        <p _ngcontent-bgi-c3="">
                        Our commitment goes beyond just providing a room. Enjoy peace of
                        mind with our 24/7 support hub, ensuring your comfort
                        </p>
                        {/* <a className="read-more-btn" href="#">Read More</a> */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>


    </>
  )
}

export default WhyStudentsLoved
