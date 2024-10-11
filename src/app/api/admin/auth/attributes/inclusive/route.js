import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import sharp from "sharp";  
import mongoose from 'mongoose';
import { IncludeBill } from "@/Http/Models/property";
import { connectDb } from "@/helper/db";

connectDb();
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export async function POST(request) {
     
    const formData = await request.formData();

    const title = formData.get("title");
    const image = formData.get("image"); 
    const status = formData.get("status");

    if (!image) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
      } 
      const buffer = Buffer.from(await image.arrayBuffer()); 
      const extension = path.extname(image.name);   
      const filename = `img${rand(11111, 99999)}${extension}`; 
      const outputFilePath = path.join(process.cwd(), "public/uploads/inclusive/", filename);

      try{
        const resizedImageBuffer = await sharp(buffer)
        .resize(50, 50) // You can adjust the width and height as per your requirements
        .toBuffer();

        await writeFile(outputFilePath, resizedImageBuffer);

        const inclusive = IncludeBill({
            title:title,
            status:status,
            image:`uploads/inclusive/${filename}`,
        });

        await inclusive.save();
        const inclusiveData = await IncludeBill.find().sort({title:1}); 
        return NextResponse.json({status:true, data:'Added successfully.', list:inclusiveData});
      }catch(error){
            return NextResponse.json({data:'Failed', status:false});
      }
 
}


export async function PUT(request) {
    
    // const  { title, image, status } =await request.json();
    const formData = await request.formData();

    const _id = formData.get("_id");
    const title = formData.get("title");
    const image = formData.get("image"); 
    const status = formData.get("status");

    if (!image) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
      } 
      const buffer = Buffer.from(await image.arrayBuffer()); 
      const extension = path.extname(image.name);   
      const filename = `amenity${rand(11111, 99999)}${extension}`; 
      const outputFilePath = path.join(process.cwd(), "public/uploads/inclusive/", filename);

      try{
        const resizedImageBuffer = await sharp(buffer)
        .resize(50, 50) // You can adjust the width and height as per your requirements
        .toBuffer();

        await writeFile(outputFilePath, resizedImageBuffer);

        const inclusive = await IncludeBill.findOne({_id});
        // inclusive.title =title;
        inclusive.image =`uploads/inclusive/${filename}`;
        inclusive.status = status;   
        await inclusive.save();
        const inclusiveData = await IncludeBill.find().sort({title:1}); 
        return NextResponse.json({status:true, data:'Updated successfully.', list:inclusiveData});
      }catch(error){
            return NextResponse.json({data:'Failed', status:false, error:error});
      }
 
}




export async function GET(request) { 
      try{ 
            const amenity = await IncludeBill.find().sort({title:1}); 
            return NextResponse.json({status:true, data:amenity});
        }catch(error){
            return NextResponse.json({data:'Failed', status:false});
        } 
}


export async function DELETE(request) {
  
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json({ data: 'City ID is required' ,status: false });
    }

    try{ 
      const deletedInclusive = await IncludeBill.findByIdAndDelete(id);
      return NextResponse.json({status:true, data:'Deleted successfully'}) 
    }catch(error){
      console.log(error)
      return NextResponse.json({status:false, data:'Error'})
    } 
}
