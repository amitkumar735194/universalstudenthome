import Link from 'next/link'
import React from 'react'

const ContactUs = () => {
  return (
     
      
    <>
    <div className="clearfix" />
    {/* STAR HEADER SEARCH */}
    <section className="breadcrumb">
      <div className="container-fluid">
        <ul className="breadcrumb2">
          <li>
            <Link href="/">Home</Link>
          </li>
          {/*   <li><a href="#">United Kingdom</a></li> */}
          <li className="active">Contact Us</li>
        </ul>
      </div>
    </section>

    <section className="contact-us">
  <div className="container">
    <div className="mb-5 property-location">
      <h3>Our Location</h3>
      <div className="divider-fade" />
      <div id="map-contact" className="contact-map" />
    </div>
    <div className="row">
      <div className="col-lg-8 col-md-12">
        <h3 className="mb-4">Contact Us</h3>
        <form
          id="contactform"
          className="contact-form"
          name="contactform"
          method="post"
          noValidate=""
        >
          <div id="success" className="successform">
            <p className="alert alert-success font-weight-bold" role="alert">
              Your message was sent successfully!
            </p>
          </div>
          <div id="error" className="errorform">
            <p>
              Something went wrong, try refreshing and submitting the form
              again.
            </p>
          </div>
          <div className="form-group">
            <input
              type="text"
              required=""
              className="form-control input-custom input-full"
              name="name"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              required=""
              className="form-control input-custom input-full"
              name="lastname"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control input-custom input-full"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control textarea-custom input-full"
              id="ccomment"
              name="message"
              required=""
              rows={8}
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            id="submit-contact"
            className="btn btn-primary btn-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="col-lg-4 col-md-12 bgc">
        <div className="call-info">
          <h3>Contact Details</h3>
          <p className="mb-5">
            Please find below contact details and contact us today!
          </p>
          <ul>
            <li>
              <div className="info">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <p className="in-p">95 South Park Ave, USA</p>
              </div>
            </li>
            <li>
              <div className="info">
                <i className="fa fa-phone" aria-hidden="true" />
                <p className="in-p">+456 875 369 208</p>
              </div>
            </li>
            <li>
              <div className="info">
                <i className="fa fa-envelope" aria-hidden="true" />
                <p className="in-p ti">support@findhouses.com</p>
              </div>
            </li>
            <li>
              <div className="info cll">
                <i className="fa fa-clock-o" aria-hidden="true" />
                <p className="in-p ti">8:00 a.m - 9:00 p.m</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>




  </>
  

   
  )
}

export default ContactUs
