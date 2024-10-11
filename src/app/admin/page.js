"use client"
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { baseUrl, loadScript } from '@/helper/helper';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
import $ from 'jquery';

const AdminDashboard = () => {
  
  useEffect(()=>{
        loadScript(`${baseUrl}/admin/assets/js/pages/dashboard.init.js`);
        loadScript(`${baseUrl}/admin/assets/libs/apexcharts/apexcharts.min.js`);

  },[])

  return (
    <div className="page-content">
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0 font-size-18">Dashboard</h4>
            <div className="page-title-right">
              <ol className="m-0 breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="card card-h-100">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <span className="mb-3 text-muted lh-1 d-block new_heading">
                            New Booking
                          </span>
                          <h4 className="mb-3">
                            <span className="counter-value" data-target={846}>
                              0
                            </span>
                          </h4>
                        </div>
                        <div className="col-4">
                          <div
                            id="mini-chart1"
                            data-colors='["#5156be"]'
                            className="mb-2 apex-charts d-none"
                          />
                          <div className="new_booking">
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title />
                              <g id="office">
                                <path d="M12.5,13h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,12.5,13Z" />
                                <path d="M12.5,9h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,12.5,9Z" />
                                <path d="M12.5,5h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,12.5,5Z" />
                                <path d="M8.5,13h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,8.5,13Z" />
                                <path d="M8.5,9h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,8.5,9Z" />
                                <path d="M8.5,5h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,8.5,5Z" />
                                <path d="M16.5,13h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,16.5,13Z" />
                                <path d="M16.5,9h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,16.5,9Z" />
                                <path d="M16.5,5h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,16.5,5Z" />
                                <path d="M22,21H21V2a1,1,0,0,0-1-1H4A1,1,0,0,0,3,2V21H2a1,1,0,0,0,0,2H22A1,1,0,0,0,22,21ZM10,21V19h4v2Zm6,0V18a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v3H5V3H19V21Z" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="text-nowrap">
                        <span className="badge badge-soft-success text-success">
                          +2
                        </span>
                        <span className="ms-1 text-muted font-size-13">
                          Since last week
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card card-h-100">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <span className="mb-3 text-muted lh-1 d-block new_heading">
                            Total Book
                          </span>
                          <h4 className="mb-3">
                            <span className="counter-value" data-target={915}>
                              0
                            </span>
                          </h4>
                        </div>
                        <div className="col-4">
                          <div
                            id="mini-chart2"
                            data-colors='["#5156be"]'
                            className="mb-2 apex-charts d-none"
                          />
                          <div className="new_booking">
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title />
                              <g id="office">
                                <path d="M12.5,13h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,12.5,13Z" />
                                <path d="M12.5,9h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,12.5,9Z" />
                                <path d="M12.5,5h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,12.5,5Z" />
                                <path d="M8.5,13h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,8.5,13Z" />
                                <path d="M8.5,9h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,8.5,9Z" />
                                <path d="M8.5,5h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,8.5,5Z" />
                                <path d="M16.5,13h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,16.5,13Z" />
                                <path d="M16.5,9h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,16.5,9Z" />
                                <path d="M16.5,5h-1a1,1,0,0,0,0,2h1A1,1,0,0,0,16.5,5Z" />
                                <path d="M22,21H21V2a1,1,0,0,0-1-1H4A1,1,0,0,0,3,2V21H2a1,1,0,0,0,0,2H22A1,1,0,0,0,22,21ZM10,21V19h4v2Zm6,0V18a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v3H5V3H19V21Z" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="text-nowrap">
                        <span className="badge badge-soft-success text-success">
                          +2
                        </span>
                        <span className="ms-1 text-muted font-size-13">
                          Since last week
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card card-h-100">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <span className="mb-3 text-muted lh-1 d-block new_heading">
                            Total Visitor
                          </span>
                          <h4 className="mb-3">
                            <span className="counter-value" data-target={15456}>
                              0
                            </span>
                          </h4>
                        </div>
                        <div className="col-4">
                          <div
                            id="mini-chart3"
                            data-colors='["#5156be"]'
                            className="mb-2 apex-charts d-none"
                          />
                          <div className="new_booking">
                            <svg
                              viewBox="0 0 60 60"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="cls-2"
                                d="M56,33.42,51.12,21,54,18.17a4.49,4.49,0,0,0,1.29-2.8,3,3,0,0,0-.88-2.46v0A3.1,3.1,0,0,0,51.94,12a4.51,4.51,0,0,0-2.78,1.29l-2.9,2.9L33.89,11.35a1,1,0,0,0-1.11.23l-2.26,2.26a1,1,0,0,0-.3.79,1.06,1.06,0,0,0,.3.67.39.39,0,0,0,.1.08l2.47,1.92-.31.31a1,1,0,0,0,1.46,1.46l.49-.49,1.75,1.36-.32.32a1,1,0,0,0,1.46,1.46l.5-.5,1.75,1.36L36.49,26l-.53.57-3.27-1.26a1,1,0,0,0-1.1.24L30.14,27a1,1,0,0,0,0,1.46l3.07,3.07c-.05.18-.11.36-.15.54a1.83,1.83,0,0,0,2.22,2.22l.53-.15,3.08,3.07a1,1,0,0,0,1.45,0l1.46-1.46a1,1,0,0,0,.23-1.1l-1.25-3.27c.19-.17.38-.34.56-.52l3.38-3.39,1.37,1.76-.5.49a1,1,0,0,0,0,1.46,1,1,0,0,0,1.46,0l.31-.31,1.37,1.75-.49.49a1,1,0,0,0,1.46,1.46l.3-.31,1.92,2.47.09.1a1.09,1.09,0,0,0,.66.3,1,1,0,0,0,.8-.3l2.26-2.27A1,1,0,0,0,56,33.42ZM34,29.4l-1.71-1.71.26-.25,2.1.8A13.2,13.2,0,0,0,34,29.4ZM32.8,14.47l1-1,10.91,4.27-3.33,3.33ZM39.61,35l-1.7-1.7c.39-.2.78-.42,1.15-.65l.81,2.1Zm.27-5.62a11.07,11.07,0,0,1-4.72,2.79A11,11,0,0,1,38,27.42L50.62,14.75a2.42,2.42,0,0,1,1.5-.7,1,1,0,0,1,.81.3h0a1,1,0,0,1,.28.88,2.33,2.33,0,0,1-.69,1.47ZM52.83,34.5,46.19,26l3.34-3.33,4.26,10.91Z"
                              />
                              <path
                                className="cls-2"
                                d="M21.52,32.09h4.24a1,1,0,0,0,0-2.06H21.52a1,1,0,1,0,0,2.06Z"
                              />
                              <path
                                className="cls-2"
                                d="M20.49,38.36a1,1,0,0,0,1,1H34.89a1,1,0,1,0,0-2.06H21.52A1,1,0,0,0,20.49,38.36Z"
                              />
                              <path
                                className="cls-2"
                                d="M21.52,41.3a1,1,0,1,0,0,2.06h10a1,1,0,1,0,0-2.06Z"
                              />
                              <path
                                className="cls-2"
                                d="M49.82,39.56a1,1,0,0,0-1,1v5.73a.35.35,0,0,1-.35.34H7.06l1.51-2a1,1,0,0,0,0-1.24l-2.28-3,2.28-3a1,1,0,0,0,0-1.23L6.29,33,8.57,30a1,1,0,0,0,0-1.23l-1.51-2H24.9a1,1,0,1,0,0-2.06H11.09l.9-4.23L29,24a1,1,0,0,0,.43-2l-17.3-3.68a1.72,1.72,0,0,0-2,1.32L9,24.67H5a1,1,0,0,0-.83,1.65l2.29,3-2.29,3a1.05,1.05,0,0,0,0,1.24L6.46,36.7l-2.29,3a1.05,1.05,0,0,0,0,1.24L6.46,44l-2.29,3a1,1,0,0,0-.09,1.07,1,1,0,0,0,.92.58H48.44a2.41,2.41,0,0,0,2.41-2.41V40.59A1,1,0,0,0,49.82,39.56Z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="text-nowrap">
                        <span className="badge badge-soft-success text-success">
                          +2
                        </span>
                        <span className="ms-1 text-muted font-size-13">
                          Since last week
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card card-h-100">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <span className="mb-3 text-muted lh-1 d-block new_heading">
                            Total Incomes
                          </span>
                          <h4 className="mb-3">
                            <span className="income">$</span>
                            <span className="counter-value" data-target={45945}>
                              0
                            </span>
                          </h4>
                        </div>
                        <div className="col-4">
                          <div
                            id="mini-chart4"
                            data-colors='["#5156be"]'
                            className="mb-2 apex-charts d-none"
                          />
                          <div className="new_booking">
                            <svg
                              viewBox="0 0 64 64"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="Money_asset_income_management">
                                <path d="M32.4436,1.2458a16.0708,16.0708,0,1,0,16.07,16.0708A16.0708,16.0708,0,0,0,32.4436,1.2458ZM31.1853,16.1787H33.656a4.1749,4.1749,0,0,1,.0078,8.35v2.0569a1.35,1.35,0,1,1-2.6992,0V24.5292H28.1482a1.35,1.35,0,0,1,0-2.7H33.656a1.4751,1.4751,0,1,0,0-2.95H31.1853a4.3788,4.3788,0,0,1-.2207-8.7525V8.0478a1.35,1.35,0,1,1,2.6992,0v2.0561H36.739a1.35,1.35,0,0,1,0,2.7H31.1853a1.6873,1.6873,0,1,0,0,3.3746Z" />
                                <path d="M15.1059,36.736H8.5481A1.0434,1.0434,0,0,0,7.5046,37.78V60.1611a1.0435,1.0435,0,0,0,1.0435,1.0434h6.5578A2.2745,2.2745,0,0,0,17.38,58.93V39.01A2.2745,2.2745,0,0,0,15.1059,36.736Z" />
                                <path d="M56.3279,39.3642a3.8044,3.8044,0,0,0-3.1846-1.7158h-2.57a5.5491,5.5491,0,0,0-5.1455,3.4429A5.75,5.75,0,0,1,44.4036,42.71,8.3781,8.3781,0,0,1,37.72,46.5092l-7.6123.0005a1.35,1.35,0,0,1,0-2.7h7.5762a5.0783,5.0783,0,0,0,2.7244-.8766l0-.0457A5.2188,5.2188,0,0,0,35.19,37.6484h-5.586a7.7365,7.7365,0,0,0-5.497,2.27l-.1426.1421a7.2471,7.2471,0,0,1-3.8858,2.0127V56.9848H40.45A15.43,15.43,0,0,0,54.64,47.6381l2.0068-4.6709A3.802,3.802,0,0,0,56.3279,39.3642Z" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="text-nowrap">
                        <span className="badge badge-soft-success text-success">
                          +2
                        </span>
                        <span className="ms-1 text-muted font-size-13">
                          Since last week
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end card body */}
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          {/* card */}
          <div className="card card-h-100">
            {/* card body */}
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-8">
                  <span className="mb-3 text-muted lh-1 d-block new_heading">
                    10+ Countries
                  </span>
                  <h4 className="mb-3">
                    <span className="counter-value" data-target={10}>
                      0
                    </span>
                  </h4>
                </div>
                <div className="col-4">
                  <div
                    id="mini-chart5"
                    data-colors='["#e95e61"]'
                    className="mb-2 apex-charts"
                  />
                </div>
              </div>
              <div className="text-nowrap">
                {/* <span class="badge badge-soft-success text-success">+2</span> */}
                <span className="ms-1 text-muted font-size-13">
                  Providing Exceptional Living Spaces in 5+ Countries.
                </span>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
        <div className="col-xl-4 col-md-6">
          {/* card */}
          <div className="card card-h-100">
            {/* card body */}
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-8">
                  <span className="mb-3 text-muted lh-1 d-block text-truncate new_heading">
                    550 + Cities
                  </span>
                  <h4 className="mb-3">
                    <span className="counter-value" data-target={550}>
                      0
                    </span>
                  </h4>
                </div>
                <div className="col-4">
                  <div
                    id="mini-chart6"
                    data-colors='["#e95e61"]'
                    className="mb-2 apex-charts"
                  />
                </div>
              </div>
              <div className="text-nowrap">
                {/* <span class="badge badge-soft-danger text-danger">-1 login</span> */}
                <span className="ms-1 text-muted font-size-13">
                  Our robust presence premier cities across the globe.
                </span>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col*/}
        <div className="col-xl-4 col-md-6">
          {/* card */}
          <div className="card card-h-100">
            {/* card body */}
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-8">
                  <span className="mb-3 text-muted lh-1 d-block text-truncate new_heading">
                    900 + Universities
                  </span>
                  <h4 className="mb-3">
                    <span className="counter-value" data-target={900}>
                      0
                    </span>
                  </h4>
                </div>
                <div className="col-4">
                  <div
                    id="mini-chart7"
                    data-colors='["#e95e61"]'
                    className="mb-2 apex-charts"
                  />
                </div>
              </div>
              <div className="text-nowrap">
                {/* <span class="badge badge-soft-success text-success">-2</span> */}
                <span className="ms-1 text-muted font-size-13">
                  Find your sweet home near major universities.
                </span>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>
      {/* end row*/}
      <div className="row">
        <div className="col-xl-5">
          {/* card */}
          <div className="card card-h-100">
            {/* card body */}
            <div className="card-body">
              <div className="flex-wrap mb-4 d-flex align-items-center">
                <h5 className="card-title me-2">Guest Activity</h5>
                <div className="ms-auto">
                  <div>
                    <button
                      type="button"
                      className="btn btn-soft-secondary btn-sm"
                    >
                      ALL
                    </button>
                    <button type="button" className="btn btn-soft-primary btn-sm">
                      1M
                    </button>
                    <button
                      type="button"
                      className="btn btn-soft-secondary btn-sm"
                    >
                      6M
                    </button>
                    <button
                      type="button"
                      className="btn btn-soft-secondary btn-sm"
                    >
                      1Y
                    </button>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-sm">
                  <div
                    id="wallet-balance"
                    data-colors='["#e95e61", "#d84649", "#ca3e41"]'
                    className="apex-charts"
                  />
                </div>
                <div className="col-sm align-self-center">
                  <div className="mt-4 mt-sm-0">
                    <div>
                      <p className="mb-2">
                        <i className="align-middle mdi mdi-circle font-size-10 me-2 text-success" />
                      </p>
                      <h6>
                        0.4412 =
                        <span className="text-muted font-size-14 fw-normal">
                          $ 4025.32
                        </span>
                      </h6>
                    </div>
                    <div className="pt-2 mt-4">
                      <p className="mb-2">
                        <i className="align-middle mdi mdi-circle font-size-10 me-2 text-primary" />
                        USH
                      </p>
                      <h6>
                        4.5701 =
                        <span className="text-muted font-size-14 fw-normal">
                          $ 1123.64
                        </span>
                      </h6>
                    </div>
                    {/* <div class="mt-4 pt-2">
                    <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-info"></i> Crutches</p>
                    <h6>35.3811  = <span class="text-muted font-size-14 fw-normal">$ 2263.09</span></h6>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card */}
        </div>
        {/* end col */}
        <div className="col-xl-7">
          <div className="row">
            <div className="col-xl-8">
              {/* card */}
              <div className="card card-h-100">
                {/* card body */}
                <div className="card-body">
                  <div className="flex-wrap mb-4 d-flex align-items-center">
                    <h5 className="card-title me-2">Properties Availability</h5>
                    {/*    <div class="ms-auto">
                    <select class="form-select form-select-sm">
                      <option value="MAY" selected="">May</option>
                      <option value="AP">April</option>
                      <option value="MA">March</option>
                      <option value="FE">February</option>
                      <option value="JA">January</option>
                      <option value="DE">December</option>
                    </select>
                  </div> */}
                  </div>
                  <div className="row align-items-center">
                    <div className="col-sm">
                      <div
                        id="invested-overview"
                        data-colors='["#ca3e41", "#34c38f"]'
                        className="apex-charts"
                      />
                    </div>
                    <div className="col-sm align-self-center">
                      <div className="mt-4 mt-sm-0">
                        <p className="mb-1">Total Properties</p>
                        <h4>1200</h4>
                        {/*  <p class="text-muted mb-4"> Our Property <i class="mdi mdi-arrow-up ms-1 text-success"></i></p> */}
                        <div className="row g-0">
                          <div className="col-6">
                            <div>
                              <p className="mb-2 text-muted text-uppercase font-size-11">
                                Available
                              </p>
                              <h5 className="custom_size">1071 Properties</h5>
                            </div>
                          </div>
                          <div className="col-6">
                            <div>
                              <p className="mb-2 text-muted text-uppercase font-size-11">
                                Sold Out
                              </p>
                              <h5 className="custom_size">129 Properties</h5>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <a href="#" className="btn btn-primary btn-sm">
                            View more
                            <i className="mdi mdi-arrow-right ms-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-xl-4">
              {/* card */}
              <div className="text-white card bg-primary shadow-primary card-h-100">
                {/* card body */}
                <div className="p-0 card-body">
                  <div
                    id="carouselExampleCaptions"
                    className="text-center carousel slide widget-carousel"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="p-4 text-center">
                          <h4 className="mt-3 text-white lh-base fw-normal">
                            Customer Reviews
                          </h4>
                          <p className="font-size-13">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s,
                          </p>
                          <button type="button" className="btn btn-light btn-sm">
                            View details
                            <i className="mdi mdi-arrow-right ms-1" />
                          </button>
                        </div>
                      </div>
                      {/* end carousel-item */}
                      <div className="carousel-item">
                        <div className="p-4 text-center">
                          <h4 className="mt-3 text-white lh-base fw-normal">
                            Customer Reviews
                          </h4>
                          <p className="font-size-13">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s,
                          </p>
                          <button type="button" className="btn btn-light btn-sm">
                            View details
                            <i className="mdi mdi-arrow-right ms-1" />
                          </button>
                        </div>
                      </div>
                      {/* end carousel-item */}
                      <div className="carousel-item">
                        <div className="p-4 text-center">
                          <h4 className="mt-3 text-white lh-base fw-normal">
                            Customer Reviews
                          </h4>
                          <p className="font-size-13">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s,
                          </p>
                          <button type="button" className="btn btn-light btn-sm">
                            View details
                            <i className="mdi mdi-arrow-right ms-1" />
                          </button>
                        </div>
                      </div>
                      {/* end carousel-item */}
                    </div>
                    {/* end carousel-inner */}
                    <div className="carousel-indicators carousel-indicators-rounded">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      />
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                      />
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                      />
                    </div>
                    {/* end carousel-indicators */}
                  </div>
                  {/* end carousel */}
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end col */}
      </div>
      {/* end row*/}
      {/* end row*/}
      
    </div>
  </div>
  
  )
}

export default AdminDashboard
