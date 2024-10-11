"use client"
import React, { useEffect, useState } from 'react'
import 'parsleyjs/src/parsley.css'; 
import $ from 'jquery'
// import 'parsleyjs';
import { baseUrl } from '@/helper/helper';
import Swal from 'sweetalert2';
import Link from 'next/link';
import Image from 'next/image';




const AddCity = () => {


  
  const [cityData, setCityData] = useState({
    country_id:'',
    name:'',
    image:'',
    status:'1',
    review :1
  })

const [countryList, setCountryList] = useState(null);
const [cityList, setCityList] = useState(null);


  const updateCityData =(e)=>{
    const {name, value} = e.target;
    if(name=="image"){
        setCityData((preData)=>({
              ...preData,
              [name]:e.target.files[0]
        }));
    }else{
      setCityData((preData)=>({
          ...preData,
          [name]:value
    }));
    } 
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
  
// ===========================

useEffect(()=>{

  $('.loaderouter').css('display','flex'); 
    
  fetch(baseUrl+'api/admin/auth/city',{
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
      console.log(data.data)
      setCityList(data.data);
     }
     
  }).catch((error)=>{
    $('.loaderouter').css('display','none'); 

    console.log(error)
  })

},[])


   

  const AddUpdateCity =(e)=>{
    e.preventDefault();

    $('.loaderouter').css('display','flex'); 
   
    const formData = new FormData();
    formData.append('country_id',cityData.country_id);
    formData.append('name',cityData.name);
    formData.append('image',cityData.image);
    formData.append('review',cityData.review);
    formData.append('status',cityData.status);
    let method ='POST'; 
    if(cityData._id){
      formData.append('_id', cityData._id); 
      method= 'PUT'; 
    }   

    fetch(baseUrl+'api/admin/auth/city',{
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
        setCityList(data.list);

        setCityData({
          country_id:'',
          name:'',
          image:'',
          status:'1',
          review :1
        });

      }else{
        Swal.fire({
          title: 'Error!',
          text: data.Message,
          icon: 'error', 
          confirmButtonText: 'Okey  '
        });
      }
    }).catch((error)=>{
      console.log(error)
      $('.loaderouter').css('display','none'); 

    })
    
  }


  
  // ===========================================

  const deleteCity=(id,e)=>{
    e.preventDefault(); 
    console.log(id)
    if(confirm('Are you sure to delete this Country?')){
      fetch(baseUrl+'api/admin/auth/city',{
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
          setCityList(cityList.filter((city) => city._id !== id));
         }
         
      }).catch((error)=>{
        console.log(error)
      })

    }
  }

  const editCity=(city,e)=>{
    // e.preventDefault(); 
    console.log(city)
    setCityData(city);

    setCityData((preData)=>({
        ...preData,
        country_id:city.country_id._id 
    }));
  }

  
  useEffect(()=>{

    
    fetch(baseUrl+'api/admin/auth/add-country',{
      method:'GET',
       
    }).then((response)=>{
        if(!response.ok){
          console.log(response);
          throw new Error('Network issue');
        }
        return response.json();
    }).then((data)=>{ 
       if(data.status){
        setCountryList(data.data);
       }
       
    }).catch((error)=>{
      console.log(error)
    })

  },[])

  return (
    <>
      <div className="page-content">
  <div className="container-fluid">
    {/* start page title */}
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">Add Cities</h4>
          <div className="page-title-right">
            <ol className="m-0 breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript: void(0);"> Dashboard</a>
              </li>
              <li className="breadcrumb-item">
                <a href="javascript: void(0);"> Top Cities</a>
              </li>
              <li className="breadcrumb-item active">Add Cities</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    {/* end page title */}
    <form action='#' data-parsley-validate onSubmit={(e)=>AddUpdateCity(e)}>

    
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            
            <div className="row">

            <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Country
                    </label>
                    <select
                      className="form-select" 
                      name='country_id'
                      value={cityData.country_id}
                      onChange={(e)=>updateCityData(e)}
                      required
                    >
                       <option value="">Select Country</option> 
                      {countryList && countryList.map((item, index)=>(
                          <option value={item._id} key={index}>{item.name}</option> 
                      ))}
                     
                      </select>

                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      City Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="City Name"
                      name='name'
                      value={cityData.name}
                      onChange={(e)=>updateCityData(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Upload City Image
                    </label>
                    <input className="form-control" type="file" 
                    required
                    name='image'
                    
                    onChange={(e)=>updateCityData(e)}
                    />
                    <div className="size">
                      Photo size: width:350px, height:240px
                    </div>
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
                      <select className="form-select" name='status' value={cityData.status} onChange={(e)=>updateCityData(e)}>
                        <option value={1}  >Active</option>
                        <option value={0}   >Draft</option>
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
          <div className="card">
            <div className="card-body">
              <div className="search-box">
                {/*   <h5 class="mb-3">Product organization</h5> */}
                 
                <div className="mb-3 form-group">
                  <label>Review</label>
                  <div className="px-2 position-relative">
                    <select className="form-select" required
                    value={cityData.review}
                    name='review' onChange={(e)=>updateCityData(e)}>
                      <option value={'1'}   >1 Star</option>
                      <option value={'2'}   >2 Star</option>
                      <option value={'3'}   >3 Star</option>
                      <option value={'4'}   >4 Star</option>
                      <option value={'5'}  >5 Star</option>
                    </select> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    </form>
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
                      <th width={450}>City Name</th>
                      <th>City Image</th> 
                      <th>Review</th>
                      <th width={15}>Status</th>
                      <th width={10}>Edit</th>
                      <th width={50}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>

                    {cityList && cityList.map((item, index) =>(
                      <tr key={index}>
                      <td>{index}</td>
                      <td>{item.country_id.name}</td>
                      <td>{item.name}</td>
                      <td>
                        <img src={item.image} 
                         alt="image"
                         />
                      </td> 
                      <td>{item.review}</td>

                      <td>
                        <a href="#" className="active2">
                          {item.status==1?'Active':'Deactive'}
                        </a>
                      </td>

                      <td>
                        <Link href="#" onClick={(e)=>editCity(item,e)}>
                          <i className="fas fa-pencil-alt" />
                        </Link>
                      </td>
                     
                      <td>
                        <Link href="#" onClick={(e)=>deleteCity(item._id,e)}>
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

export default AddCity
