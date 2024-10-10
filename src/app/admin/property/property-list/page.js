"use client"
import { baseUrl } from '@/helper/helper';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const PropertyList = () => {

    const [propertyListData, setPropertyListData] = useState(null);

    useEffect(()=>{
        fetch(baseUrl+'api/admin/auth/property/add-property',{
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((response)=>{

            if(!response.ok){
                throw new Error('Network Error')
            }
           return response.json();
        }).then((data)=>{
            setPropertyListData(data.data);
            console.log(propertyListData,data)
        }).catch(error=>{
            console.log(error)
        })

    },[])


    const deleteProperty=(property_id, e)=>{
        e.preventDefault();
        if(!confirm('Are you sure to delete this property?')){
            return false;
        }
        fetch(`${baseUrl}api/admin/auth/property/add-property`,{
            method:"DELETE", 
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:property_id})
        }).then((response)=>{

            if(!response.ok){
                throw new Error('Network Error')
            }
           return response.json();
        }).then((data)=>{
            if(data.status){
                Swal.fire({
                    title:'Success',
                    icon:'success',
                    text: "Deleted successfully." 
                }) 
                setPropertyListData(propertyListData.filter((pData) => pData._id !== property_id));
            } 
        }).catch(error=>{
            console.log(error)
        })
    }
  return (
    <>
      <div className="page-content">
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Properties List</h4>
                    <div className="page-title-right">
                        <ol className="m-0 breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="#"> Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Properties List</li>
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
                        <div className="table-responsive">
                            {/* id="example2" */}
                            <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                <th width={70}>S No.</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Property Type</th>
                                <th>Title</th>
                                <th>Short Description</th>
                                <th>Address</th> 
                                <th>Rooms</th> 
                                <th>Right Image</th> 
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {propertyListData && propertyListData.map((item, index)=>(
                                    <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.country_id.name}</td>
                                    <td>{item.city_id.name}</td> 
                                    <td>{item.property_type_id.property_type}</td>
                                    <td>{item.title}</td>
                                    <td>{item.short_description}</td>
                                    <td>{item.address}</td> 
                                    <td><Link href={`add-room/${item._id}`} style={{cursor:'pointer'}}>View And Add Room</Link></td> 
                                    <td><Link href={`upload-property-photo?property_id=${item._id}&position=right&uploadFor=Property`} style={{cursor:'pointer'}}>View and upload ()</Link></td> 
                                    <td>
                                        <Link href="#" className="active2">
                                        {item.status==1?'Active':'Deactive'}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href="#">
                                        <i className="fas fa-pencil-alt" />
                                        </Link>
                                    </td>
                                   
                                    <td>
                                        <Link href="#" onClick={(e)=>deleteProperty(item._id,e)}>
                                        <i className="far fa-trash-alt" />
                                        </Link>
                                    </td>
                                    </tr>
                                ))}
                                 
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end col */}
                </div>
            </div>
            {/* container-fluid */}
            </div>


    </>
  )
}

export default PropertyList
