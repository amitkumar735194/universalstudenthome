import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import sharp from "sharp";
import { connectDb } from "@/helper/db";
import { propertyRightImages } from "@/Http/Models/property";
import mongoose from "mongoose";
 

// connectDb();

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export async function POST(request, response){
    const formData  = await request.formData();

    const images = formData.getAll("images");
    const _id = formData.get("_id"); 
    const position = formData.get("position"); 


    let img_position = "left";
    if(position=="Right" || position=="right"){
      img_position = "right";
    }else if(position=="Left" || position=="left"){
      img_position = "left" 
    }

    if(images.length>0){
        for(const item of images){
            const buffer = Buffer.from(await item.arrayBuffer());
            
            const extension = path.extname(item.name);   
            const filename = `img${rand(1111111, 9999999)}${extension}`;
          
            // const filename = item.name.replaceAll(" ", "_");
            if(img_position == "left"){
                const uploadingPath =  "public/uploads/pImage/";
                await  uploadImageFun(item, uploadingPath, filename,1400);

            }else{
              const uploadingPath1 =  "public/uploads/propertyRightImgSmall/";
              const uploadingPath2 =  "public/uploads/propertyRightImg/";
              await uploadImageFun(item, uploadingPath1, filename,194);
              await uploadImageFun(item, uploadingPath2, filename,1400);
            }
            // uploadImageFun(item, uploadingPath, filename,1400);
            // const outputFilePath = path.join(process.cwd(), "public/uploads/pImage/", filename); 

            const propertyPhoto = new propertyRightImages({
                property_id: _id,
                image: filename,
                position: img_position
            })
            await propertyPhoto.save();
        }
    }
   
     

    const photos = await propertyRightImages.find({ property_id: new mongoose.Types.ObjectId(_id),position:img_position });
    
    return NextResponse.json({status:true, data:"Image Uploaded successfully.", images:photos});
}



export async function DELETE(request) {
    const {_id, property_id, position} = await request.json(); 

    let img_position = "left";
    if(position=="Right" || position=="right"){
      img_position = "right";
    }else if(position=="Left" || position=="left"){
      img_position = "left" 
    }
    try{ 
          const deleteImage = await propertyRightImages.findById(_id);
          if (!deleteImage) {
            return { status: false, data: 'Image not found' };
          } 
          await deleteImageFun(deleteImage.image) 
          await propertyRightImages.findByIdAndDelete(_id);

          // const photos = await propertyRightImages.find({ property_id: new mongoose.Types.ObjectId(property_id),position:img_position }); 
          return NextResponse.json({status:true, data:"Image remove successfully." });

        }catch(error){
          console.log(error)
           return NextResponse.json({status:false, data:"failed."}); 
        }
}








export async function uploadImageFun(image, uploadingPath, filename, width_size){

  const buffer = Buffer.from(await image.arrayBuffer());  
  const outputFilePath = path.join(process.cwd(), uploadingPath, filename); 
  try{
      const metadata = await sharp(buffer).metadata();
      if(metadata.width > width_size){
          const resizedImageBuffer = await sharp(buffer)
          .resize({ width: width_size })
          .toBuffer();
          await writeFile(outputFilePath, resizedImageBuffer)
      }else{
          await writeFile(outputFilePath, buffer)
      }
      
      return true;
  }catch(error){
    console.log(error)
    return false;
  }
}



 async function deleteImageFun(uploadingPath) {
   
  const filePath = path.join(process.cwd(), uploadingPath);
  try {
      await fs.unlink(filePath); 
      return true;
  } catch (error) { 
      return false;
  }
}