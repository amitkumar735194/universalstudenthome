"use client";
import { baseUrl } from '@/helper/helper'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useReducer, useState } from 'react'

const AdminLogin = () => {

  const [loginData, setLoginData] = useState({
    username : '',
    password : '',
  });
  
  const [errors, setErrors] =useState({
    username : '',
    password : '',
  });

  const navigator = useRouter();


  const updateLoginData =(e)=>{

    const {name, value} = e.target; 
    setLoginData((loginData) => ({
      ...loginData,
      [name] :value
    }));
    
  }

  const  submitLogin= (e)=>{
    e.preventDefault();

    setErrors({ 
      username: '',
      password: '',
    });
    $('.loaderouter').css('display','flex');
    fetch(baseUrl+'api/admin/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(loginData)

    }).then((response)=>{

      if(!response.ok){
        $('.loaderouter').css('display','none');
        throw new Error('Network Issue');
      }

      return response.json();

    }).then((data)=>{
      console.log(data);
      $('.loaderouter').css('display','none');

      if(!data.status && data.code ==400){
        
        if('username' in data.errors){
          setErrors((errors)=>({
            ...errors, 
            username: data.errors.username,
          }));
        }

        if('password' in data.errors){ 
          setErrors((errors)=>({
            ...errors, 
            password:  data.errors.password,
          }));
        }
        
      }else if(data.status){
          navigator.push('/admin')
      }
        
    }).catch(error=>{
      $('.loaderouter').css('display','none'); 
      console.log('error '+ error);
    })
    
  }

  

  return (
    
    <> 
        <head>
        <title>Admin Login</title>
        {/* <link href={`${baseUrl}/admins/assets/css/icons.min.css`} rel="stylesheet" type="text/css" /> */}
        <link rel="shortcut icon" type="image/x-icon" href={`${baseUrl}/admins/favicon.ico`} />
 
        <link rel="stylesheet" href={`${baseUrl}admins/assets/css/preloader.min.css`} type="text/css" /> 
        <link href={`${baseUrl}admins/assets/css/bootstrap.min.css`} id="bootstrap-style" rel="stylesheet" type="text/css" /> 
        <link href={`${baseUrl}admins/assets/css/icons.min.css`} rel="stylesheet" type="text/css" />
        <link href={`${baseUrl}admins/assets/css/app.min.css`} rel="stylesheet" type="text/css" />
        </head>
        <body> 


      <div  className="loaderouter">
          <div class="spinner-square">
                <div class="square-1 square"></div>
                <div class="square-2 square"></div>
                <div class="square-3 square"></div>
        </div>
      </div>

  {/* <body data-layout="horizontal"> */}
  <div className="auth-page">
    <div className="p-0 container-fluid">
      <div className="row g-0">
        <div className="col-xxl-3 col-lg-4 col-md-5">
          <div className="p-4 auth-full-page-content d-flex p-sm-5">
            <div className="w-100">
              <div className="d-flex flex-column h-100">
                <div className="mb-4 text-center mb-md-5">
                  
                  <Link href="/home" className="d-block auth-logo">
                    
                    <img
                      src={`${baseUrl}/admins/assets/images/logo.png`}
                      alt="image"
                      
                      style={{ height: '80px' }}
                    />
                  </Link>
                </div>
                <div className="my-auto auth-content">
                  <div className="text-center">
                    <h5 className="mb-0">Admin Panel</h5>
                    <p className="mt-2 text-muted">
                      Sign in to continue to Universal Student Homes
                    </p>
                  </div>
                  <form className="pt-2 mt-4" action="" onSubmit={(e)=>submitLogin(e)}>
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        name='username'
                        value={loginData.username}
                        onChange={(e)=>updateLoginData(e)}
                      />
                      <span style={{color:'red', fontSize:'12px'}}>{'username' in errors ?errors.username:''}</span>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="flex-grow-1">
                          <label className="form-label">Password</label>
                        </div>
                        
                      </div>
                      <div className="input-group auth-pass-inputgroup">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                          name='password'
                          value={loginData.password}
                          onChange={(e)=>updateLoginData(e)}
                        />

                        <button
                          className="shadow-none btn btn-light ms-0"
                          type="submit"
                          id="password-addon"
                        >
                          <i className="mdi mdi-eye-outline" />
                        </button>
                      </div>
                      <span style={{color:'red', fontSize:'12px'}}>{'password' in errors ?errors.password:''}</span>
                    </div>
                     
                    <div className="mb-3">
                      <button
                        className="btn btn-primary w-100 waves-effect waves-light btnfdf"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mt-4 text-center mt-md-5">
                  <p className="mb-0">
                    © 2024 universalstudenthomes
                    <br />
                    All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end auth full page content */}
        </div>
        {/* end col */}
        <div className="col-xxl-9 col-lg-8 col-md-7">
          <div className="p-4 auth-bg pt-md-5 d-flex">
            <div className="bg-overlay bg-primary bg-primary2" />
            <ul className="bg-bubbles">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
            {/* end bubble effect */}
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-7">
                <div className="p-0 p-sm-4 px-xl-0">
                  <div className="carousel slide">
                    {/* end carouselIndicators */}
                    <div className="carousel-inner bag">
                      <div className="carousel-item active">
                        <div className="text-white testi-contain">
                          {/*  <i class="bx bxs-quote-alt-left text-success display-6"></i> */}
                          <h4 className="fw-medium lh-base">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </h4>
                          
                        </div>
                      </div>
                    </div>
                    {/* end carousel-inner */}
                  </div>
                  {/* end review carousel */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
      </div>
      {/* end row */}
    </div>
    {/* end container fluid */}
  </div>
  
  </body>
  </>
  
  )
}

export default AdminLogin
