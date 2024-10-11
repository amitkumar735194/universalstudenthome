"use Clint";
import Image from "next/image";
import Header from "./frontComponent/layout/header";
import HomeBanner from "./frontComponent/layout/homeBanner";
import AfterBanner from "./frontComponent/homeComponent/afterBanner";
import TopCitySection from "./frontComponent/homeComponent/topCitySection";
import RecentView from "./frontComponent/homeComponent/recentViewSection";
import RecentViewSection from "./frontComponent/homeComponent/recentViewSection";
import PopularPropertiesSection from "./frontComponent/homeComponent/popularPropertiesSection";
import WhyStudentsLoved from "./frontComponent/homeComponent/whyStudentsloved";
import SneakPeekRooms from "./frontComponent/homeComponent/sneakPeekRooms";
import BookYourPlaceSection from "./frontComponent/homeComponent/bookYourPlaceSection";
// import WhatStudentsSaySection from "./frontComponent/homeComponent/whatStudentsSaySection";
import LatestNewsSection from "./frontComponent/homeComponent/latestNewsSection";
import RoomsCarousel from "./frontComponent/homeComponent/roomsCarousel";
import Footer from "./frontComponent/layout/footer";

const WhatStudentsSaySection =dynamic(()=>import('./frontComponent/homeComponent/whatStudentsSaySection'),{
      ssr: false,
    });

    // const RoomsCarousel =dynamic(()=>import('./frontComponent/homeComponent/roomsCarousel'),{
    //   ssr: false,
    // });
 
import dynamic from "next/dynamic";


export default function Home() {
  return (
    <main>
     
      <HomeBanner />
      <AfterBanner />
      <TopCitySection />
      <RecentViewSection />
      <PopularPropertiesSection />
      <WhyStudentsLoved /> 
      {/* <RoomsCarousel /> */}
      {/* <SneakPeekRooms /> */}
      <BookYourPlaceSection />
      <WhatStudentsSaySection />
      <LatestNewsSection />
      
       

       
    </main>
  );
}
