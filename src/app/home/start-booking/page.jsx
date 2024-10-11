"use client";
import React, { useEffect } from 'react'
import $ from 'jquery';
// import { baseUrl, loadScript } from '@helper/helper'; 
import { baseUrl ,loadScript} from '@/helper/helper';
import Image from 'next/image';

// import dynamic from 'next/dynamic';
// const SlickComponent = dynamic(() => import('./slickComponent'), {
//   ssr: false,  
// });

const StartBooking = () => {
 
    useEffect(()=>{
      console.log(baseUrl);
      loadScript(baseUrl+'front/js/wizard_script.js');

    });

        useEffect(() => {
          const handleScrollOrLoad = () => {
            const stickyLogo = $('#header #logo img').attr('data-sticky-logo');
            $("#header.cloned #logo img").attr("src", stickyLogo);
          };
      
          // Attach the scroll and load event handlers
          $(window).on('scroll load', handleScrollOrLoad);
      
          // Cleanup event listeners on component unmount
          return () => {
            $(window).off('scroll load', handleScrollOrLoad);
          };
 

            // Initialize the tab functionality
    $(".tabs_two li a").click(function (event) {
        event.preventDefault(); // Prevent the default link behavior
  
        // Active state for tabs
        $(".tabs_two li a").removeClass("active2");
        $(this).addClass("active2");
  
        // Active state for Tabs Content
        $(".tab_content_container > .tab_content_active")
          .removeClass("tab_content_active")
          .fadeOut(200);
        $($(this).attr("rel"))
          .fadeIn(500)
          .addClass("tab_content_active");
      });
  
      // Cleanup event listeners on component unmount
      return () => {
        $(".tabs_two li a").off("click");
      };


      
        }, []);


        
    // useEffect(() => {
    //     // Initialize Slick carousel
    //     if ($('.slick-lancers').length) {
    //     $('.slick-lancers').slick({
    //       infinite: false,
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //       dots: true,
    //       arrows: true,
    //       adaptiveHeight: true,
    //       responsive: [
    //         {
    //           breakpoint: 1292,
    //           settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             dots: true,
    //             arrows: false,
    //           },
    //         },
    //         {
    //           breakpoint: 993,
    //           settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             dots: true,
    //             arrows: false,
    //           },
    //         },
    //         {
    //           breakpoint: 769,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             dots: true,
    //             arrows: false,
    //           },
    //         },
    //       ],
    //     });
    //   }
    
    //     // Cleanup on component unmount
    //     return () => {
    //       if ($('.slick-lancers').slick) {
    //         $('.slick-lancers').slick('unslick');
    //       }
    //     };
    //   }, []);


  return (
    <div className="wrapper2">
        <div className="container-fluid">
            <div className="row">
                {/* left slide content start */}
                <div className="col-lg-3">
                    <div className="sidebar2">
                        <div className="review">
                        <div className="ra">
                            <ul>
                            <li>
                                <img src={`${baseUrl}front/images/review.png`}
                                alt="image"
                                 />
                                <h4>Nathan Fung</h4>
                                <div className="rating_121">
                               
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                </div>
                                <span>5 months ago</span>
                            </li>
                            </ul>
                        </div>
                        <div className="over_flow">
                            <p>
                            The host is lovely but the company is extremely money-driven. I
                            shortened my stay with my host and asked for a refund for the extra
                            days that I had paid. Throughout the process, they did NOT mention
                            anything about a cancellation fee. Then, they charged me $125 for
                            cancellation. I feel like I’m deceived by the intentional lack of
                            transparency of this company. Overall, a nice experience with the host
                            but a frustrating experience with the company itself. DO NOT choose
                            them and spare yourself from unnecessary hassles that add excessive
                            stress to an already-stressful experience.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div> 
                {/* left slide content End */}

                <div className="col-lg-9">
  <div className="main2">
    <ul className="navbar">
      <li>
        <a href="#" data-scroll="home">
          University
        </a>
      </li>
      <li>
        <a href="#" data-scroll="about-us">
          Check-in Month
        </a>
      </li>
      <li>
        <a href="#" data-scroll="service">
          Budget
        </a>
      </li>
      <li>
        <a href="#" data-scroll="solutions">
          Travel Time
        </a>
      </li>
      <li>
        <a href="#" data-scroll="products">
          Room Type
        </a>
      </li>
      <li>
        <a href="#" data-scroll="contact-us">
          Enquire Now
        </a>
      </li>
    </ul>
    <div id="home" className="block">
      <div className="row">
        <div className="col-lg-12">
          <h1>You’re off to which university?</h1>
        </div>
        <div className="col-lg-8">
          <div className="w-full mx-auto mb_70">
            <div className="search-input">
              <input type="text" placeholder="Type to search..." />
              <div className="autocom-box">
                {/* here list are inserted from javascript */}
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
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h2 className="mb_50">Most Popular universities</h2>
          <div className="tabbable-responsive">
            <div className="tabbable">
              <div
                className="scrtabs-tab-container"
                style={{ visibility: "visible" }}
              >
                <div
                  className="scrtabs-tab-scroll-arrow scrtabs-tab-scroll-arrow-left scrtabs-disable"
                  style={{ display: "none" }}
                >
                  <span className="" />
                </div>
                <div
                  className="scrtabs-tabs-fixed-container"
                  style={{ width: "899.594px" }}
                >
                  <div
                    className="scrtabs-tabs-movable-container"
                    style={{ width: "899.594px", transform: "translateX(0px)" }}
                  >
                    <ul
                      className="nav nav-tabs expanded"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item tab_33">
                        <a
                          className="nav-link"
                          id="first-tab"
                          data-toggle="tab"
                          href="#first"
                          role="tab"
                          aria-controls="first"
                          aria-selected="true"
                        >
                          <img src={`${baseUrl}front/images/united_kingdome.jpg`}
                          alt="image"
                           />
                          <span>United Kingdom</span>
                        </a>
                      </li>
                      <li className="nav-item tab_33">
                        
                        <a
                          className="nav-link"
                          id="second-tab"
                          data-toggle="tab"
                          href="#second"
                          role="tab"
                          aria-controls="second"
                          aria-selected="false"
                        >
                          <img src={`${baseUrl}front/images/australia.jpg`}
                          alt="image"
                           />
                          <span>Australia</span>
                        </a>
                      </li>
                      <li className="nav-item tab_33">
                        
                        <a
                          className="nav-link"
                          id="third-tab"
                          data-toggle="tab"
                          href="#third"
                          role="tab"
                          aria-controls="third"
                          aria-selected="false"
                        >
                          <img src={`${baseUrl}front/images/ireland.jpg`}
                          alt="image"
                          />
                          <span>Ireland</span>
                        </a>
                      </li>
                      <li className="nav-item tab_33">
                        
                        <a
                          className="nav-link"
                          id="fourth-tab"
                          data-toggle="tab"
                          href="#fourth"
                          role="tab"
                          aria-controls="fourth"
                          aria-selected="false"
                        >
                          <img src={`${baseUrl}front/images/new-zeland.jpg`}
                          alt="image"
                           />
                          <span>New Zealand</span>
                        </a>
                      </li>
                      <li className="nav-item tab_33">
                        
                        <a
                          className="nav-link"
                          id="fifth-tab"
                          data-toggle="tab"
                          href="#fifth"
                          role="tab"
                          aria-controls="fifth"
                          aria-selected="false"
                        >
                          <img src={`${baseUrl}front/images/netherlands.jpg`}
                          alt="image"
                           />
                          <span>Netherlands</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="scrtabs-tab-scroll-arrow scrtabs-tab-scroll-arrow-right"
                  style={{ display: "none" }}
                >
                  
                  <span className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="card-body" style={{ padding: 0 }}>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="first"
                role="tabpanel"
                aria-labelledby="first-tab"
              >
                {/* <h5 className="card-title">First Tab header</h5> */}
                <div className="row">
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i>
london</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="second"
                role="tabpanel"
                aria-labelledby="second-tab"
              >
                <div className="row">
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> brisbane</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="third"
                role="tabpanel"
                aria-labelledby="third-tab"
              >
                <div className="row">
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> brisbane</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*   <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="fourth"
                role="tabpanel"
                aria-labelledby="fourth-tab"
              >
                <div className="row">
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> brisbane</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="fifth"
                role="tabpanel"
                aria-labelledby="fifth-tab"
              >
                <div className="row">
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> brisbane</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/* <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box_fdi">
                      <div className="wi_icon">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="pa_gr">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        {/*  <div className="location_df"><i className="fa fa-map-marker" aria-hidden="true"></i> melbourne</div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <a href="#" className="letsget-started">
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about-us" className="block">
      {/*      <h2>Check-in Month</h2> */}
      <div className="row">
        <div className="col-lg-12">
          <h2 className="mb_70">Check-in Month</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="check-in-month">
            <div className="row">
              <div className="col-lg-6">
                <label className="text-white">Select Months</label>
                <select>
                  <option name="" value="" style={{ display: "none" }}>
                    Select Months
                  </option>
                  <option name="January" value="Jan">
                    January
                  </option>
                  <option name="February" value="Feb">
                    February
                  </option>
                  <option name="March" value="Mar">
                    March
                  </option>
                  <option name="April" value="Apr">
                    April
                  </option>
                  <option name="May" value="May">
                    May
                  </option>
                  <option name="June" value="Jun">
                    June
                  </option>
                  <option name="July" value="Jul">
                    July
                  </option>
                  <option name="August" value="Aug">
                    August
                  </option>
                  <option name="September" value="Sep">
                    September
                  </option>
                  <option name="October" value="Oct">
                    October
                  </option>
                  <option name="November" value="Nov">
                    November
                  </option>
                  <option name="December" value="Dec">
                    December
                  </option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="text-white">Select Academic year</label>
                <select>
                  <option name="" value="" style={{ display: "none" }}>
                    Academic year
                  </option>
                  <option name="January" value="">
                    2024 to 2025
                  </option>
                  <option name="February" value="">
                    2025 to 2026
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4" />
        <div className="col-lg-2" style={{ marginTop: 100 }}>
          <a href="#" className="letsget-started">
            Next
          </a>
        </div>
      </div>
    </div>
    <div id="service" className="block">
      {/* <h2>Budget</h2> */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 mb_50">
            <h1>What budget range are you looking at?</h1>
            <p>Select budget (Price range in A$)</p>
          </div>
          <div className="col-lg-4">
            <div className="clender_outer">
              <i className="fa fa-calendar" />
              Monthly
            </div>
          </div>
          <div className="col-lg-6">
            <div className="filter_price">
              <div className="price-input">
                <div className="field">
                  <span>Min</span>
                  <input type="number" className="input-min" defaultValue={0} />
                </div>
                <div className="separator">-</div>
                <div className="field">
                  <span>Max</span>
                  <input
                    type="number"
                    className="input-max"
                    defaultValue={7500}
                  />
                </div>
              </div>
              <div className="slider">
                <div className="progress" />
              </div>
              <div className="range-input">
                <input
                  type="range"
                  className="range-min"
                  min={0}
                  max={10000}
                  defaultValue={2500}
                  step={100}
                />
                <input
                  type="range"
                  className="range-max"
                  min={0}
                  max={10000}
                  defaultValue={7500}
                  step={100}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-2" />
          <div className="col-lg-2">
            <a href="#" className="letsget-started">
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="solutions" className="block">
      {/*  <h2>Travel Time</h2> */}
      <div className="row align-items-center">
        <div className="col-lg-12">
          <h1>How much travel time is cool with you?</h1>
          <p>Choose travel time for at least 1 of the below</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="slidecontainer">
            <div style={{ float: "left" }}> Min 15 </div>
            <div style={{ float: "right" }}> Max 65 </div>
            <input
              type="range"
              min={0}
              max={65}
              defaultValue="0"
              className="slider2"
              id="myRange"
            />
            <div>
              <div className="tieme">
                
                <strong>Travel Time :</strong> <span id="demo">0</span> min
              </div>
              <div className="checkbox">
                <label className="checkbox-wrapper">
                  <input type="checkbox" className="checkbox-input" />
                  <span className="checkbox-tile">
                    
                    <span className="checkbox-icon">
                      
                      <img src={`${baseUrl}front/images/bus2.png`}
                      alt="image"
                      />
                    </span>
                    <span className="checkbox-label">Public Transport</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4" />
        <div className="col-lg-8">
          <div className="slidecontainer">
            <div style={{ float: "left" }}> Min 15 </div>
            <div style={{ float: "right" }}>Max 235 </div>
            <input
              type="range"
              min={0}
              max={235}
              defaultValue="0"
              className="slider2"
              id="myWalkin"
            />
            <div>
              <div className="tieme">
                
                <strong>Travel Time :</strong> <span id="demo" /> min
              </div>
              <div className="checkbox">
                <label className="checkbox-wrapper">
                  <input type="checkbox" className="checkbox-input" />
                  <span className="checkbox-tile">
                    
                    <span className="checkbox-icon">
                      
                      <img src={`${baseUrl}front/images/walking.png`}
                      alt="image"
                       />
                    </span>
                    <span className="checkbox-label">On Foot</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4" />
        <div className="col-lg-2">
          <a href="#" className="letsget-started">
            Next
          </a>
        </div>
      </div>
    </div>
      {/* slick */}
      
    <div id="studio" className="block">
      <div className="row">
        <div className="col-lg-12">
          <h2>Select your room preferences (2/2)</h2>
          <div className="mt-5 mb_50">
            <span className="vendor-name2 ribbon">Pick your roomie</span>
          </div>
        </div>
        {/* <div className="col-lg-4">dsfsdf</div>

<div className="col-lg-4">dsfsdf</div> */}
        <div className="box2">
          <ul id="first-list">
            <li>
              <span />
              <div className="title">Same Partner - Male</div>
              <div className="info">
                <img src={`${baseUrl}front/images/same_partner.png`}
                alt="image"
                 
              />
              </div>
              {/* <div className="name">- dr. mohamed -</div>
              <div className="time">
                  <span>JUN, 17<sup>th</sup></span>
                  <span>12:00 AM</span>
              </div> */}
            </li>
            <li>
              <span />
              <div className="title">Male - Female Partner</div>
              <div className="info">
                <img src={`${baseUrl}front/images/male_female_partern.png`}
                alt="image"
                />
              </div>
            </li>
             
          </ul>
        </div>
        <div className="col-lg-4" />
        <div className="col-lg-2">
          <a href="#" className="letsget-started">
            Next
          </a>
        </div>
      </div>
    </div>
    <div id="contact-us" className="block">
      <h2 className="mb_50">Enquire Now</h2>
      <div className="row">
        <div className="col-lg-12">
          <div className="shadow-lg mb_50 box_2">
            <div className="text-center drop">Stucents Love Us</div>
            <div className="text-center listing-rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <p className="text-center">
              Based upon your preferences, we have found 20 properties matching
              your criteria.
            </p>
            <div className="agent-contact-form-sidebar">
              <form name="contact_form" method="" action="">
                <div className="row">
                  <div className="col-lg-4">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      required=""
                    />
                  </div>
                  {/*  <div className="col-lg-4"><input type="text" name="last-name" placeholder="Last Name"></div> */}
                  <div className="col-lg-4">
                    {/*  <input type="number" name="phone_number" placeholder="Phone Number" value="+91 "> */}
                    <input
                      type="text"
                      id="mobile_code"
                      placeholder="Phone Number"
                      name="name"
                    />
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="email"
                      name="email_address"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-lg-4">
                    <select className="select" style={{ display: "none" }}>
                      <option>Select Nationality</option>
                      <option value="indian">Indian</option>
                      <option value="british">British</option>
                      <option value="chinese">Chinese</option>
                      <option value="irish">Irish</option>
                      <option value="nigerien">Nigerien</option>
                      <optgroup label="OTHER NATIONALITIES" />
                      <option value="afghan">Afghan</option>
                      <option value="albanian">Albanian</option>
                      <option value="algerian">Algerian</option>
                      <option value="american">American</option>
                      <option value="andorran">Andorran</option>
                    </select>
                  </div>
                  <div className="col-lg-4">
                    <div className="nice-select select" tabIndex={0}>
                      <span className="current">Select Nationality</span>
                      <ul className="list">
                        <li
                          data-value="Select Nationality"
                          className="option selected focus"
                        >
                          Select Nationality
                        </li>
                        <li data-value="indian" className="option">
                          Indian
                        </li>
                        <li data-value="british" className="option">
                          British
                        </li>
                        <li data-value="chinese" className="option">
                          Chinese
                        </li>
                        <li data-value="irish" className="option">
                          Irish
                        </li>
                        <li data-value="nigerien" className="option">
                          Nigerien
                        </li>
                        <li data-value="afghan" className="option">
                          Afghan
                        </li>
                        <li data-value="albanian" className="option">
                          Albanian
                        </li>
                        <li data-value="algerian" className="option">
                          Algerian
                        </li>
                        <li data-value="american" className="option">
                          American
                        </li>
                        <li data-value="andorran" className="option">
                          Andorran
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group location">
                      <div
                        className="nice-select form-control wide"
                        tabIndex={0}
                      >
                        
                        <span className="current">Select University</span>
                        <ul className="list">
                          <li data-value={1} className="option selected focus">
                            
                            <i className="fa fa-graduation-cap" /> King&apos;s
                            College London (KCl)
                            <span>London, United Kingdom</span>
                          </li>
                          <li data-value={2} className="option">
                            
                            <i className="fa fa-graduation-cap" />
                            University College London (UCL)
                            <span>London, United Kingdom</span>
                          </li>
                          <li data-value={3} className="option">
                            <i className="fa fa-graduation-cap" />
                            University of Westminster
                            <span>London, United Kingdom</span>
                          </li>
                          <li data-value={3} className="option">
                            <i className="fa fa-graduation-cap" />
                            University of East London
                            <span>London, United Kingdom</span>
                          </li>
                          <li data-value={3} className="option">
                            <i className="fa fa-graduation-cap" />
                            Queen Mary University of London (QMUL)
                            <span>London, United Kingdom</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      placeholder="Message"
                      name="message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-lg-12">
                    <p className="not">
                      By submitting, you agree to our
                      <a href="#">Privacy Policy</a> and
                      <a href="#">Terms &amp; Conditions</a>
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center update_on">
                      Get updates on <i className="fa fa-whatsapp" /> WhatsApp
                      <button
                        type="button"
                        className="btn btn-xs btn-toggle active"
                        data-toggle="button"
                        aria-pressed="true"
                        autoComplete="off"
                      >
                        <div className="handle" />
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-4">
                    <input
                      type="submit"
                      name="sendmessage"
                      className="multiple-send-message"
                      defaultValue="Explore Properties"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{/* end right section */}

            </div>
        </div>
    </div>
  )
}

export default StartBooking
