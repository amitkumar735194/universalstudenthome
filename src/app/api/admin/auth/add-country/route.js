import { NextResponse } from "next/server";
  import path from "path";
  import { writeFile } from "fs/promises";
  import sharp from "sharp";
import { Country } from "@/Http/Models/country";
import { connectDb } from "@/helper/db";
import { slugify } from "@/helper/helper";

connectDb();


const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const POST = async (req, res) => {
  const formData = await req.formData();
  
    
  const flag = formData.get("flag");
  const _id = formData.get("_id");
  const name = formData.get("name");
  const status = formData.get("status");
  if (!flag) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await flag.arrayBuffer());
  // Get the file extension
  const extension = path.extname(flag.name);  
  // Generate a random filename with the file ext 
  const filename = `flag${rand(11111, 99999)}${extension}`;
//   const filename = file.name.replaceAll(" ", "_");
  const outputFilePath = path.join(process.cwd(), "public/uploads/country/", filename);
   

  try {
    // Resize the image to a specific width and height (e.g., 500x500)
    const resizedImageBuffer = await sharp(buffer)
      .resize(500, 500) // You can adjust the width and height as per your requirements
      .toBuffer();

    // Save the resized image
    await writeFile(outputFilePath, resizedImageBuffer);

    
    const country = new Country({
      name,
      name:slugify(name),
      flag: `/uploads/country/${filename}`,  
      status
    });
    
    await country.save();
    const countryList = await Country.find().sort({name:1}); 
    return NextResponse.json({ Message: "Success", status: 201 ,data: country, list:countryList});
  } catch (error) {
    console.log("Error occurred ", error);
    return NextResponse.json({ Message: "Failed", status: false });
  }
};


export async function GET(request){

  try{ 
    const countryList = await Country.find().sort({name:1}); 
    return NextResponse.json({status:true, data:countryList}); 
  }catch(error){
    return NextResponse.json({status:false, data:error}); 
  }
 
}


export async function DELETE(request) {
  
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json({ Message: 'Country ID is required' ,status: false });
    }

    try{ 
      const deletedCountry = await Country.findByIdAndDelete(id);
       
      
      return NextResponse.json({status:true, data:'Country has been deleted successfully', cDara:deletedCountry}) 
    }catch(error){
      console.log(error)
    }
   

}

export async function PUT(request) {

  const formData = await request.formData();
  const _id = formData.get("_id");
  const flag = formData.get("flag");
  const name = formData.get("name");
  const status = formData.get("status");
  let outputFilePath ="";
  let filename = "";
  if (flag  && typeof flag !== 'string') { 
    const buffer = Buffer.from(await flag.arrayBuffer()); 
    const extension = path.extname(flag.name);   
     filename = `flag${rand(11111, 99999)}${extension}`; 
     outputFilePath = path.join(process.cwd(), "public/uploads/country/", filename);

    try{
          const resizedImageBuffer = await sharp(buffer)
          .resize(500, 500)  
          .toBuffer();

         
        await writeFile(outputFilePath, resizedImageBuffer);
    }catch(error){
        return NextResponse.json({status:false, data:'invalid image'})
    }
 
  }


  try{

  
      const country = await Country.findById({_id});
      country.name = name;
      country.slug = slugify(name);
      country.status = status;
      if(outputFilePath){
      country.flag = `/uploads/country/${filename}`; 
      }
      await country.save();
      const countryDataList = await Country.find().sort({name:1});

      return NextResponse.json({status:true, Message:'Country update successfully.', list:countryDataList});
    }catch(error){
            return NextResponse.json({status:false, Message:'invalid image'})
        }


}