"use client"
// import React, { useEffect, useState } from 'react'
import React, { useEffect, useRef, useState } from 'react';
import 'parsleyjs/src/parsley.css'; 
import $, { error } from 'jquery'
// import 'parsleyjs';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { baseUrl } from '@/helper/helper';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const UpdatePropertyDetails = ({params}) => {
 
  const propertyId = params.property_id;
  const router = useRouter();
// location var start
  const mapRef = useRef(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0); 
  const [address, setAddress] = useState('');


  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAv-WwyCAZ5rJArnCELEtTalFrSBmcyLgk&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      window.initMap = () => {
        initialize();
        setLatLong(longitude, latitude);
      };
    };

    loadGoogleMapsScript();

    return () => {
      // Cleanup: Remove script when component unmounts
      const script = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (script) {
        if (document.body){ 
          document.body.removeChild(script);
        }
      }
    };
  }, [propertyId]);



  const setLatLong = (lng, lat) => {
    const myLatLng = { lat, lng };

    setProperty((prev) => ({
        ...prev,
        latitude: lat,
        longitude: lng,
      }));
    const map = new window.google.maps.Map(mapRef.current, { zoom: 15, center: myLatLng });

    const marker = new window.google.maps.Marker({
      position: myLatLng,
      map,
      draggable: true,
      animation: window.google.maps.Animation.DROP,
      title: 'Select Your Location!',
    });

    window.google.maps.event.addListener(marker, 'dragend', (event) => {
      const { lat, lng } = event.latLng;
      setLatitude(lat());
      setLongitude(lng()); 
      geocodePosition(event.latLng);
      
    });
  };

  const geocodePosition = (pos) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ latLng: pos }, (responses) => {
      if (responses && responses.length > 0) {
        updateMarkerAddress(responses[0].formatted_address);
      } else {
        updateMarkerAddress('Cannot determine address at this location.');
      }
    });
  };

  const updateMarkerAddress = (str) => {
    setAddress(str);
  };

  const initialize = () => {
    const options = { componentRestrictions: { country: 'IN' } };
    const autocomplete = new window.google.maps.places.Autocomplete(document.getElementById(`delivery_area_0`), options);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      const { lat, lng } = place.geometry.location;
      setLatitude(lat());
      setLongitude(lng());
      setLatLong(lng(), lat());
    });
  };

// location var end



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
    longitude:'',
    latitude:'',
    status:1
  })


  useEffect(()=>{
    $('.loaderouter').css('display','flex');  
    fetch(`${baseUrl}api/admin/auth/property-select-data?update=${propertyId}`,{
      method:'GET', 
    }).then((response)=>{
      if(!response.ok){
          $('.loaderouter').css('display','none'); 
        throw new Error('Network Issue')

      }
      return response.json();
    }).then((data)=>{
      $('.loaderouter').css('display','none'); 
      
      if(data.status){
        setCountry(data.country)
        setPropertyType(data.propertyType)
        setProperty(data.property)
        setAmenities(data.amenities)
        setInclusive(data.inclusive)
        setCity(data.cityList) 
      }
    }).catch((error)=>{
      $('.loaderouter').css('display','none'); 

    })
  },[propertyId])
 

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
    $('.loaderouter').css('display','flex'); 
      fetch(`${baseUrl}api/admin/auth/city?country_id=${country_id}`,{
        method:'GET', 
        headers:{
          'Content-Type': 'application/header'
        }
      }).then((response)=>{
        if(!response.ok){
            $('.loaderouter').css('display','none'); 
          throw new Error('Network Issue')
        }
        return response.json();
      }).then((data)=>{
        $('.loaderouter').css('display','flex'); 
        if(data.status){
          setCity(data.data) 
        }
      }).catch((error)=>{
        $('.loaderouter').css('display','none'); 
      })
  }
  const submitProperty=(e)=>{
    e.preventDefault() 
    $('.loaderouter').css('display','flex'); 
      fetch(baseUrl+'api/admin/auth/property/add-property',{
        method:"PUT",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(property)
      }).then((response)=>{
        if(!response.ok){
            $('.loaderouter').css('display','none'); 
          throw new Error('Network Issue');
        }
        return response.json();
      }).then((data)=>{
        $('.loaderouter').css('display','none'); 
        if(data.status){
          Swal.fire({
            title:'Success',
            icon: 'success',
            text:data.data,
            showConfirmButton:true,
            confirmButtonText:"Okey"
          }).then(()=>{

            router.push(`${baseUrl}admin/property/property-list`);
          })
          
          
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
                          <option value="">Select Cities</option>
 
                          
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
                          <option value="">Select Property Type</option> 
                          {propertyType && propertyType.map((item, index)=>( 
                          <option value={item._id} key={index}>{item.property_type}</option>
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
                                             <ul className="amenites_ei expanded">
                                              {amenities && amenities.map((item, index)=>(
                                                <li key={index}>
                                                  <input type='checkbox' value={item._id} name="amenities" 
                                                  checked={property.amenities.includes(item._id)?true:false}
                                                   onChange={(e)=>changeInputValue(e)} />
                                                <img src={`${baseUrl}${item.image}`}   alt="image"
                                                /> <span>{item.title}</span> </li>

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
                                        <ul className="amenites_ei expanded">
                                          {inclusive && inclusive.map((item, index)=>(
                                          <li key={index}><input type='checkbox' value={item._id} name="Inclusive_bill" className="Inclusive_bill"
                                          checked={property.Inclusive_bill && property.Inclusive_bill?.includes(item._id.toString())?'checked': ''}
                                          onChange={(e)=>changeInputValue(e)}  />
                                          <img src={`${baseUrl}${item.image}`} 
                                          alt="image"
                                          /> <span>{item.title}</span> </li> 
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

                                  <CKEditor required
                                          editor={ClassicEditor}
                                          data={property.content}
                                          onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setProperty((preData)=>({
                                              ...preData,
                                              content:data
                                            }));   
                                          }}

                                          
                                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* location add start */}
        <div className="card" id="locationHtml">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  {/* <!-- partial:index.partial.html --> */}
                  <label for="chkPassport">
                  <h4> Location</h4>
                  </label>
                </div>
              </div>
              <div id="location">

                <div id="location_1">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Property Area</label>
                      <div className="clearfix"></div>
                      <div className="row">
                        <div className="col-md-12 col-12">
                          <input type="text" name="delivery_area[]" id={`delivery_area_0`} value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="" />
                        </div>
                        <div className="col-md-12 col-12">
                        <div className="map" ref={mapRef} id={`googleMap_0`} style={{width:'100%',height:'300px', margin:'10px 0px'}}></div>
                            <input type="hidden" id={`latitude_0`} value={latitude} />
                            <input type="hidden" id={`longitude_0`} value={longitude} />
                        </div>
                      </div>
                    </div>
                  </div>
                   
                  
                </div>
                </div>


              </div>
            </div>
          </div>
          </div>
        {/* location add End */}
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

export default UpdatePropertyDetails

