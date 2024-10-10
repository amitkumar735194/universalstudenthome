import { baseUrl } from '@/helper/helper'
import Link from 'next/link'
import React from 'react'

const AdminSidebar = () => {
  return (
    <div className="vertical-menu">
    <div data-simplebar="" className="h-100">
        {/*- Sidemenu */}
        <div id="sidebar-menu">
        {/* Left Menu Start */}
        <ul className="metismenu list-unstyled" id="side-menu">
            {/*  <li class="menu-title" data-key="t-menu">Menu</li> */}
            <li>
            <Link href="/admin" className="dashboard">
                <i data-feather="home" />
                <span data-key="t-dashboard">Dashboard</span>
            </Link>
            </li>
            <li>
            <Link href="#" className="has-arrow">
                <i data-feather="grid" />
                <span data-key="t-apps">Countries</span>
            </Link>
            <ul className="sub-menu" >
                <li>
                <Link href="/admin/add-country">Add Country</Link>
                </li>
                <li>
                <Link href="/admin/city/add-cities">Add Cities</Link>
                </li>
                
            </ul>
            </li>

            



            <li>
                <Link href="#" className="has-arrow">
                    <i data-feather="grid" />
                    <span data-key="t-apps">Attributes</span>
                </Link>
                <ul className="sub-menu"  >
                    <li>
                    <Link href="/admin/attributes/amenities">Amenities</Link>
                    </li>
                    <li>
                    <Link href="/admin/attributes/inclusive">inclusive Bills</Link>
                    </li> 
                </ul>
            </li>

            <li>
                <Link href="#" className="has-arrow">
                    <i data-feather="grid" />
                    <span data-key="t-apps">Property</span>
                </Link>
                <ul className="sub-menu" >
                    <li>
                    <Link href={`${baseUrl}admin/add-property-type`}>Property Type</Link>
                    </li>
                    <li>
                    <Link href={`${baseUrl}admin/property/add-property`}>Property</Link>
                    </li> 
                    <li>
                    <Link href={`${baseUrl}admin/property/property-list`}>Property List</Link>
                    </li> 
                    <li>
                    <Link href={`${baseUrl}admin/property/view-rooms`}>View Rooms</Link>
                    </li> 
                </ul>
            </li>


            {/* <li>  
            <Link href="/admin/add-country">
                <i data-feather="globe" />
                <span data-key="t-components">Add Country</span>
            </Link>
            </li> */}
            {/* <li>
            <Link href="/admin/add-property-type">
                <i className="far fa-building" />
                <span data-key="t-components">Add Property Type</span>
            </Link>
            </li> */}
            <li>
            <Link href="/admin/add-campus">
                <i className="fa fa-adjust" />
                <span data-key="t-components">Add Campus</span>
            </Link>
            </li>
            {/* <li>
            <Link href="#" className="has-arrow">
                <i data-feather="grid" />
                <span data-key="t-apps">Top Cities</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li>
                <Link href="/admin/city/add-cities">Add Cities</Link>
                </li>
                <li>
                <Link href="/admin/city/cities-details">Add Cities Detail</Link>
                </li>
                
            </ul>
            </li> */}
            <li>
            <Link href="/admin/student-say">
                <i data-feather="users" /> <span>Students Say </span>
            </Link>
            </li>
            <li>
            <Link href="/admin/booking">
                <i data-feather="briefcase" /> <span>Booking</span>
            </Link>
            </li>
            <li className="mt-2 menu-title" data-key="t-components">
            Other Section
            </li>
            <li>
            <Link href="/admin/blog">
                <i data-feather="briefcase" />
                <span data-key="t-components">Blog</span>
            </Link>
            </li>
        </ul>
        
        </div>
    {/* Sidebar */}
  </div>
</div>

  )
}

export default AdminSidebar
