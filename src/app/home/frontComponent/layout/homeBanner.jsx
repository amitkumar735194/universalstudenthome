"use client";
import React, { useEffect } from "react";
import $ from "jquery";
import BannerTabContent from "../homeComponent/bannerTabContent";

const HomeBanner = () => {
  useEffect(() => {
    // $('.slick-lancers2').slick({
    //     infinite: false,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     dots: true,
    //     arrows: true,
    //     adaptiveHeight: true,
    //     responsive: [{
    //         breakpoint: 1292,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             dots: true,
    //             arrows: false
    //         }
    //     }, {
    //         breakpoint: 993,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             dots: true,
    //             arrows: false
    //         }
    //     }, {
    //         breakpoint: 769,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             dots: true,
    //             arrows: false
    //         }
    //     }]
    // });

    // // =================================================================================

    // $('.slick-lancers').slick({
    //     infinite: false,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     dots: true,
    //     arrows: true,
    //     adaptiveHeight: true,
    //     responsive: [{
    //         breakpoint: 1292,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             dots: true,
    //             arrows: false
    //         }
    //     }, {
    //         breakpoint: 993,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             dots: true,
    //             arrows: false
    //         }
    //     }, {
    //         breakpoint: 769,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             dots: true,
    //             arrows: false
    //         }
    //     }]
    // });

    // ==============================================================================================

    $(".dropdown-filter").on("click", function() {
      $(".explore__form-checkbox-list").toggleClass("filter-block");
    });

    const handleClick = () => {
      console.log("filter-block");
      $(".explore__form-checkbox-list").toggleClass("filter-block");
    };

    $(".dropdown-filter").on("click", handleClick);

    
    // Function to handle clicks outside the dropdown
    const handleOutsideClick = (event) => {
        // Check if the click is outside the .dropdown-filter and its child elements
        if (
          !$(event.target).closest('.dropdown-filter').length &&
          !$(event.target).closest('.explore__form-checkbox-list').length &&
          $(".explore__form-checkbox-list").hasClass("filter-block")
        ) {
          $(".explore__form-checkbox-list").removeClass("filter-block");
        }
      };
  
      // Attach the outside click event listener
      $(document).on("click", handleOutsideClick);
  
    // Cleanup event listener on component unmount
    return () => {
      $(".dropdown-filter").off("click", handleClick);
      $(document).off("click", handleOutsideClick);
    };

    // ==================================================================================

    $(document).on("click", "li", function() {
      $("li").removeClass("active");
      $("ul").toggleClass("expanded");
      $(this).addClass("active");
      var tab_id = $(this).attr("data-tab");
      $(".tab-content2").removeClass("current");
      $(this).addClass("current");
      $("#" + tab_id).addClass("current");
    });

    //   ===============================================================================
  }, []);

  useEffect(() => {
    $(".tabs_two li a").click(function() {
      // Active state for tabs
      $(".tabs_two li a").removeClass("active");
      $(this).addClass("active");

      // Active state for Tabs Content
      $(".tab_content_container > .tab_content_active")
        .removeClass("tab_content_active")
        .fadeOut(200);
      $(this.rel).fadeIn(500).addClass("tab_content_active");
    });
  }, []);

  return (
    <section
      id="hero-area"
      className="parallax-searchs home15 overlay thome-6"
      data-stellar-background-ratio="0.5"
    >
      <div className="hero-main">
        <div
          className="container-fluid aos-init aos-animate"
          data-aos="zoom-in"
        >
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="hero-inner">
                {/* Welcome Text */}
                <div className="welcome-text">
                  <h1 className="h1">
                    Find Your Perfect Student Accommodation near your university
                  </h1>
                  <p className="mt-2">
                    Find your perfect student accommodation, close to university
                    &amp; close to life
                  </p>
                </div>
                <div className="mobile_img">
                  <img src="front/images/slider/mobile_slider.png" alt="" />
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="banner-search-wrap">
                      <div className="tab-content">
                        <div className="tab-pane fade show active">
                          <div className="rld-main-search">
                            <div className="row">
                              {/* <div class="rld-single-input">
                                                      <input type="text" placeholder="Enter Keyword...">
                                                  </div> */}
                              <div className="col-lg-11 col-sm-11 col-10">
                                <div className="dropdown-filter">
                                  {/* <span>Advanced Search</span> */}
                                  <div className="rld-single-input">
                                    <input
                                      type="text"
                                      placeholder="Search by City, University or Property"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-1 col-sm-1 col-2">
                                <a className="btn-yellow" href="#">
                                  <i className="fa fa-search" />
                                </a>
                              </div>
                              <div className="clearfix" />
                              <div className="pl-0 col-xl-3 col-lg-3 col-md-3">
                                <div className="rating_1">
                                  <img
                                    src="front/images/trustpilot-rating.svg"
                                    data-testid=""
                                  />
                                </div>
                              </div>
                              <div className="pl-0 col-xl-9 col-lg-9 col-md-9">
                                <div className="insights-module__insightDesktop">
                                  <span className="insights-module__titleDesktop">
                                    4.8/5 on Trustpilot
                                  </span>
                                  <span className="insights-module__subtitleDesktop">
                                    5000+ students have rated us excellent for
                                    our services.
                                  </span>
                                </div>
                              </div>
                              <div className="clearfix" />
                              <div className="pl-0 col-lg-4">
                                <div className="video-reviews">
                                  <span>Video Reviews</span>
                                </div>
                              </div>
                              <div className="explore__form-checkbox-list full-filter">
                                {/* =======================tab-section-open============== */}
                                <div className="tabs_two">
                                  <ul className="space-x-1 expanded">
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent1"
                                        className="active"
                                      >
                                        <img src="front/images/flag/uk.jpg" />
                                        UK
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent2"
                                        className=""
                                      >
                                        <img src="front/images/flag/aus.jpg" />
                                        AUS
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent3"
                                        className=""
                                      >
                                        <img src="front/images/flag/irl.jpg" />
                                        IRL
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent4"
                                        className=""
                                      >
                                        <img src="front/images/flag/can.jpg" />
                                        CAN
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent5"
                                        className=""
                                      >
                                        <img src="front/images/flag/usa.jpg" />
                                        USA
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#" onClick={(e) => e.preventDefault()}
                                        rel="#tabcontent6"
                                        className=""
                                      >
                                        <img src="front/images/flag/ger.jpg" />
                                        GER
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab_content_container">
                                   <BannerTabContent tabNumber={'1'} />
                                   <BannerTabContent tabNumber={'2'} />
                                   <BannerTabContent tabNumber={'3'} />
                                   <BannerTabContent tabNumber={'4'} />
                                   <BannerTabContent tabNumber={'5'} />
                                   <BannerTabContent tabNumber={'6'} /> 
                                  {/* <div className="tab_content" id="tabcontent2">
                                    <h3>2 Why do we use ?</h3>
                                    <p>
                                      It is a long established fact that a
                                      reader will be distracted by the readable
                                      content of a page when looking at its
                                      layout.
                                    </p>
                                  </div>
                                  <div className="tab_content" id="tabcontent3">
                                    <h3>3 Where does it come from ?</h3>
                                    <p>
                                      Contrary to popular belief, Lorem Ipsum is
                                      not simply random text. It has roots in a
                                      piece of classical Latin literature
                                    </p>
                                  </div>
                                  <div className="tab_content" id="tabcontent4">
                                    <h3>4 Where can I get some ?</h3>
                                    <p>
                                      There are many variations of passages of
                                      Lorem Ipsum available, but the majority
                                      have suffered alteration in some
                                    </p>
                                  </div>
                                  <div className="tab_content" id="tabcontent5">
                                    <h3>5 What Is Loren Ipsum ?</h3>
                                    <p>Lorem Ipsum </p>
                                  </div>
                                  <div className="tab_content" id="tabcontent6">
                                    <h3>6 What Is Loren Ipsum ?</h3>
                                    <p>Lorem Ipsum </p>
                                  </div> */}
                                </div>
                                {/* =====================teb-section-end====================== */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
