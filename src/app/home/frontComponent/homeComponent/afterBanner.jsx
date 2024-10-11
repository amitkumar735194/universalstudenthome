import { baseUrl } from '@/helper/helper'
import Image from 'next/image'
import React from 'react'

const AfterBanner = () => {
  return (
    <section className="counterup">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="countr">
            
            <i>
              <img src={`${baseUrl}front/images/countries.png`} 
               alt="image"
               
              />
            </i>
            {/*  <i className="fa fa-house" aria-hidden="true"></i>  */}
            <div className="text-left count-me">
              <h3>
                <span className="counter">10</span>+ Countries
              </h3>
              <p>
                Providing Exceptional Living <br />
                Spaces in 5+ Countries.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="countr">
            
            <i className="red">
              <img src={`${baseUrl}front/images/city.png`}
              alt="image"
               />
            </i>
            <div className="text-left count-me">
              <h3>
                <span className="counter">550</span> + Cities
              </h3>
              <p>
                Our robust presence premier
                <br />
                cities across the globe.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="countr">
            
            <i>
              <img src={`${baseUrl}front/images/university.png`}
              alt="image"
           />
            </i>
            <div className="text-left count-me">
              <h3>
                <span className="counter">900</span> + Universities
              </h3>
              <p>
                Find your sweet home near <br />
                major universities.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="countr">
            
            <i className="red">
              <img src={`${baseUrl}front/images/bed.png`}
                alt="image"
               />
            </i>
            <div className="text-left count-me">
              <h3>
                <span className="counter">1</span> + Mn Beds
              </h3>
              <p>
                Secure accommodations near <br />
                premier UK universities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default AfterBanner
