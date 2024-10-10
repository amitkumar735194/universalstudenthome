"use client"
import { baseUrl } from '@/helper/helper';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const RoomList = () => {

    const [propertyRoomData, setPropertyRoomData] = useState(null);

    useEffect(()=>{
        fetch(baseUrl+'api/admin/auth/add-room',{
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
            setPropertyRoomData(data.list);
            console.log(propertyRoomData,data)
        }).catch(error=>{
            console.log(error)
        })

    },[])


    const deleteProperty=(room_id, e)=>{
        e.preventDefault();
        if(!confirm('Are you sure to delete this property?')){
            return false;
        }
        fetch(`${baseUrl}api/admin/auth/property/add-property`,{
            method:"DELETE", 
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:room_id})
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
                setPropertyRoomData(propertyRoomData.filter((roomData) => roomData._id !== room_id));
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
                    <h4 className="mb-sm-0 font-size-18">Room List</h4>
                    <div className="page-title-right">
                        <ol className="m-0 breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="#"> Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Room List</li>
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
                                <th>Property Name</th>
                                <th>Room</th>
                                <th>Content</th>
                                <th>Amenities</th> 
                                <th>Price</th> 
                                <th>Image</th> 
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {propertyRoomData && propertyRoomData.map((item, index)=>(
                                    <tr key={index}>
                                    <td>{index+1}</td> 
                                    <td>{item.property_id.title}</td>
                                    <td>{item.room_title }</td>
                                    <td>{item.description }</td>
                                    <td>Amenity {item.prices.length}</td>  
                                    <td>
                                        <table>
                                            <thead>
                                                <tr>
                                               
                                                        <th>Duration</th>
                                                        <th>Move</th>
                                                        <th>Occupancy</th>
                                                        <th>Price</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {item.prices.length>0 && item.prices.map((price, index)=>(
                                                    <tr key={index}>
                                                        <td>{price.duration_from }-{price.duration_to }/{price.time_duration }</td>
                                                        <td>{price.move }</td>
                                                        <td>{price.occupancy  }</td>
                                                        <td>{`${price.price}/${price.currency}`}</td>
                                                    </tr> 
                                                ))}
                                                  
                                            </tbody>    
                                        </table>    
                                    </td>  
                                    <td><Link href={`${baseUrl}admin/property/upload-property-photo?property_id=${item._id}&position=none&uploadFor=Room`} style={{cursor:'pointer'}}>View and upload</Link></td> 
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

export default RoomList
