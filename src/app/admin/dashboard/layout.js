 
"use client";
 
 
// import '../../styles/admin/assets/css/app.min.css';
// // import '../../styles/admin/assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css';
// import '../../styles/admin/assets/css/preloader.min.css';
// import '../../styles/admin/assets/css/bootstrap.min.css';
// import '../../styles/admin/assets/css/icons.min.css';
// import '../../styles/admin/assets/css/app.min.css';
// // import '../../styles/admin/assets/css/accordian.css';

import AdminHeader from '../adminComponents/adminHeader';
import AdminSidebar from '../adminComponents/adminSidebar';
import AdminFooter from '../adminComponents/adminFooter';
import { useEffect } from 'react';
import { baseUrl, loadScript } from '@/helper/helper';
import $ from 'jquery'

export default function AdminLayout({children}){

    useEffect(()=>{
        loadScript(`${baseUrl}/admin/assets/libs/jquery/jquery.min.js`);
        loadScript(`${baseUrl}/admin/assets/libs/bootstrap/js/bootstrap.bundle.min.js`);
        loadScript(`${baseUrl}/admin/assets/libs/metismenu/metisMenu.min.js`);
        loadScript(`${baseUrl}/admin/assets/libs/simplebar/simplebar.min.js`);
        loadScript(`${baseUrl}/admin/assets/libs/node-waves/waves.min.js`);
        loadScript(`${baseUrl}/admin/assets/libs/feather-icons/feather.min.js`);
        loadScript(`${baseUrl}/admin/assets/libs/pace-js/pace.min.js`);
        loadScript(`${baseUrl}/admin/assets/js/app.js`);
        // loadScript(`${baseUrl}/admin/assets/libs/apexcharts/apexcharts.min.js`);
        loadScript(`${baseUrl}/admin/assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js`);
        loadScript(`${baseUrl}/admin/assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js`);
        // loadScript(`${baseUrl}/admin/assets/js/pages/dashboard.init.js`);
    })
    return(
        <html lang="en"> 
        <head>
            <link href={`${baseUrl}/admin/assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css`} id="app-style" rel="stylesheet" type="text/css" />
            <link href={`${baseUrl}/admin/assets/css/bootstrap.min.css`} id="app-style" rel="stylesheet" type="text/css" />
            <link href={`${baseUrl}/admin/assets/css/icons.min.css`} id="app-style" rel="stylesheet" type="text/css" />
            <link href={`${baseUrl}/admin/assets/css/app.min.css`} id="app-style" rel="stylesheet" type="text/css" />
            
        </head>
        <body>
        <div id="layout-wrapper">
            <AdminHeader />
            <AdminSidebar />
                <div className="main-content">
                    {children}  

                    <AdminFooter />
                </div>
            </div>
        </body>
        </html>
    )
}