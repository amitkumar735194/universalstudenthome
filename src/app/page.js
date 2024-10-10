"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const HomePage = () => {
  

  const router = useRouter();

  useEffect(()=>{
    router.push('/home');
  },[router]);


  return (
    
    <div>
      {/* <h1>gg</h1> */}
    </div>
  )
}

export default HomePage
