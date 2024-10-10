 

"use client"
import React, {useState, useEffect} from 'react'
import DropzonImage from '../imageuploadComp'
import { useSearchParams } from 'next/navigation' 
import { baseUrl } from '@/helper/helper' 
import Link from 'next/link'
import Image from 'next/image'

const UploadPropertyPhotos = () => {

   const searchParams = useSearchParams()
    const propertyId = searchParams.get('property_id');
    const position = searchParams.get('position');
    const uploadFor = searchParams.get('uploadFor');
    
    const [uploadedImages, setUploadedImages] = useState();

    function updateImageFun(imagesData){
      setUploadedImages(imagesData)
    }
    const deleteImageDatabase =(_id)=>{
      console.log(_id);
      fetch(`${baseUrl}api/admin/auth/${uploadFor=="Property"?'uplopad-image-multiple':'upload-room-image'}`,{
        method: "DELETE",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({_id:_id, property_id:propertyId })
      }).then((response)=>{ 
        if(!response.ok){
          throw new Error("Network error")
        }
        return response.json();
      }).then((data)=>{
         if(data.status){
          setUploadedImages(data.images) 
         }
      }).then((error)=>{
        console.log(error)
      })
      
      
    }

    useEffect(()=>{
      const formData = new FormData(); 
      formData.append('_id',propertyId);
      // formData.append('images',imageFromData.images);
      
      fetch(`${baseUrl}api/admin/auth/${uploadFor=="Property"?'uplopad-image-multiple':'upload-room-image'}`,{
        method: "POST",
        body:formData
      }).then((response)=>{

        if(!response.ok){
          throw new Error("Network error")
        }
        return response.json();
      }).then((data)=>{
         if(data.status){
          setUploadedImages(data.images) 
         }
      }).then((error)=>{
        console.log(error)
      })
    },[propertyId])
  return (
    <>
      <div className="page-content">
  <div className="container-fluid">
    {/* start page title */}
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">{uploadFor} Upload Image</h4>
          <div className="page-title-right">
            <ol className="m-0 breadcrumb">
              <li className="breadcrumb-item">
                <Link href="#"> Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Upload Image</li>
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
            <div className="row">
              
              <div className="col-lg-12"> 
                    <DropzonImage propertyId={propertyId} position={position}  updateImageFun={updateImageFun} uploadFor={uploadFor}/> 
                <div> 
                </div>
              </div>
               
            </div>
          </div>
          {/* end card body */}
        </div>
         
      </div>
      {/* end col */}
      <div className="col-lg-4 "></div>
      <div className="col-lg-12">
        <div className="row">
        <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <h3> Uploaded Images</h3>
            <div className="row"> 
              <div className="col-lg-12">

             {/* ========================================= */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
                {uploadedImages && uploadedImages.map((item, index) => (
                  <div key={index} style={{ display: 'inline-block', width: '100px', height: '100px', position:'relative' }}>
                    <Image
                      src={`${baseUrl}${item.image}`}  
                      alt="img" 
                      width={'100%'}
                      height={'100%'}
                      style={{ objectFit: 'cover', borderRadius:'5px', border:'1px solid #000'}}
                    />
                        <div className="close" onClick={()=>deleteImageDatabase(item._id)}>X</div> 
                  </div>
                ))}
              </div>
              {/* ================================================== */}

          
                <div>
                   
                </div>
              </div>
               
            </div>
          </div>
          {/* end card body */}
        </div>
         
      </div>
         
          {/* end card */}
        </div>
      </div>
    </div>
   
  </div>
  {/* container-fluid */}
</div>

    </>
  )
}

export default UploadPropertyPhotos
