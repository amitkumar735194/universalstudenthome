
"use client"
import React, { useEffect, useState } from 'react'
import 'parsleyjs/src/parsley.css'; 
import $ from 'jquery'
// import 'parsleyjs';
import { baseUrl } from '@/helper/helper';
import Swal from 'sweetalert2';
import Link from 'next/link';




const AddPropertyType = () => {

 
  
const [propertyTypeData, setPropertyTypeData] = useState({
  property_type:'', 
  status:'1', 
})

const [propertyList, setPropertyList] = useState(null);



const updatePropertyTypeData =(e)=>{
  const {name, value} = e.target;
   
  setPropertyTypeData((preData)=>({
        ...preData,
        [name]:value
  })); 
}




// =================

useEffect(()=>{
  $('.loaderouter').css('display','flex'); 

  fetch(baseUrl+'api/admin/auth/property',{
    method:'GET',
    
  }).then((response)=>{
    if(!response.ok){
      throw new Error('Network Error')
      $('.loaderouter').css('display','none'); 

    } 
    return response.json();
  }).then((data)=>{
    $('.loaderouter').css('display','none'); 

    if(data.status){
      setPropertyList(data.data);
      
    }
  }).catch((error)=>{
    $('.loaderouter').css('display','none'); 

    console.log(error)
  })
},[])

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

const AddUpdatePropertyType =(e)=>{
  e.preventDefault();
  
  $('.loaderouter').css('display','flex'); 
  
  let method = "POST";
  if(propertyTypeData._id){
    method = "PUT";
  }

  fetch(baseUrl+'api/admin/auth/property',{
    method:method,
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(propertyTypeData)
  }).then((response)=>{
    if(!response.ok){
      $('.loaderouter').css('display','none');  
      throw new Error('Network Error')
    }

    return response.json();
  }).then((data)=>{
    if(data.status){
      Swal.fire({
        title:"Success",
        icon:"success",
        text:data.data
      })
    }else{
      Swal.fire({
        title:"Error",
        icon:"error",
        text:data.data
      })
    }
    $('.loaderouter').css('display','none'); 
    
  }).catch((error)=>{
    $('.loaderouter').css('display','none'); 

    console.log(error)
  })

}


// ===========================================

const deletePropertyType=(id,e)=>{
  e.preventDefault();
  console.log(id)
  if(confirm('Are you sure to delete this Property Type?')){
    fetch(baseUrl+'api/admin/auth/property',{
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
        Swal.fire({
          title:'Success',
          icon:'success',
          text:data.data,
           })
        setPropertyList(propertyList.filter((property) => property._id !== id));
       }
       
    }).catch((error)=>{
      console.log(error)
    })

  }
}

// ==============================================

const editPropertyType=(property_type,e)=>{
  // e.preventDefault(); 
  setPropertyTypeData(property_type);
}



  return (
    <>
      <div className="page-content">
  <div className="container-fluid">
    {/* start page title */}
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">Add Property Type</h4>
          <div className="page-title-right">
            <ol className="m-0 breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript: void(0);"> Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Add Property Type</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    {/* end page title */}
    <form action='#' data-parsley-validate onSubmit={(e)=>AddUpdatePropertyType(e)}>

    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
         
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Add Property Type
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Add Property Type"
                      name='property_type'
                      value={propertyTypeData.property_type}
                      onChange={(e)=>updatePropertyTypeData(e)}
                      required
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
                      <select className="form-select" name='status' value={propertyTypeData.status}
                      onChange={(e)=>updatePropertyTypeData(e)}>
                        <option value={1}>Active</option>
                        <option value={0}>Draft</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          {/* end card body */}
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-auto">
                <button type="submit" className="btn btn-primary btnfdf">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end col */}
      <div className="col-lg-4 ">
        <div className="row">
          {/* <div className="card">
            <div className="card-body"></div>
          </div> */}
          {/* <div class="card">
            <div class="card-body">
              <div class="search-box">
                <h5 class="mb-3">Status</h5>
                <div class="position-relative px-2">

                  <select class="form-select">
                    <option>Active</option>
                    <option>Draft</option>
                  </select>
                
                </div>
              </div>

            </div>
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
                      <th width={450}>City Name</th>
                      <th width={10}>Edit</th>
                      <th width={15}>Status</th>
                      <th width={50}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propertyList && propertyList.map((item, index)=>(
                      <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.property_type}</td>

                      <td>
                        <a href="#" className="active2">
                        {item.status==1?'Active':'Deactive'}
                        </a>
                      </td>

                      
                      <td>
                        <Link href="#" onClick={(e)=>editPropertyType(item,e)}>
                          <i className="fas fa-pencil-alt" />
                        </Link>
                      </td>
                     
                      <td>
                        <Link href="#" onClick={(e)=>deletePropertyType(item._id,e)}>
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
    </form>
  </div>
  {/* container-fluid */}
</div>

    </>
  )
}

export default AddPropertyType
