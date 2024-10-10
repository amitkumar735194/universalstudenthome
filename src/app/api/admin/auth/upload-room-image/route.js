// import { NextResponse } from "next/server";
// import path from "path";
// import { writeFile } from "fs/promises";
// import sharp from "sharp"; 
// import mongoose from "mongoose";
// import { roomImage } from "@/Http/Models/rooms";

// const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


// export async function POST(request, response){
//     const formData  = await request.formData();

//     const images = formData.getAll("images");
//     const _id = formData.get("_id");   

//     if(images.length>0){
//         for(const item of images){
//             const buffer = Buffer.from(await item.arrayBuffer());
            
//             const extension = path.extname(item.name);   
//             const filename = `img${rand(1111111, 9999999)}${extension}`;
//             const uploadingPath =  "public/uploads/roomImg/";
//             // const filename = item.name.replaceAll(" ", "_");

//             uploadImageFun(item, uploadingPath, filename,640);
//             const outputFilePath = path.join(process.cwd(), "public/uploads/roomImg/", filename); 

//             const roomImageSave = new roomImage({
//                 room_id: _id,
//                 image: `uploads/roomImg/${filename}`,
//             })
//             roomImageSave.save();
//         }
//     }
//     const photos = await roomImage.find({ room_id: new mongoose.Types.ObjectId(_id) }); 
//     return NextResponse.json({status:true, data:"Image Uploaded successfully.", images:photos});
// }






// async function uploadImageFun(image, uploadingPath, filename, width_size){

//     const buffer = Buffer.from(await image.arrayBuffer());  
//     const outputFilePath = path.join(process.cwd(), uploadingPath, filename); 
//     try{
//         const resizedImageBuffer = await sharp(buffer)
//         .resize({ width: width_size })
//         .toBuffer();
//         await writeFile(outputFilePath, resizedImageBuffer);
//         console.log('uploaded') 
//         return true;
//     }catch(error){
//       console.log(error)
//       return false;
//     }
// }


// async function deleteImageFun(uploadingPath) {

// const filePath = path.join(process.cwd(), uploadingPath);
//         try {
//             await fs.unlink(filePath); 
//              return true;
//         } catch (error) { 
//             return false;
//         }
// }




