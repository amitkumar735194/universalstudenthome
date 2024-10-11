 
"use client"
import React, { useEffect, useRef, useState } from 'react'
import 'parsleyjs/src/parsley.css'; 
import $ from 'jquery'
// import 'parsleyjs';
import { baseUrl } from '@/helper/helper';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Image from 'next/image';


const InclusiveView = () => {

  const flagRef = useRef(null);
  const [inclusiveData, setInclusiveData] = useState({
    title:'',
    image:null,
    status:1    
  }) 
const [amenityList, setAmenityList] = useState(null);



  const updateinclusiveData =(e)=>{
    const {name, value} = e.target;
    if(name=="image"){
        setInclusiveData((preData)=>({
              ...preData,
              [name]:e.target.files[0]
        }));
    }else{
      setInclusiveData((preData)=>({
          ...preData,
          [name]:value
    }));
    }
    console.log(inclusiveData);
   

  }


  useEffect(() => {
    const loadParsley = async () => {
      const Parsley = await import('parsleyjs');
      // Initialize Parsley on your form element
      const formElement = document.querySelector('form');
      if (formElement) {
        Parsley(formElement);
      }
    };

    loadParsley();
  }, []);
  
  const AddUpdateCountry =(e)=>{
    e.preventDefault();
      
    const formData = new FormData();
    formData.append('title', inclusiveData.title);
    formData.append('status', inclusiveData.status);
    formData.append('image', inclusiveData.image); 

    let method ='POST';
    if(inclusiveData._id){
      formData.append('_id', inclusiveData._id); 
      method= 'PUT';
 
    } 

    $('.loaderouter').css('display','flex'); 

    fetch(baseUrl+'api/admin/auth/attributes/inclusive',{
      method: method,
      
      body:formData
    }).then((response)=>{
        if(!response.ok){
          $('.loaderouter').css('display','none'); 

          throw new Error('Network issue');
        }
        return response.json();
    }).then((data)=>{
      $('.loaderouter').css('display','none'); 
 
      if('status' in data && data.status){

        Swal.fire({
          title: 'Success!',
          text: data.data,
          icon: 'success', 
          confirmButtonText: 'Okey'
        });

        setAmenityList(data.list);

        setInclusiveData({
          title:'',
          image:null,
          status:1   
        });
        if (flagRef.current) {
          flagRef.current.value = '';  // Clear the file input field
        }

      }else{
        Swal.fire({
          title: 'Error!',
          text: data.data,
          icon: 'error', 
          confirmButtonText: 'OKEY  '
        });
      }

    }).catch((error)=>{
      $('.loaderouter').css('display','none'); 

      console.log(error)
    })

  }


  useEffect(()=>{

    $('.loaderouter').css('display','flex'); 
    
    fetch(baseUrl+'api/admin/auth/attributes/inclusive',{
      method:'GET',
       
    }).then((response)=>{
        if(!response.ok){
          
      $('.loaderouter').css('display','none'); 

          throw new Error('Network issue');
        }
        return response.json();
    }).then((data)=>{ 
      $('.loaderouter').css('display','none'); 

       if(data.status){
        setAmenityList(data.data);
       
       }
       
    }).catch((error)=>{
      $('.loaderouter').css('display','none'); 

      console.log(error)
    })

  },[])

  // ===========================================

  const deleteAmenity=(id,e)=>{
    e.preventDefault();
    $('.loaderouter').css('display','flex'); 

    if(confirm('Are you sure to delete this Amenity?')){
      fetch(baseUrl+'api/admin/auth/attributes/inclusive',{
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json'
        },
         body:JSON.stringify({id})
      }).then((response)=>{
          if(!response.ok){
      $('.loaderouter').css('display','none'); 

            console.log(response);
            throw new Error('Network issue');
          }
          return response.json();
      }).then((data)=>{ 
      $('.loaderouter').css('display','none'); 

         console.log(data)
         if(data.status){
          Swal.fire({
            title: 'Success',
            text: data.data,
            icon: 'success', 
            confirmButtonText: 'OKEY  '
          });
          setAmenityList(amenityList.filter((amenity) => amenity._id !== id));
         }
         
      }).catch((error)=>{
        console.log(error)
      $('.loaderouter').css('display','none'); 

      })

    }
  }

  const editAmenity=(amenity,e)=>{
    // e.preventDefault();
    console.log(amenity)
    setInclusiveData(amenity);
  }

  return (
    <>
      <div className="page-content">
  <div className="container-fluid">
    {/* start page title */}
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">Your Bills (Inclusive of)</h4>
          <div className="page-title-right">
            <ol className="m-0 breadcrumb">
              <li className="breadcrumb-item">
                <Link href="#"> Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Your Bills (Inclusive of)</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    {/* end page title */}
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <form action='#' data-parsley-validate onSubmit={(e)=>AddUpdateCountry(e)}>
              
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Add Country"
                       name='title'
                       value={inclusiveData.title}
                       onChange={(e)=>updateinclusiveData(e)}
                       required

                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                     Image
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      placeholder="Add Country"
                      name='image' 
                       onChange={(e)=>updateinclusiveData(e)}
                       ref={flagRef}
                       
                    />
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Status
                    </label>
                    <div className="px-2 position-relative">
                      <select className="form-select" name='status' value={inclusiveData.status} onChange={(e)=>updateinclusiveData(e)}>
                        <option value={1} >Active</option>
                        <option value={0} >Draft</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-sm-auto">
                <button type="submit" className="btn btn-primary btnfdf">
                  Submit
                </button>
              </div> 
            </div> 
            </form>
          </div>
          {/* end card body */}
        </div>
        {/* <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-auto">
                <button type="submit" className="btn btn-primary btnfdf">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* end col */}
      <div className="col-lg-4 ">
        <div className="row">
          {/* <div className="card">
            <div className="card-body"></div>
          </div> */}
          
          {/* end card */}
        </div>
      </div>
    </div>
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
                      <th width={450}>Title</th>
                      <th width={450}>Image</th>
                      <th width={15}>Status</th>
                      <th width={10}>Edit</th>
                      <th width={50}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {amenityList && amenityList.map((item, index)=>(
                      <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.title} </td>
                      <td><img src={`${baseUrl}${item.image}`}  
                        alt="image"
                        
                     /> 
                     </td>

                      <td>
                        <Link href="#" className="active2">
                          {item.status==1?'Active':'Deactive'}
                        </Link>
                      </td>
                      <td>
                        <Link href="#" onClick={(e)=>editAmenity(item,e)}>
                          <i className="fas fa-pencil-alt" />
                        </Link>
                      </td>
                     
                      <td>
                        <Link href="#"  onClick={(e)=>deleteAmenity(item._id,e)}>
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

export default InclusiveView
