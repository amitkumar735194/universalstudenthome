"use client";
import Link from 'next/link';
// import React, { useEffect } from 'react'
import HeaderSearchModel from './headerSearchModel'
import { baseUrl } from '@/helper/helper';
import { useEffect } from 'react'; 
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () => {

  const router = useRouter();
  useEffect(()=>{
    $('li a').on('click', function(e) { 
      e.preventDefault(); // Prevents the default link behavior
      const href = $(this).attr('href');

      // Use Next.js router to navigate
      router.push(href);
    });

    return () => {
      $('li a').off('click');
    };

  },[router])

  useEffect(() => {
    const $wsNavToggle = $('#wsnavtoggle');
    const $wsMenuContainer = $('.wsmenucontainer');

    const handleClick = (e) => {
      $wsMenuContainer.toggleClass('wsoffcanvasopener');
    };

    $wsNavToggle.on('click', handleClick);

    // Cleanup function to remove the event listener
    return () => {
      $wsNavToggle.off('click', handleClick);
    };
  }, []);

 


  
  const handleClick2 = (e) => {
    e.preventDefault();
    console.log('Cloned element clicked');
  };

  return (
    <>
    <header id="header-container" className="header head-tr">
    <div id="header" className="head-tr bottom">
      <div className="container-fluid">
        <div className="left-side">
          <div id="logo">
            <Link href="/">
              <img
                src={`${baseUrl}front/images/logo.png`}
                data-sticky-logo="images/logo.png"
                alt="image"
                 
              />
            </Link>
          </div>
          {/* ===========================search========================== */}
          <div className="w-full mx-auto search_bar dropdown-filter-header">
            {/* <div className="search-input rld-main-search"> */}
            <div className="search-input ">
              <input type="text" placeholder="Type to search..." />
        

              <div className="autocom-box "> 
                {/* <HeaderSearchModel /> */}
              </div>
              <div className="icon">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
            </div>
          </div>
          

          {/* =============================search=================end========== */}
          <div className="mmenu-trigger"> </div>
          <div className="clearfix wsmenucontainer">
            <div className="overlapblackbg" />
            <div className="clearfix wsmobileheader">
              
              <a id="wsnavtoggle" className="animated-arrow">
                <span />
              </a>
            </div>
            <div className="headerfull">
              {/*Main Menu HTML Code*/}
              <div className="wsmain">
                <nav className="clearfix wsmenu">
                  <ul className="mobile-sub wsmenu-list">
                    <li>
                      <a href="#">Student Guide</a>
                    </li>
                    <li>
                      <Link href="/home/find-my-spot">Find my Spot</Link>
                    </li>
                    <li>
                      <a href="#"> Services </a>
                     
                    </li>
                    <li>
                      <a href="#">Student Discounts</a>
                    </li>
                    <li>
                      <Link href="/home/p/list">List Your Property</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="right_panel">
          <div className="right-side">
            <div className="header-widget">
              
              <a href="#" className="border button refer">
                <i className="fa fa-share-alt" /> Refer &amp; Earn
              </a>
            </div>
          </div>
          <div className="header-widget sign-in">
            <div className="">
              <a href="#" className="border button">
                <i className="far fa-user" /> Login
              </a>
            </div>
          </div>
        </div>
        <div className="ContactPopper_container__qAROr">
          <a
            href="https://api.whatsapp.com/send?phone=+442032394790&text="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp" />
          </a>
          <i className="fa fa-phone" />
        </div>
      </div>
    </div>
    <div className="clearfix" />

 
   

  </header>
  </>
  )
}

export default Header
