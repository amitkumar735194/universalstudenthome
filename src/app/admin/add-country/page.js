"use client"
import React, { useEffect, useRef, useState } from 'react'
import 'parsleyjs/src/parsley.css'; 
import $ from 'jquery'
// import 'parsleyjs';
import { baseUrl } from '@/helper/helper';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Image from 'next/image';
 

const AddCountry = () => {

  const flagRef = useRef(null);
  const [countryData, setCountryData] = useState({
    name:'',
    flag:null,
    status:1    
  })
const [countryList, setCountryList] = useState(null);



  const updateCountryData =(e)=>{
    const {name, value} = e.target;
    if(name=="flag"){
        setCountryData((preData)=>({
              ...preData,
              [name]:e.target.files[0]
        }));
    }else{
      setCountryData((preData)=>({
          ...preData,
          [name]:value
    }));
    }
   

  }


  useEffect(() => {
    const loadParsley = async () => {
        const Parsley = await import('parsleyjs');
        // Initialize Parsley for your form
        console.log('Parsley loaded', Parsley);
        
        // Assuming you have a form element to apply Parsley to
        const form = document.querySelector('form');
        if (form) {
            $(form).parsley(); // Initialize Parsley
        }
    };

    loadParsley();
}, []);
  
  const AddUpdateCountry =(e)=>{
    e.preventDefault();
      
    const formData = new FormData();
    formData.append('name', countryData.name);
    formData.append('status', countryData.status);
    formData.append('flag', countryData.flag); 
    $('.loaderouter').css('display','flex'); 

    let method ='POST';
    if(countryData._id){
      formData.append('_id', countryData._id); 
      method= 'PUT';
 
    } 

    fetch(baseUrl+'api/admin/auth/add-country',{
      method: method,
      
      body:formData
    }).then((response)=>{
        if(!response.ok){
          console.log(response);
          $('.loaderouter').css('display','none');  
          throw new Error('Network issue');
        }
        return response.json();
    }).then((data)=>{
      $('.loaderouter').css('display','none');  
      console.log(data);
      if('status' in data && data.status){

        Swal.fire({
          title: 'Success!',
          text: data.Message,
          icon: 'success', 
          confirmButtonText: 'Okey  '
        });
        setCountryList(data.list);

        setCountryData({
          name:'',
          flag:null,
          status:1   
        });
        if (flagRef.current) {
          flagRef.current.value = '';  // Clear the file input field
        }

      }else{
        Swal.fire({
          title: 'Error!',
          text: data.Message,
          icon: 'error', 
          confirmButtonText: 'Okey  '
        });
      }
    }).catch((error)=>{
      $('.loaderouter').css('display','none'); 

      console.log(error)
    })

  }


  useEffect(()=>{

    $('.loaderouter').css('display','flex'); 
    
    fetch(baseUrl+'api/admin/auth/add-country',{
      method:'GET',
       
    }).then((response)=>{
        if(!response.ok){
          $('.loaderouter').css('display','none');  
          throw new Error('Network issue');
        }
        return response.json();
    }).then((data)=>{ 
       if(data.status){
        setCountryList(data.data);
       
       }
       $('.loaderouter').css('display','none');  
    }).catch((error)=>{
      $('.loaderouter').css('display','none');  
      console.log(error)
    })

  },[])

  // ===========================================

  const deleteCountry=(id,e)=>{
    e.preventDefault();
    console.log(id)
    if(confirm('Are you sure to delete this Country?')){
      fetch(baseUrl+'api/admin/auth/add-country',{
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json'
        },
         body:JSON.stringify({id})
      }).then((response)=>{
          if(!response.ok){
            console.log(response);
            throw new Error('Network issue');
          }
          return response.json();
      }).then((data)=>{ 
         console.log(data)
         if(data.status){ 
           setCountryList(countryList.filter((country) => country._id !== id));
         }
         
      }).catch((error)=>{
        console.log(error)
      })

    }
  }

  const editCountry=(country,e)=>{
    // e.preventDefault();
    console.log(country)
    setCountryData(country);
  }

  return (
    <>
      <div className="page-content">
  <div className="container-fluid">
    {/* start page title */}
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">Add Country</h4>
          <div className="page-title-right">
            <ol className="m-0 breadcrumb">
              <li className="breadcrumb-item">
                <Link href="#"> Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Add Country</li>
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
                      Add Country
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Add Country"
                       name='name'
                       value={countryData.name}
                       onChange={(e)=>updateCountryData(e)}
                       required

                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Country Flag
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      placeholder="Add Country"
                      name='flag' 
                       onChange={(e)=>updateCountryData(e)}
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
                      <select className="form-select" name='status' value={countryData.status} onChange={(e)=>updateCountryData(e)}>
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
                      <th width={450}>Country</th>
                      <th width={450}>Flag</th>
                      <th width={15}>Status</th>
                      <th width={10}>Edit</th>
                      <th width={50}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countryList && countryList.map((item, index)=>(
                      <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.name} </td>
                      <td><img src={item.flag} 
                          alt="img" 
                           
                                      /> 
                      </td>

                      <td>
                        <Link href="#" className="active2">
                          {item.status==1?'Active':'Deactive'}
                        </Link>
                      </td>
                      <td>
                        <Link href="#" onClick={(e)=>editCountry(item,e)}>
                          <i className="fas fa-pencil-alt" />
                        </Link>
                      </td>
                     
                      <td>
                        <Link href="#"  onClick={(e)=>deleteCountry(item._id,e)}>
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

export default AddCountry
