import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import sharp from "sharp"; 
import { connectDb } from "@/helper/db";
import { City } from "@/Http/Models/cities";
import mongoose from 'mongoose';
import { slugify } from "@/helper/helper";

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


export const POST = async (req, res) => {
    const formData = await req.formData();
    
      
    const image = formData.get("image"); 
    const name = formData.get("name");
    const status = formData.get("status");
    const country_id = formData.get("country_id");
    const review = formData.get("review");
    if (!image) {
      return NextResponse.json({ Message: "No files received." }, { status: 400 });
    }
  
    const buffer = Buffer.from(await image.arrayBuffer()); 
    const extension = path.extname(image.name);   
    const filename = `city${rand(11111, 99999)}${extension}`; 
    const outputFilePath = path.join(process.cwd(), "public/uploads/city/", filename);
     
  
    try {
      // Resize the image to a specific width and height (e.g., 500x500)
      const resizedImageBuffer = await sharp(buffer)
        .resize(350, 240) // You can adjust the width and height as per your requirements
        .toBuffer();
  
      // Save the resized image
      await writeFile(outputFilePath, resizedImageBuffer);
  
      
      const city = new City({
        name,
        slug:slugify(name),
        image: `/uploads/city/${filename}`,  
        status,
        country_id,
        review
      });
      
      await city.save();
      const cityList = await City.find()
                    .populate('country_id', 'name flag status') // Populate relevant fields from Country
                    .sort({ name: 1 }) // Sort by city name
                    .exec();
      return NextResponse.json({ Message: "Success", status: true , list:cityList});
    } catch (error) {
      console.log(error)
      return NextResponse.json({ Message: "Failed", status: false });
    }
  }




  export async function GET(request) {
    const { searchParams } = new URL(request.url);  
    const country_id = searchParams.get('country_id');  
  
    try {
      let cityList;
  
       
      if (country_id) {
        if (!mongoose.Types.ObjectId.isValid(country_id)) {
          return NextResponse.json({ status: false, message: 'Invalid country_id' });
        }
        cityList = await City.find({ country_id: new mongoose.Types.ObjectId(country_id) })
          .sort({ name: 1 })  
          .exec();
      } else {
        cityList = await City.find()
          .populate('country_id', 'name flag status')  
          .sort({ name: 1 }) 
          .exec();
      }
  
      return NextResponse.json({ status: true, data: cityList });
    } catch (error) {
      console.error("Error fetching city list:", error);
      return NextResponse.json({ status: false, data: error.message });
    }
  }

  
export async function DELETE(request) {
  
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json({ Message: 'City ID is required' ,status: false });
    }

    try{ 
      const deletedCity = await City.findByIdAndDelete(id);
      return NextResponse.json({status:true, data:'City has been deleted successfully'}) 
    }catch(error){
      console.log(error)
      return NextResponse.json({status:false, data:'Error'})
    } 
}



export async function PUT(request) {

    const formData = await request.formData();
    const image = formData.get("image"); 
    const name = formData.get("name");
    const status = formData.get("status");
    const country_id = formData.get("country_id");
    const review = formData.get("review");
    const _id = formData.get("_id");
    let outputFilePath ="";
    let filename = "";
    if (image  && typeof image !== 'string') { 
      const buffer = Buffer.from(await image.arrayBuffer()); 
      const extension = path.extname(image.name);   
       filename = `city${rand(11111, 99999)}${extension}`; 
       outputFilePath = path.join(process.cwd(), "public/uploads/city/", filename);
  
      try{
            const resizedImageBuffer = await sharp(buffer)
            .resize({width:350})  
            .toBuffer();
  
           
          await writeFile(outputFilePath, resizedImageBuffer);
      }catch(error){
          return NextResponse.json({status:false, data:'invalid image'})
      }
   
    }
  
  
    try{
  
       
        const city = await City.findOne({_id});
        city.name = name;
        city.slug = slugify(name);
        city.status = status;
        city.review = review;
        city.country_id = country_id;
        if(outputFilePath){
        city.image = `/uploads/city/${filename}`; 
        }
        await city.save();
        const cityDataList = await City.find()
        .populate('country_id', 'name flag status') // Populate relevant fields from Country
        .sort({ name: 1 }) // Sort by city name
        .exec();
  
        return NextResponse.json({status:true, Message:'City updated successfully.',list:cityDataList});
      }catch(error){
        
              return NextResponse.json({status:false, Message:'error'})
          }
   
  }