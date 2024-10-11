"use client"
import React, { useEffect, useState } from 'react'
import 'parsleyjs/src/parsley.css'; 
import $ from 'jquery'
// import 'parsleyjs';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { baseUrl } from '@/helper/helper';
import Swal from 'sweetalert2';
import Image from 'next/image';


const AddRooms = ({ params }) => {
 
  const {property_id, room_id} = params;
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [propertyType, setPropertyType] = useState(null);

  const [amenities, setAmenities] = useState(null);
  const [inclusive, setInclusive] = useState(null);
  const [allProperty, setAllProperty] = useState(null);


  const [roomData, setRoomData] = useState({
    country_id :'',
    city_id :'',
    property_type_id :'',
    property_id :property_id,
    room_title :'',
    description :'',   
    amenities:[], 
    price_data:[], 
    status:1
  });

  const [priceData, setPriceData] = useState({
    duration_from :'',
    duration_to :'',
    time_duration :'weeks',
    move :'',
    occupancy :'Single',
    currency :'INR',
    price :'',  
  });
  

  useEffect(()=>{
    $('.loaderouter').css('display','flex'); 

    fetch(`${baseUrl}api/admin/auth/property/add-property/propertyFindById?property_id=${property_id}&room_id=${room_id}`,{
      method:"GET",
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((response)=>{
      if(!response.ok){
      $('.loaderouter').css('display','none'); 

        throw new Error('Network Issue');
      }
      return response.json();
    }).then((data)=>{
      $('.loaderouter').css('display','none'); 

      if(data.status){
        const propertyData =data.data;
        setRoomData((preData)=>({
          ...preData,
          country_id :propertyData.country_id._id,
          city_id :propertyData.city_id._id,
          property_type_id :propertyData.property_type_id._id,
          property_id :property_id, 
        }))

        setCity(data.cityList);
        setAllProperty(data.allProperties);
        setRoomData(data.room)
      }
        console.log(data)
    }).catch(error=>{ 
      $('.loaderouter').css('display','none'); 

      console.log(error); 
    });
  },[room_id,property_id])


  const changePriceInput=(e)=>{
    const {name, value} = e.target;
    setPriceData((preData)=>({
        ...preData,
        [name]:value
    }))

  }

  const AddPriceData=()=>{
     const errors = [];
    Object.keys(priceData).forEach((item)=>{
        if(priceData[item]==""){
            $(`#${item}_error`).html(`required`);
            errors.push(item)
        }
    })
    if(errors.length==0){
        setRoomData((preData)=>({
            ...preData,
           price_data:[...preData.price_data,priceData]
        })); 

        setPriceData({
            duration_from :'',
            duration_to :'',
            time_duration :'weeks',
            move :'',
            occupancy :'Single',
            currency :'INR',
            price :'',  
          })
    }
  }
  const deletePriceData=(index)=>{
    const updatedList = roomData.price_data.filter((_, i) => i !== index); 
        setRoomData((preData)=>({
            ...preData,
        price_data:updatedList
        }));
        
  }


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
  },[property_id])
 


const changeInputValue = (e) => {
  const { name, value, type, checked } = e.target;

  // If the input is a checkbox or array-based input
  if (name === 'amenities' || name === 'Inclusive_bill') {
    // Check if it's a checkbox, update the arrays accordingly
    if (type === 'checkbox') {
        setRoomData((prevProperty) => ({
        ...prevProperty,
        [name]: checked
          ? [...prevProperty[name], value]  
          : prevProperty[name].filter((item) => item !== value)  
      }));
    }
  } else {
    // For normal text inputs
    setRoomData((prevProperty) => ({
      ...prevProperty,
      [name]: value
    }));
  }

  if (name === 'country_id') {
    getCity(value);  
  }

 
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
  const submitRoomData=(e)=>{
    e.preventDefault() 

    console.log(roomData);
    if(roomData.price_data.length==0){
        Swal.fire({
            icon:'error',
            title:'Error',
            text:'Please add room price'
        })
        return false
    }

    $('.loaderouter').css('display','flex'); 

      fetch(baseUrl+'api/admin/auth/add-room',{
        method:"PUT",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(roomData)
      }).then((response)=>{
        if(!response.ok){
      $('.loaderouter').css('display','none'); 

          throw new Error('Network Issue');
        }
        return response.json();
      }).then((data)=>{
      $('.loaderouter').css('display','none'); 

        console.log(data)
        if(data.status){
          Swal.fire({
            title:'Success',
            icon: 'success',
            text:data.data
          });

           
        }else if(!data.status){
          
          Swal.fire({
            title:'Error',
            icon: 'error',
            text:data.data
          });
        }
      }).catch(error=>{ 
      $('.loaderouter').css('display','none');  
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
          <h4 className="mb-sm-0 font-size-18">Add Room</h4>
          <div className="page-title-right">
            <ol className="m-0 breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript: void(0);"> Dashboard</a>
              </li>
              {/* <li className="breadcrumb-item">
                <a href="javascript: void(0);"> Top Cities</a>
              </li> */}
              <li className="breadcrumb-item active">Add Room</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    {/* end page title */}
    <form action='#' method='get' data-parsley-validate onSubmit={(e)=>submitRoomData(e)}>

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
                          Country
                        </label>
                        <select className="form-select" name="country_id" value={roomData.country_id} 
                        onChange={(e)=>changeInputValue(e)} required disabled={roomData.country_id != ""?true:false}> 

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
                          Cities
                        </label>
                        <select className="form-select" name="city_id" value={roomData.city_id} 
                        onChange={(e)=>changeInputValue(e)} required disabled={roomData.city_id != ""?true:false}>
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
                          Property Type
                        </label>
                        <select className="form-select" name="property_type_id" value={roomData.property_type_id} 
                        onChange={(e)=>changeInputValue(e)}  required  disabled={roomData.property_type_id != ""?true:false} >
                          <option selected="">Property Type</option> 
                          {propertyType && propertyType.map((item, index)=>( 
                          <option value={item._id} key={index}>{item.property_type}</option>
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
                          Property Name
                        </label>
                        <select className="form-select" name="property_type_id" value={roomData.property_id} 
                        onChange={(e)=>changeInputValue(e)} required disabled={roomData.property_id != ""?true:false}>
                          <option value="">Select Property </option>  
                          {allProperty && allProperty.map((item, index)=>(
                          <option value={item._id} key={index}>{item.title}</option>   
                          ))}
                        </select>
                      </div>
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
              
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="example-text-input" className="form-label">
                    Room Title
                  </label>
                  <input className="form-control" type="text" name="room_title" value={roomData.room_title} 
                        onChange={(e)=>changeInputValue(e)} required/>
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="example-text-input" className="form-label">
                    Short Description
                  </label>
                  <textarea className="form-control" name="description" value={roomData.description} 
                        onChange={(e)=>changeInputValue(e)} required/>
                </div>
              </div>
             
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
                                                <li key={index}><input type='checkbox' value={item._id} name="amenities" 
                                                checked ={roomData.amenities.includes(item._id) || false}
                                                onChange={(e)=>changeInputValue(e)} />
                                                <img src={`${baseUrl}${item.image}`}   alt="image"
                                                 /> 
                                                <span>{item.title}</span> </li> 
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
                  <div className="mb-3 row">
                  
                    {/* ========================================================================================= */}
                    <div className="mb-3 col-lg-12">
                      <label
                        htmlFor="example-text-input"
                        className="form-label"
                      >
                        Stay Duration	
                      </label>
                      <div className='row'>
                        <div className='col-lg-3'>
                            <input className="form-control" type="number" name="duration_from" placeholder='Duration From'  
                            value={priceData.duration_from}
                            onChange={(e)=>changePriceInput(e)}/> 
                            <span className='error_message' id="duration_from_error"></span>
                        </div> 
                        <div className='col-lg-3'> 
                            <input className="form-control" type="number" name="duration_to" placeholder='Duration To' 
                             value={priceData.duration_to}
                             onChange={(e)=>changePriceInput(e)}
                             />
                            <span className='error_message' id="duration_to_error"></span>

                        </div> 

                        <div className='col-lg-4'> 
                            <select name='time_duration' className="form-select"  
                            value={priceData.time_duration}
                            onChange={(e)=>changePriceInput(e)}> 
                                        <option value='weeks'>weeks</option>
                                        <option value='Monthly'>Monthly</option>
                            </select>
                            <span className='error_message' id="time_duration_error"></span>

                        </div>  
                      </div> 
                    </div>
                    <div className="mb-3 col-lg-6">
                      <label htmlFor="example-text-input" className="form-label" >Move</label> 
                      <input className="form-control" type="text" name="move"  
                      value={priceData.move}
                        onChange={(e)=>changePriceInput(e)}
                     />
                            <span className='error_message' id="move_error"></span>

                    </div>

                    {/* ================================================================================= */}
                    <div className="mb-3 col-lg-6">
                      <label
                        htmlFor="example-text-input"
                        className="form-label" >
                        Occupancy	
                      </label>
                      
                      <select name='occupancy' className="form-select" 
                      value={priceData.occupancy}
                      onChange={(e)=>changePriceInput(e)}
                      >
                                        <option value='Single'>Single</option>
                                        <option value='Double'>Double</option>
                            </select>
                            <span className='error_message' id="occupancy_error"></span>

                    </div>


                   
                    {/* ============================================================================= */}

                    <div className="mb-3 col-lg-6">
                      <label
                        htmlFor="example-text-input"
                        className="form-label"
                      >
                        Currency	
                      </label>
                      <div className='row'>
                        <div className='col-lg-12'>
                            <select name='currency' className="form-select" 
                            value={priceData.currency}
                            onChange={(e)=>changePriceInput(e)} >
                            

                                        <option value=''>Select Currency</option>
                                        <option value='INR'>INR</option>
                                        <option value='USD'>USD</option>
                            </select>
                            <span className='error_message' id="currency_error"></span>

                        </div> 
                          
                      </div> 
                    </div>
                    {/* ================================================================================= */}
                    <div className="mb-3 col-lg-6">
                      <label
                        htmlFor="example-text-input"
                        className="form-label"
                      >
                        Price	
                      </label>
                      <div className='row'> 
                        <div className='col-lg-12'>
                        <input className="form-control" type="text" name="price" placeholder='Amount' 
                         value={priceData.price}
                         onChange={(e)=>changePriceInput(e)} />
                            <span className='error_message' id="price_error"></span>

                        </div>  
                      </div> 
                    </div>
                    
                    {/* ======================================================================== */}
                    <div className="mb-3 col-lg-6">
                      
                      <button type='button' className='add_more_button' onClick={AddPriceData}>Add</button>
                       
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-12' id="price_data_container" style={{display:`${roomData.price_data.length>0?'':'none'}`}}>
                <table  className="table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>Stay Duration</th>
                        <th>Move</th>
                        <th>Occupancy</th>
                        <th>Price</th> 
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody id="price_data_row">
                         {roomData.price_data.length>0 && roomData.price_data.map((item, index)=>(
                            <tr key={index}>
                                <td>{item.duration_from}-{item.duration_to} {item.time_duration}</td>
                                <td>{item.move}</td>
                                <td>{item.occupancy}</td>
                                <td>{item.currency} {item.price}/{item.time_duration}</td>
                                <td onClick={()=>deletePriceData(index)}><i className="far fa-trash-alt" />Delete</td>
                            </tr>
                         ))}

                    </tbody>
                </table>
              </div>
            </div>
          </div>
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
          <div className="card">
            <div className="card-body">
              <div className="search-box">
                <h5 className="mb-3">Status</h5>
                <div className="px-2 position-relative">
                  <select className="form-select" name="status" value={roomData.status} 
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

export default AddRooms

