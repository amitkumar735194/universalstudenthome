"use client";
import Link from 'next/link';
import React, { useEffect } from 'react'

const Footer = () => {

   
  return (
    <>
      <footer className="first-footer rec-pro">
  <div className="top-footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="netabout">
            <h3>Contact Info</h3>
            
            <p>
              This can be your gateway to trainer achievement and growing
              wonderful memories to be able to final your entire way of life in
              addition to offering you a room we want to help you attain
              fulfillment socially and on a personal level.
            </p>
          </div>
          <div className="contactus">
            <ul>
              <li>
                <div className="info">
                 
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <p className="in-p">
                    124 City Road, London, EC1V 2NX United Kingdom
                  </p>
                </div>
              </li>
              <li>
                <div className="info">
                 
                  <i className="fa fa-phone" aria-hidden="true" />
                  <p className="in-p">+442032394790</p>
                </div>
              </li>
              <li>
                <div className="info">
                 
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <p className="in-p ti">care@universalstudenthomes.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="navigation">
            <h3>Navigation</h3>
            <div className="nav-footer">
              <ul>
                <li>
                  <Link href="/home">Home</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Scholarship</Link>
                </li>
                <li>
                  <Link href="#">Community</Link>
                </li>
                <li>
                  <Link href="#">Cost Of Living</Link>
                </li>
              </ul>
              <ul className="nav-right">
                <li>
                  <Link href="#">Services</Link>
                </li>
                <li>
                  <Link href="#">List Your Property</Link>
                </li>
                <li>
                  <Link href="#">Student Ambassador</Link>
                </li>
                <li>
                  <Link href="#">Refer &amp; Earn</Link>
                </li>
                <li>
                  <Link href="#">Industry Report</Link>
                </li>
                <li>
                  <Link href="#">Our Partners</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="navigation">
            <h3>Help</h3>
            <div className="nav-footer">
              <ul>
                <li>
                  <Link href="/home/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="newsletters">
            <h3>Newsletters</h3>
            <p>
              Sign Up for Our Newsletter to get Latest Updates and Offers.
              Subscribe to receive news in your inbox.
            </p>
          </div>
          <form
            className="bloq-email mailchimp form-inline"
            method="post"
            noValidate={true}
          >
            <label htmlFor="subscribeEmail" className="error" />
            <div className="email">
              <input
                type="email"
                id="subscribeEmail"
                name="EMAIL"
                placeholder="Enter Your Email"
              />
              <input type="submit" defaultValue="Subscribe" />
              <p className="subscription-success" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="second-footer rec-pro">
    <div className="container-fluid sd-f">
      <p>2024 © universalstudenthomes | All Rights Reserved.</p>
      <ul className="netsocials">
        <li>
          <Link href="#">
            <i className="fa fa-facebook" aria-hidden="true" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="fa fa-twitter" aria-hidden="true" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="fab fa-instagram" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="fa fa-youtube" aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </div>
  </div>
</footer>
{/* ---------------------------------- */}
<a
  data-scroll=""
  href="#wrapper"
  className="go-up"
  style={{ display: "inline" }}
>
  <i className="fa fa-angle-double-up" aria-hidden="true" />
</a>

{/* ------------------------------------------------------------ */}
{/* <div className="login-and-register-form modal">
  <div className="main-overlay" />
  <div className="main-register-holder">
    <div className="main-register fl-wrap">
      <div className="close-reg">
        <i className="fa fa-times" />
      </div>
      <h3>
        Welcome to
        <span>
          Find<strong>Houses</strong>
        </span>
      </h3>
      <div className="soc-log fl-wrap">
        <p>Login</p>
        <a href="#" className="facebook-log">
          <i className="fa fa-facebook-official" />
          Log in with Facebook
        </a>
        <a href="#" className="twitter-log">
          <i className="fa fa-twitter" /> Log in with Twitter
        </a>
      </div>
      <div className="log-separator fl-wrap">
        <span>Or</span>
      </div>
      <div id="tabs-container">
        <ul className="tabs-menu">
          <li className="current">
            <a href="#tab-1">Login</a>
          </li>
          <li>
            <a href="#tab-2">Register</a>
          </li>
        </ul>
        <div className="tab">
          <div id="tab-1" className="tab-contents">
            <div className="custom-form">
              <form method="post" name="registerform" noValidate={true}>
                <label>Username or Email Address * </label>
                <input
                  name="email"
                  type="text"
                  onclick="this.select()"
                  defaultValue=""
                />
                <label>Password * </label>
                <input
                  name="password"
                  type="password"
                  onclick="this.select()"
                  defaultValue=""
                />
                <button type="submit" className="log-submit-btn">
                  <span>Log In</span>
                </button>
                <div className="clearfix" />
                <div className="filter-tags">
                  <input id="check-a" type="checkbox" name="check" />
                  <label htmlFor="check-a">Remember me</label>
                </div>
              </form>
              <div className="lost_password">
               
                <a href="#">Lost Your Password?</a>
              </div>
            </div>
          </div>
          <div className="tab">
            <div id="tab-2" className="tab-contents">
              <div className="custom-form">
                <form
                  method="post"
                  name="registerform"
                  className="main-register-form"
                  id="main-register-form2"
                  noValidate={true}
                >
                  <label>First Name * </label>
                  <input
                    name="name"
                    type="text"
                    onclick="this.select()"
                    defaultValue=""
                  />
                  <label>Second Name *</label>
                  <input
                    name="name2"
                    type="text"
                    onclick="this.select()"
                    defaultValue=""
                  />
                  <label>Email Address *</label>
                  <input
                    name="email"
                    type="text"
                    onclick="this.select()"
                    defaultValue=""
                  />
                  <label>Password *</label>
                  <input
                    name="password"
                    type="password"
                    onclick="this.select()"
                    defaultValue=""
                  />
                  <button type="submit" className="log-submit-btn">
                    <span>Register</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}



    </>
  )
}

export default Footer
