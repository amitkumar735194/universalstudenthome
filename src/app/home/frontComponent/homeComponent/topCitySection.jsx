"use client"
import React ,{ useEffect, useState } from 'react'
import TopCity from './topCity' 
import { baseUrl } from '@/helper/helper';

const TopCitySection = () => {

  const [topCity, setTopCity] =  useState(null);

  useEffect(()=>{
    fetch(baseUrl+'api/front/get-top-city',{
      method:"GET", 
    }).then((response)=>{

      if(!response.ok){
        throw new Error('Next work issue');
      }

      return response.json();
    }).then(data=>{
       if(data.status){
        setTopCity(data.data.cities);
       }
    })
  },[])
  return (
    <section className="visited-cities bg-white-1 rec-pro">
    <div className="container-fluid">
      <div className="sec-title">
        <h2>
          <span>Top </span>Cities
        </h2>
        <p>
          We help you find your perfect student home in 400+ cities across the
          world.
        </p>
      </div>
      <div className="row">
        <div className="col-md-12"> </div>
        {topCity && topCity.map((city, index)=>(
          <TopCity data={city} key={index}/> 
        ))}
        {/* <TopCity />
        <TopCity />
        <TopCity />
        <TopCity />
        <TopCity />
        <TopCity />
        <TopCity />
        <TopCity /> */}
      </div>
    </div>
  </section>
  

  )
}

export default TopCitySection
