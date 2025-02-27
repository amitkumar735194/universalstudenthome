
import { connectDb } from "@/helper/db";
import { City } from "@/Http/Models/cities";
import { propertyDetails } from "@/Http/Models/property";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

connectDb();
// export async function generateStaticParams() {
//     const properties = await getProperties(); // Replace with your data fetching logic
  
//     return properties.map((property) => ({
//       property_id: property.id.toString(),  // Adjust property ID accordingly
//     }));
//   }

  
export async function GET(request){
    
    const { searchParams } = new URL(request.url);
    const property_id = searchParams.get('property_id');
    // const { property_id } = params;
    //  return NextResponse.json({property_id})
    try{ 
        const propertyList = await propertyDetails.findById(property_id)
                                    .populate('country_id','name')
                                    .populate('city_id','name')
                                    .populate('property_type_id','property_type') ;

    
                               
         const cityList = await City.find({
                                        country_id: new mongoose.Types.ObjectId(propertyList.country_id._id)
                                      })
                                      .sort({ name: 1 })
                                      .exec();

          const allProperties = await propertyDetails.find({ 
                                                        status: 1, 
                                                        country_id: new mongoose.Types.ObjectId(propertyList.country_id._id),
                                                        city_id: new mongoose.Types.ObjectId(propertyList.city_id._id),
                                                    })
                                            .sort({ title: 1 })
                                            .exec();                    
                                  
        return NextResponse.json({status:true, data:propertyList, cityList:cityList, allProperties:allProperties}); 
    }catch(error){
         console.log(error)
         return NextResponse.json({status:false, data:error})
    } 
}