import { baseUrl } from '@/helper/helper'
import Image from 'next/image'
import React from 'react'

const CoatsOfLiving = () => {
  return (
    <>
<div className="clearfix"></div>
      

      <div id="map-container" className="single-property-5 fullwidth-home-map dark-overlay">
            <div className="video-container">
                <video poster={`${baseUrl}front/images/bg/video-single.png`} loop autoPlay muted> 
                    <source src={`${baseUrl}front/video/6.mp4`} type="video/mp4" />
                </video>
            </div>
        </div>
        {/* ===================================================== */}

        <section className="about-us fh">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 col-md-12 who-1">
        <div>
          <h2 className="mb-4 text-left">Cost of Living</h2>
        </div>
        <div className="pftext">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            odio id voluptatibus incidunt cum? Atque quasi eum debitis optio ab.
            Esse itaque officiis tempora possimus odio rerum aperiam ratione,
            sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit sunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            odio id voluptatibus incidunt cum? Atque quasi eum debitis optio ab.
            Esse itaque officiis tempora possimus odio rerum aperiam ratione,
            sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit sunt.
          </p>
        </div>
        <div className="clearfix" />
        <div className="single homes-content details mb-30">
          <ul className="clearfix homes-list">
            <li>
              <i className="fa fa-check-square" aria-hidden="true" />
              <span>8 Million Prices</span>
            </li>
            <li>
              <i className="fa fa-check-square" aria-hidden="true" />
              <span>11,000 Cities</span>
            </li>
            <li>
              <i className="fa fa-check-square" aria-hidden="true" />
              <span>20+ Countries</span>
            </li>
          </ul>
        </div>
        <div className="calculate mt">
          
          <a href="cost-of-living-calculator.html">Calculate Now</a>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-xs-12">
        <div className="wprt-image-video w50">
          <Image alt="image" src={`${baseUrl}front/images/bg/bg-video.jpg`} 
          
           layout="fill"  
            objectFit="cover"  
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default CoatsOfLiving
