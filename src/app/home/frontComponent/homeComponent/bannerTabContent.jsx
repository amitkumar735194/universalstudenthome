"use client";
import React from 'react'

const BannerTabContent = ({tabNumber}) => {
  return (
    <div
    className="tab_content tab_content_active"
    id={`tabcontent${tabNumber}`}
  >
    <h6>Tab {tabNumber}</h6>
    <div className="mb-22">
      <div className="text-theme-orange">
        <i className="far fa-clock" />
        Recent Searches
      </div>
      <ul className="contrary_d expanded">
        <li>
          <a href="#">
            Queen Mary University of London
            (QMUL)
          </a>
        </li>
        <li>
          <a href="#">London</a>
        </li>
      </ul>
      <div className="clearfix" />
    </div>
    <div className="mb-22">
      <div className="text-theme-orange">
        <i className="fa fa-location-arrow" />
        Popular Cities in UK
      </div>
      <ul className="contrary_d expanded">
        <li>
          <a href="#">London</a>
        </li>
        <li>
          <a href="#">Birmingham</a>
        </li>
        <li>
          <a href="#">Manchester</a>
        </li>
        <li>
          <a href="#">Nottingham</a>
        </li>
        <li>
          <a href="#">Glasgow</a>
        </li>
        <li>
          <a href="#">Cardiff</a>
        </li>
      </ul>
      <div className="clearfix" />
    </div>
    <div className="mb-22">
      <div className="text-theme-orange">
        <i className="fa fa-graduation-cap" />
        Popular University in UK
      </div>
      <ul className="contrary_d expanded">
        <li>
          <a href="#">
            King&apos;s College London (KCL)
          </a>
        </li>
        <li>
          <a href="#">
            Queen Mary University of London
            (QMUL)
          </a>
        </li>
        <li>
          <a href="#">
            University of Manchester
          </a>
        </li>
        <li>
          <a href="#">
            Birmingham City University (BCU)
          </a>
        </li>
        <li>
          <a href="#">
            Nottingham Trent University (NTU)
          </a>
        </li>
        <li>
          <a href="#">University of Glasgow</a>
        </li>
      </ul>
      <div className="clearfix" />
    </div>
  </div>
  )
}

export default BannerTabContent
