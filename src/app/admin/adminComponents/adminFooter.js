
"use client"; 
import { baseUrl } from '@/helper/helper'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const AdminFooter = () => {
  return (
    <footer className="footer">

      
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6">
        Copyright © 2024 universalstudenthomes | All Rights Reserved.
      </div>
      <div className="col-sm-6">
        <div className="text-sm-end d-none d-sm-block">
          <Link
            href="https://www.akswebsoft.com/"
            title="AKS Websoft Consulting Pvt. Ltd."
            target="_blank"
          >
            <img src={`${baseUrl}/admin/assets/images/aks2.png`} alt="AKS Websoft Consulting Pvt. Ltd." className="powerd" 
             
             />
          </Link>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default AdminFooter
