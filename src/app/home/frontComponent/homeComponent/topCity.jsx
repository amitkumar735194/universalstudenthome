import { baseUrl } from '@/helper/helper'
import Image from 'next/image'
import React from 'react'

const TopCity = ({data}) => {
  return (
    <div
      className="pr-1 col-lg-3 col-md-6 aos-init aos-animate"
      data-aos="zoom-in"
      data-aos-delay={150}
    >
  <a href={`${baseUrl}home/property/${data.slug}`} className="img-box hover-effect">
    <Image
      src={`${baseUrl}${data.image}`}
      className="img-responsive" 
      alt=""
      layout="fill"  
      objectFit="cover"  
      sizes="100vw"
    />
    <div className="visible img-box-content">
      <h4 className="mb-2">{data.name}</h4>
      <span>{data.propertyCount} Properties</span>
      <ul className="mt-2 text-center starts expanded">
        <li> 
          <i className={`fa fa-star ${data.review>=1?'selected_review':''}`} />
        </li>
        <li>
          
          <i className={`fa fa-star ${data.review>=2?'selected_review':''}`} />
        </li>
        <li>
          
          <i className={`fa fa-star ${data.review>=3?'selected_review':''}`} />
        </li>
        <li>
          
          <i className={`fa fa-star ${data.review>=4?'selected_review':''}`} />
        </li>
        <li>
          
          <i className={`fa fa-star ${data.review>=5?'selected_review':''}`} />
        </li>
      </ul>
    </div>
  </a>
</div>

  )
}

export default TopCity
