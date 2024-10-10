"use client";

import { baseUrl } from '@/helper/helper'
import Link from 'next/link'
import React from 'react'

const AdminHeader = () => {
  return (
    <header id="page-topbar">
    <div className="navbar-header">
      <div className="d-flex">
        {/* LOGO */}
        <div className="navbar-brand-box">
          <Link href="/admin" className="logo logo-dark">
            <span className="logo-sm">
              <img src={`${baseUrl}/admin/assets/images/small_logo.png`} alt="" height={24} />
            </span>
            <span className="logo-lg">
              <img src={`${baseUrl}/admin/assets/images/logo.png`} alt="" height={60} />
            </span>
          </Link>
          <a href="index.html" className="logo logo-light">
            <span className="logo-sm">
              <img src={`${baseUrl}/admin/assets/images/logo-sm.svg`} alt="" height={24} />
            </span>
            <span className="logo-lg">
              <img src={`${baseUrl}/admin/assets/images/logo-sm.svg`} alt="" height={24} />
              <span className="logo-txt">Minia</span>
            </span>
          </a>
        </div>
        <button
          type="button"
          className="px-3 btn btn-sm font-size-16 header-item"
          id="vertical-menu-btn"
        >
          <i className="fa fa-fw fa-bars" />
        </button>
        {/* App Search*/}
        <form className="app-search d-none d-lg-block">
          <div className="position-relative">
            <input type="text" className="form-control" placeholder="Search..." />
            <button className="btn btn-primary" type="button">
              <i className="align-middle bx bx-search-alt" />
            </button>
          </div>
        </form>
      </div>
      <div className="d-flex">
        <div className="dropdown d-inline-block d-lg-none ms-2">
          <button
            type="button"
            className="btn header-item"
            id="page-header-search-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="search" className="icon-lg" />
          </button>
          <div
            className="p-0 dropdown-menu dropdown-menu-lg dropdown-menu-end"
            aria-labelledby="page-header-search-dropdown"
          >
            <form className="p-3">
              <div className="m-0 form-group">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search ..."
                    aria-label="Search Result"
                  />
                  <button className="btn btn-primary" type="submit">
                    <i className="mdi mdi-magnify" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
       
         
        <div className="dropdown d-inline-block">
          <button
            type="button"
            className="btn header-item noti-icon position-relative"
            id="page-header-notifications-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="mdi mdi-email-outline me-2" />
            {/* <i data-feather="bell" class="icon-lg"></i> */}
            <span className="badge bg-danger rounded-pill">4</span>
          </button>
          <div
            className="p-0 dropdown-menu dropdown-menu-lg dropdown-menu-end"
            aria-labelledby="page-header-notifications-dropdown"
          >
            <div className="p-3">
              <div className="row align-items-center">
                <div className="col">
                  <h6 className="m-0">Notifications</h6>
                </div>
                <div className="col-auto">
                  <a
                    href="#!"
                    className="small text-reset text-decoration-underline"
                  >
                    Unread (3)
                  </a>
                </div>
              </div>
            </div>
            <div data-simplebar="" style={{ maxHeight: 230 }}>
              <a href="#!" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="flex-shrink-0 me-3">
                    <img
                      src={`${baseUrl}/admin/assets/images/users/avatar-3.jpg`}
                      className="rounded-circle avatar-sm"
                      alt="user-pic"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1">James Lemire</h6>
                    <div className="font-size-13 text-muted">
                      <p className="mb-1">
                        It will seem like simplified English.
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline" />
                        <span>1 hour ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#!" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="flex-shrink-0 avatar-sm me-3">
                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                      <i className="bx bx-cart" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1">Your order is placed</h6>
                    <div className="font-size-13 text-muted">
                      <p className="mb-1">
                        If several languages coalesce the grammar
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline" />
                        <span>3 min ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#!" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="flex-shrink-0 avatar-sm me-3">
                    <span className="avatar-title bg-success rounded-circle font-size-16">
                      <i className="bx bx-badge-check" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1">Your item is shipped</h6>
                    <div className="font-size-13 text-muted">
                      <p className="mb-1">
                        If several languages coalesce the grammar
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline" />
                        <span>3 min ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#!" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="flex-shrink-0 me-3">
                    <img
                      src={`${baseUrl}/admin/assets/images/users/avatar-6.jpg`}
                      className="rounded-circle avatar-sm"
                      alt="user-pic"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1">Salena Layfield</h6>
                    <div className="font-size-13 text-muted">
                      <p className="mb-1">
                        As a skeptical Cambridge friend of mine occidental.
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline" />
                        <span>1 hour ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="p-2 border-top d-grid">
              <a
                className="text-center btn btn-sm btn-link font-size-14"
                href="#"
              >
                <i className="mdi mdi-arrow-right-circle me-1" />
                <span>View More..</span>
              </a>
            </div>
          </div>
        </div>
        <div className="dropdown d-none d-lg-inline-block ms-1">
          <button
            type="button"
            className="btn header-item"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="grid" className="icon-lg" />
          </button>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            <div className="p-2">
              <div className="row g-0">
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src={`${baseUrl}/admin/assets/images/brands/github.png`} alt="Github" />
                    <span>GitHub</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img
                      src={`${baseUrl}/admin/assets/images/brands/bitbucket.png`}
                      alt="bitbucket"
                    />
                    <span>Bitbucket</span>
                  </a>
                </div>
               
              </div>
              <div className="row g-0">
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src={`${baseUrl}/admin/assets/images/brands/dropbox.png`} alt="dropbox" />
                    <span>Dropbox</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img
                      src={`${baseUrl}/admin/assets/images/brands/mail_chimp.png`}
                      alt="mail_chimp"
                    />
                    <span>Mail Chimp</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src={`${baseUrl}/admin/assets/images/brands/slack.png`} alt="slack" />
                    <span>Slack</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown d-inline-block">
          <button
            type="button"
            className="btn header-item noti-icon position-relative"
            id="page-header-notifications-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="bell" className="icon-lg" />
            <span className="badge bg-danger rounded-pill">5</span>
          </button>
          <div
            className="p-0 dropdown-menu dropdown-menu-lg dropdown-menu-end"
            aria-labelledby="page-header-notifications-dropdown"
          >
            <div className="p-3">
              <div className="row align-items-center">
                <div className="col">
                  <h6 className="m-0">Notifications</h6>
                </div>
                <div className="col-auto">
                  <a
                    href="#!"
                    className="small text-reset text-decoration-underline"
                  >
                    Unread (3)
                  </a>
                </div>
              </div>
            </div>
            <div data-simplebar="" style={{ maxHeight: 230 }}>
              <a href="#!" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="flex-shrink-0 me-3">
                    <img
                      src={`${baseUrl}/admin/assets/images/users/avatar-3.jpg`}
                      className="rounded-circle avatar-sm"
                      alt="user-pic"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1">James Lemire</h6>
                    <div className="font-size-13 text-muted">
                      <p className="mb-1">
                        It will seem like simplified English.
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline" />
                        <span>1 hour ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#!" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="flex-shrink-0 avatar-sm me-3">
                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                      <i className="bx bx-cart" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1">Your order is placed</h6>
                    <div className="font-size-13 text-muted">
                      <p className="mb-1">
                        If several languages coalesce the grammar
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline" />
                        <span>3 min ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#!" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="flex-shrink-0 avatar-sm me-3">
                    <span className="avatar-title bg-success rounded-circle font-size-16">
                      <i className="bx bx-badge-check" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1">Your item is shipped</h6>
                    <div className="font-size-13 text-muted">
                      <p className="mb-1">
                        If several languages coalesce the grammar
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline" />
                        <span>3 min ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#!" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="flex-shrink-0 me-3">
                    <img
                      src={`${baseUrl}/admin/assets/images/users/avatar-6.jpg`}
                      className="rounded-circle avatar-sm"
                      alt="user-pic"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1">Salena Layfield</h6>
                    <div className="font-size-13 text-muted">
                      <p className="mb-1">
                        As a skeptical Cambridge friend of mine occidental.
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline" />
                        <span>1 hour ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="p-2 border-top d-grid">
              <a
                className="text-center btn btn-sm btn-link font-size-14"
                href="#a"
              >
                <i className="mdi mdi-arrow-right-circle me-1" />
                <span>View More..</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="dropdown d-inline-block">
          <button
            type="button"
            className="btn header-item topbar-light bg-light-subtle border-start border-end"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              className="rounded-circle header-profile-user"
              src={`${baseUrl}/admin/assets/images/users/avatar-1.jpg`}
              alt="Header Avatar"
            />
            <span className="d-none d-xl-inline-block ms-1 fw-medium">USH</span>
            <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
          </button>
          <div className="dropdown-menu dropdown-menu-end">
            {/* item*/}
            <a className="dropdown-item" href="change-password.html">
              <i className="align-middle mdi mdi-lock font-size-16 me-1" />
              Change Password
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="login.html">
              <i className="align-middle mdi mdi-logout font-size-16 me-1" />
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  )
}

export default AdminHeader
