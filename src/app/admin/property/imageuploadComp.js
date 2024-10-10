"use client"
 
import { baseUrl } from "@/helper/helper";
import Image from "next/image";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
// import styles from "../styles/Home.module.css";
export default function DropzonImage({propertyId, position, updateImageFun, uploadFor}) {

    const [selectedImages, setSelectedImages] = useState([]);
    const [imageFromData, setImageFromData] = useState({
        _id:propertyId,
        images:[],
    });

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
      acceptedFiles.forEach((file) => {
        setSelectedImages((prevState) => [...prevState, file]);
      });
       
    }, []);
  
    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
    } = useDropzone({ onDrop });
  


    const uploadImage=(e)=>{
        e.preventDefault();
        if(selectedImages.length==0){
            Swal.fire({
                title:'Validation Error',
                icon:'error',
                text:'Upload minimum one image',
            })
            return false;
        }
        setImageFromData((prevData)=>({
            ...prevData,
            images:selectedImages
        }))
 
        const formData = new FormData(); 
        formData.append('_id',propertyId);
        formData.append('position',position);
        // formData.append('images',imageFromData.images);
        selectedImages.forEach((image, index) => {
          formData.append('images', image); // Use the same key 'images' for each image
        });
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
            updateImageFun(data.images)
            Swal.fire({
              title:"Success",
              text:data.data,
              icon:"success"
            });

            setImageFromData({
              _id:propertyId,
              images:[],
            })
            setSelectedImages([])
           }
        }).then((error)=>{
          console.log(error)
        })
    }

    const deleteImage = (index) => {
        const updatedList = selectedImages.filter((_, i) => i !== index);
        setSelectedImages(updatedList);
        console.log(updatedList); // For debugging purposes
      };
  return (
    <div className="styles-container">
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop file(s) here ...</p>
        ) : (<div className="upload_image_container"><i class="fas fa-cloud-upload-alt"></i>
          <p>Drag and drop file(s) here, or click to select files</p></div>
        )}
      </div>
      {/* <button onClick={uploadImage}>check data</button> */}
      

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {selectedImages.map((file, index) => (
          <div key={index} style={{ display: 'inline-block', width: '100px', height: '100px', position:'relative' }}>
            <Image
              src={URL.createObjectURL(file)} // Preview image
              alt={`file preview ${index}`}
              width={'100%'}
              height={"100%"}
              style={{  objectFit: 'cover', borderRadius:'5px', border:'1px solid #000'}}
            />
                <div className="close" onClick={()=>deleteImage(index)}>X</div> 
          </div>
        ))}
      </div>

      <div className="mt-4 row" style={{display:'flex',justifyContent:'right'}}>
              <div className="col-sm-auto ">
                <button type="button" className="btn btn-primary btnfdf" onClick={(e)=>uploadImage(e)}>
                  Upload
                </button>
              </div>
            </div>
    </div>
  );
}
