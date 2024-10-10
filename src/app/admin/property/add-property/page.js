"use client"
import React, { useEffect, useState } from 'react'
import 'parsleyjs/src/parsley.css'; 
import $, { error } from 'jquery'
// import 'parsleyjs';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { baseUrl } from '@/helper/helper';
import Swal from 'sweetalert2';
import Image from 'next/image';


const AddCityDetails = () => {
 
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [propertyType, setPropertyType] = useState(null);

  const [amenities, setAmenities] = useState(null);
  const [inclusive, setInclusive] = useState(null);


  const [property, setProperty] = useState({
    country_id :'',
    city_id :'',
    property_type_id :'',
    title :'',
    short_description :'', 
    address :'',
    content :'',
    popular :'',
    amenities:[],
    Inclusive_bill:[],
    status:1
  })


  useEffect(()=>{

    fetch(baseUrl+'api/admin/auth/property-select-data',{
      method:'GET', 
    }).then((response)=>{
      if(!response.ok){
        throw new Error('Network Issue')
      }
      return response.json();
    }).then((data)=>{
      
      if(data.status){
        setCountry(data.country)
        setPropertyType(data.propertyType)
        setAmenities(data.amenities)
        setInclusive(data.inclusive)
      }
    }).catch((error)=>{

    })
  },[])

  // const changeInputValue=(e)=>{
  //   const { name, value, type, checked } = e.target;

  //   setProperty((prevProperty) => ({
  //     ...prevProperty,
  //     // Check if the input is for amenities or Inclusive_bill which may be array updates
  //     [name]: type === 'checkbox' ? (checked ? [...prevProperty[name], value] : prevProperty[name].filter(item => item !== value)) : value,
  //   }));
  //   // setProperty((property)=>({
  //   //   ...property,
  //   //   [name]:value
  //   // }))

  //   if(name=="country_id"){
  //     getCity(value);
  //   }

  //   console.log(property)
  // }


const changeInputValue = (e) => {
  const { name, value, type, checked } = e.target;

  // If the input is a checkbox or array-based input
  if (name === 'amenities' || name === 'Inclusive_bill') {
    // Check if it's a checkbox, update the arrays accordingly
    if (type === 'checkbox') {
      setProperty((prevProperty) => ({
        ...prevProperty,
        [name]: checked
          ? [...prevProperty[name], value] // Add the value if checked
          : prevProperty[name].filter((item) => item !== value) // Remove if unchecked
      }));
    }
  } else {
    // For normal text inputs
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value
    }));
  }

  if (name === 'country_id') {
    getCity(value); // Fetch cities based on country
  }

  console.log(property)
};


  const getCity =(country_id)=>{
    
      fetch(`${baseUrl}api/admin/auth/city?country_id=${country_id}`,{
        method:'GET', 
        headers:{
          'Content-Type': 'application/header'
        }
      }).then((response)=>{
        if(!response.ok){
          throw new Error('Network Issue')
        }
        return response.json();
      }).then((data)=>{
        
        if(data.status){
          setCity(data.data) 
        }
      }).catch((error)=>{

      })
  }
  const submitProperty=(e)=>{
    e.preventDefault() 

      fetch(baseUrl+'api/admin/auth/property/add-property',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(property)
      }).then((response)=>{
        if(!response.ok){
          throw new Error('Network Issue');
        }
        return response.json();
      }).then((data)=>{
        if(data.status){
          Swal.fire({
            title:'Success',
            icon: 'success',
            text:data.data
          });

          setProperty({

            country_id :'',
            city_id :'',
            property_type_id :'',
            title :'',
            short_description :'', 
            address :'',
            content :'',
            popular :'0',
            amenities:[],
            Inclusive_bill:[],
            status:1

          })
        }else if(!data.status){
          Swal.fire({
            title:'Error',
            icon: 'error',
            text:data.data
          });
        }
      }).catch(error=>{ 
        console.log(error); 
      });



    }


  // useEffect(() => {
  //   // Initialize Parsley validation
  //   $(document).ready(function() {
  //     $('form').parsley();
  //   });
  // }, []);
  
  return (
    <>
      <div className="page-content">
  <div className="container-fluid">
    {/* start page title */}
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">Property</h4>
          <div className="page-title-right">
            <ol className="m-0 breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript: void(0);"> Dashboard</a>
              </li>
              {/* <li className="breadcrumb-item">
                <a href="javascript: void(0);"> Top Cities</a>
              </li> */}
              <li className="breadcrumb-item active">Property</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    {/* end page title */}
    <form action='#' method='get' data-parsley-validate onSubmit={(e)=>submitProperty(e)}>

    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="form-label"
                        >
                          Select Country
                        </label>
                        <select className="form-select" name="country_id" value={property.country_id} 
                        onChange={(e)=>changeInputValue(e)} required> 

                          <option value="">select</option>
                          {country && country.map((item, index)=>( 
                          <option value={item._id} key={index}>{item.name}</option>
                          ))}
                           
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="form-label"
                        >
                          Select Cities
                        </label>
                        <select className="form-select" name="city_id" value={property.city_id} 
                        onChange={(e)=>changeInputValue(e)} required>
                          <option selected="">Select Cities</option>
 
                          
                          {city && city.map((item, index)=>( 
                          <option value={item._id} key={index}>{item.name}</option>
                          ))}

                        </select>
                      </div>
                    </div>
                    
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label
                          htmlFor="example-text-input"
                          className="form-label"
                        >
                          Select Property Type
                        </label>
                        <select className="form-select" name="property_type_id" value={property.property_type_id} 
                        onChange={(e)=>changeInputValue(e)} required>
                          <option selected="">Select Property Type</option> 
                          {propertyType && propertyType.map((item, index)=>( 
                          <option value={item._id} key={index}>{item.property_type}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                  </div>
                  {/* <div class="mb-3">
                  <label for="example-text-input" class="form-label">Description</label>
                  <textarea name="editor1"></textarea>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* end card body */}
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              {/* <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="example-text-input" className="form-label">
                    Offer upto
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div> */}
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="example-text-input" className="form-label">
                    Property Title
                  </label>
                  <input className="form-control" type="text" name="title" value={property.title} 
                        onChange={(e)=>changeInputValue(e)} required/>
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="example-text-input" className="form-label">
                    Property Short Description
                  </label>
                  <textarea className="form-control" name="short_description" value={property.short_description} 
                        onChange={(e)=>changeInputValue(e)} required/>
                </div>
              </div>
              {/* <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="example-text-input" className="form-label">
                    Property Price
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* end card */}

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    {/* <h4>Overview</h4> */}
                    {/* <div className="mb-3">
                      <label
                        htmlFor="example-text-input"
                        className="form-label"
                      >
                        Overview Title
                      </label>
                      <input className="form-control" type="text" />
                    </div> */}
                    <div className="mb-3">
                      <label
                        htmlFor="example-text-input"
                        className="form-label"
                      >
                        Amenities
                      </label>  
                        <div className='row'>

                                    <div className='col-lg-12'>
                                             <ul class="amenites_ei expanded">
                                              {amenities && amenities.map((item, index)=>(
                                                <li key={index}><input type='checkbox' value={item._id} name="amenities"  onChange={(e)=>changeInputValue(e)} /><Image src={`${baseUrl}${item.image}`}   alt="image"
                                                layout="fill"  
                                              objectFit="cover"  
                                              sizes="100vw"/> <span>{item.title}</span> </li>

                                              ))}
                                               </ul>
                                    </div> 
                        </div>
 
                    </div>

                    {/* ========================================== */}

                    <div className="mb-3">
                      <label
                        htmlFor="example-text-input"
                        className="form-label"
                      >
                      Your Bills <span>(Inclusive of)</span>
                      </label>  
                        <div className='row'>

                                  <div className='col-lg-12'>
                                        <ul class="amenites_ei expanded">
                                          {inclusive && inclusive.map((item, index)=>(
                                          <li key={index}><input type='checkbox' value={item._id} name="Inclusive_bill"  onChange={(e)=>changeInputValue(e)}  /><Image src={`${baseUrl}${item.image}`} 
                                          alt="image"
                                          layout="fill"  
                                        objectFit="cover"  
                                        sizes="100vw"/> <span>{item.title}</span> </li> 
                                          ))}
                                          
                                        </ul>
                                    </div> 

 
                      
                          </div>
                        </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end Amenities */}
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    {/* <h4>Overview</h4> */}
                    {/* <div className="mb-3">
                      <label
                        htmlFor="example-text-input"
                        className="form-label"
                      >
                        Overview Title
                      </label>
                      <input className="form-control" type="text" />
                    </div> */}
                    <div className="mb-3">
                      <label
                        htmlFor="example-text-input"
                        className="form-label"
                      >
                        Address
                      </label>
                      <input className="form-control" type="text" name="address" value={property.address} 
                        onChange={(e)=>changeInputValue(e)} required/>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="example-text-input"
                        className="form-label"
                      >
                        Content
                      </label>
                      {/* <textarea  id="content" name="content" value={property.content} 
                        onChange={(e)=>changeInputValue(e)} required/> */}

                                  {/* <CKEditor required
                                          editor={ClassicEditor}
                                          data={property.content}
                                          onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setProperty((preData)=>({
                                              ...preData,
                                              content:data
                                            }));   
                                          }}

                                          
                                        /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <h4>Price Trend</h4>
                <div className="mb-3">
                  <div className="form-group">
                    <textarea name="" id="content2" defaultValue={""} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
          <div className="card">
            <div className="card-body">
              <div className="search-box">
                <h5 className="mb-3">Status</h5>
                <div className="px-2 position-relative">
                  <select className="form-select" name="status" value={property.status} 
                        onChange={(e)=>changeInputValue(e)}>
                    <option value={1}>Active</option>
                    <option value={0}>Draft</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* end card */}
        </div>
      </div>
    </div>
    
    </form>
  </div>
  {/* container-fluid */}
</div>

    </>
  );
 

 
}

export default AddCityDetails

