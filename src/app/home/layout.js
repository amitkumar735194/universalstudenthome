"use client"
 
import "../globals.css"; 
import Header from "./frontComponent/layout/header.jsx";
import Footer from "./frontComponent/layout/footer.jsx";
import { useEffect, useLayoutEffect } from "react";
import Script from "next/script";
import $ from 'jquery';
//  import '../slick.min.js'
// import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

 
// import dynamic from 'next/dynamic';
// const SlickCarousel = dynamic(() => import('../slick.min.js'), {
//   ssr: false, // This ensures the library is not loaded during SSR
// });
 
 
 
import {baseUrl} from '../../helper/helper.js';




        // import '../../public/front/css/jquery-ui.css'; 
import '../../../public/front/css/fontawesome-all.min.css'; 
import '../../../public/front/css/fontawesome-5-all.min.css'; 
import '../../../public/front/css/font-awesome.min.css'; 
import '../../../public/front/css/leaflet.css'; 
import '../../../public/front/css/leaflet-gesture-handling.min.css'; 
import '../../../public/front/css/leaflet.markercluster.css'; 
import '../../../public/front/css/leaflet.markercluster.default.css'; 
import '../../../public/front/css/search.css'; 
import '../../../public/front/css/animate.css'; 
// import '../../public/front/css/aos.css'; 
// import '../../public/front/css/aos2.css'; 
import '../../../public/front/css/magnific-popup.css'; 
import '../../../public/front/css/lightcase.css'; 
// import '../../../public/front/css/owl.carousel.min.css'; 
import '../../../public/front/css/bootstrap.min.css'; 
import '../../../public/front/css/menu.css'; 
import '../../../public/front/css/styles.css'; 
import '../../../public/front/css/maps.css'; 
import '../../../public/front/css/colors/pink.css'; 
import '../../../public/front/css/marquee.css'; 
import '../../../public/front/css/category_tab.css'; 
import '../../../public/front/css/webslidemenu.css'; 
import '../../../public/front/css/vertical_tab.css'; 
import '../../../public/front/css/tab.css'; 

import '../../../public/front/css/wizard.css'; 
// import '../../public/front/css/intlTelInput.css'; 


 

// export const metadata = {
//   title: "Best Student Accommodation in UK from Universal Student Homes",
//   description: "Best Student Accommodation in UK from Universal Student Homes",
// };

export default function RootLayout({ children }) {

  useLayoutEffect(()=>{

    const loadScript = (src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      };
  

},[])
 

useEffect(() => {
  // This code only runs in the browser
  console.log('Is window defined?',  window);
  if (typeof window !== 'undefined') {
      window.jQuery = $;
      window.$ = $;

      $(document).ready(() => {
          console.log('jQuery is ready and window is defined.');
      });
  }
}, []);

useEffect(()=>{
  $(document).on('click', 'li', function(){
    $('li').removeClass('active');
    $('ul').toggleClass('expanded');
    $(this).addClass('active');
    var tab_id = $(this).attr('data-tab');
    $('.tab-content2').removeClass('current');
    $(this).addClass('current');
    $('#'+tab_id).addClass('current');
  });


   
},[])
// $.noConflict();
  return (
    <html lang="en">

<head>
          {/* Local CSS files */}
          <link rel="shortcut icon" type="image/x-icon" href="/front/favicon.ico"></link> 
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i%7CMontserrat:600,800"
            rel="stylesheet"
          />

        <link rel="stylesheet" type="text/css" media="all" href="./front/css/wizard.css" />
        <link rel='stylesheet' href='./front/css/intlTelInput.css' />
        {/* <style type="text/css">
          body { padding-top: 1px!important; }
        </style> */}
        <link rel="stylesheet" href="./front/css/owl.carousel.min.css" /> 
        </head>


      <body className="homepage-6 homepage-9 hp-6 hp1 mh">
      <div id="wrapper"> 
          <Header />  
      </div> 
        {children} 
        <Footer />
        
          {/* Load external scripts using Next.js Script */}
          <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="afterInteractive" />


        <Script src="/front/js/jquery-3.4.1.min.js" strategy="lazyOnload" />
        <Script src="/front/js/rangeSlider.js" strategy="lazyOnload" />
        <Script src="/front/js/tether.min.js" strategy="lazyOnload" />
        <Script src="/front/js/moment.js" strategy="lazyOnload" />
        <Script src="/front/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/front/js/mmenu.min.js" strategy="lazyOnload" />
        <Script src="/front/js/mmenu.js" strategy="lazyOnload" />
        <Script src="/front/js/fitvids.js" strategy="lazyOnload" />
        <Script src="/front/js/jquery.waypoints.min.js" strategy="lazyOnload" />
        <Script src="/front/js/typed.min.js" strategy="lazyOnload" />
        <Script src="/front/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/front/js/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/front/js/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/front/js/smooth-scroll.min.js" strategy="lazyOnload" />
        <Script src="/front/js/lightcase.js" strategy="lazyOnload" />
        <Script src="/front/js/search.js" strategy="lazyOnload" />
        <Script src="/front/js/owl.carousel.js" strategy="lazyOnload" />
        <Script src="/front/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/front/js/ajaxchimp.min.js" strategy="lazyOnload" />
        <Script src="/front/js/jquery.form.js" strategy="lazyOnload" />
        <Script src="/front/js/jquery.validate.min.js" strategy="lazyOnload" />
        <Script src="/front/js/searched.js" strategy="lazyOnload" />
        <Script src="/front/js/forms-2.js" strategy="lazyOnload" />
        <Script src="/front/js/leaflet.js" strategy="lazyOnload" />
        <Script src="/front/js/leaflet.markercluster.js" strategy="lazyOnload" />
        <Script src="/front/js/map-style2.js" strategy="lazyOnload" />
        <Script src="/front/js/range.js" strategy="lazyOnload" />
        <Script src="/front/js/webslidemenu.js" strategy="lazyOnload" />
        <Script src="/front/revolution/js/jquery.themepunch.tools.min.js" strategy="lazyOnload" />
        <Script src="/front/revolution/js/jquery.themepunch.revolution.min.js" strategy="lazyOnload" />
        <Script src="/front/js/tab.js" strategy="lazyOnload" />

        </body>
    </html>
  );
}
