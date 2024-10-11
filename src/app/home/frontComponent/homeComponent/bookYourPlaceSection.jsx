import { baseUrl } from '@/helper/helper'
import Image from 'next/image'
import React from 'react'

const BookYourPlaceSection = () => {
  return (
    <>
    <section className="bg-white how-it-works rec-pro">
  <div className="container-fluid">
    <div className="sec-title">
      <h2>
        <span>Book your place in </span>3 easy steps
      </h2>
      <p>Book places in major cities and universities across the globe</p>
    </div>
    <div className="row">
      <div
        className="col-md-6 col-xl-4 aos-init aos-animate"
        data-aos="zoom-in"
        data-aos-delay={150}
      >
        <div className="start__single__item column__space--secondary">
          <div className="img__box">
            
            <img src={`${baseUrl}/front/images/brows.jpg`} 
                    alt="image"
                   />
            <div className="step__count">
              <h4>01</h4>
            </div>
          </div>
          <h4>Discover and Finalise</h4>
          <p className="neutral-bottom">
            Choose from a plethora of verified student home listings
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item column__space--secondary">
          <div className="img__box arrow__container">
            
            <img src={`${baseUrl}/front/images/view-details.jpg`}
            alt="image"
            />
            <div className="step__count">
              <h4>02</h4>
            </div>
          </div>
          <h4>Get your paperwork done</h4>
          <p className="neutral-bottom">Paperwork’s on us, no need to fuss.</p>
        </div>
      </div>
      <div
        className="col-md-6 col-xl-4 aos-init aos-animate"
        data-aos="zoom-in"
        data-aos-delay={150}
      >
        <div className="start__single__item">
          <div className="img__box">
            
            <img src={`${baseUrl}/front/images/Earn.jpg`}
            alt="image"
             />
            <div className="step__count">
              <h4>03</h4>
            </div>
          </div>
          <h4>Accommodation Booked!</h4>
          <p className="neutral-bottom">
            Relax, pack your bags, and unravel a new life chapter!
          </p>
        </div>
      </div>
    </div>
    
  </div>
</section>
</>

  )
}

export default BookYourPlaceSection
