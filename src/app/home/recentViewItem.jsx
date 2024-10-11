import { baseUrl } from '@/helper/helper'
import Image from 'next/image'
import React from 'react'

const RecentViewItem = () => {
  return (
    <div className="col-lg-3">
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
                src={`${baseUrl}front/images/feature-properties/01.jpg`}
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
            <a href="#">Vita Student Lewisham Exchange</a>
          </h3>
          <p>
            <a href="#">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
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

  )
}

export default RecentViewItem
