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

    if(images.length>0){
        for(const item of images){
            const buffer = Buffer.from(await item.arrayBuffer());
            
            const extension = path.extname(item.name);   
            const filename = `img${rand(1111111, 9999999)}${extension}`;
            const uploadingPath =  "public/uploads/pImage/";
            // const filename = item.name.replaceAll(" ", "_");

            uploadImageFun(item, uploadingPath, filename,1400);
            // const outputFilePath = path.join(process.cwd(), "public/uploads/pImage/", filename); 

            const propertyPhoto = new propertyRightImages({
                property_id: _id,
                image: `uploads/pImage/${filename}`,
                position: position
            })
            propertyPhoto.save();
        }
    }
    const photos = await propertyRightImages.find({ property_id: new mongoose.Types.ObjectId(_id) });
    
    return NextResponse.json({status:true, data:"Image Uploaded successfully.", images:photos});
}



export async function DELETE(request) {
    const {_id, property_id} = await request.json(); 
    try{ 
          const deleteImage = await propertyRightImages.findById(_id);
          if (!deleteImage) {
            return { status: false, data: 'Image not found' };
          } 
          await deleteImageFun(deleteImage.image) 
          await propertyRightImages.findByIdAndDelete(_id);

          const photos = await propertyRightImages.find({ property_id: new mongoose.Types.ObjectId(property_id) }); 
          return NextResponse.json({status:true, data:"Image Uploaded successfully.", images:photos});

        }catch(error){
          console.log(error)
           return NextResponse.json({status:false, data:"failed."}); 
        }
}







 async function uploadImageFun(image, uploadingPath, filename, width_size){

            const buffer = Buffer.from(await image.arrayBuffer());  
            const outputFilePath = path.join(process.cwd(), uploadingPath, filename); 
            try{
                const resizedImageBuffer = await sharp(buffer)
                .resize({ width: width_size })
                .toBuffer();
                await writeFile(outputFilePath, resizedImageBuffer);
              console.log('uploaded')

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