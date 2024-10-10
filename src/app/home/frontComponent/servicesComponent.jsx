import Image from 'next/image'
import React from 'react'

const ServicesComponent = () => {
  return (
    <div
    className="p-0 col-lg-3 col-sm-6 col-md-6 aos-init aos-animate"
    data-aos="fade-up"
    data-aos-delay={250}
  >
    <div className="single-featured-box">
      <div className="icon color-fb7756">
        <Image src="./front/images/verified-properties.jpg" alt=""  
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
  )
}

export default ServicesComponent
