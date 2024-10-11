import { connectDb } from "@/helper/db";
import { getResponse } from "@/helper/helper";
import { City } from "@/Http/Models/cities";
import { Property, propertyDetails } from "@/Http/Models/property";
import mongoose from "mongoose";

connectDb();
export async function GET(request) {
    
    const { searchParams } =  new URL(request.url);
    const slug = searchParams.get('slug');

    try{
        const city = await City.findOne({slug:slug});
        const totalProperty = await propertyDetails.countDocuments({ city_id: city._id });

        // Prepare city data with total property count
        const cityData = {
          ...city.toObject(),
          totalProperty
        };
        // const property = await propertyDetails.find({city_id:new mongoose.Types.ObjectId(city._id)});

        const properties = await propertyDetails.aggregate([
            {
              $match: {
                city_id: new mongoose.Types.ObjectId(city._id) ,
                status:"1"
              }
            },
            {
                $lookup:{
                    from:"rooms",
                    localField: "_id",
                    foreignField:"property_id",
                    as:"rooms"
                }
            },
            {
                $unwind: {
                  path: "$rooms",
                  preserveNullAndEmptyArrays: true // Optional: Include properties without rooms
                }
              },
            
              {
                $match: {
                  "rooms.status": "1" // Filter rooms with status "1"
                }
              },

            
            {
                $lookup: {
                  from: "roomprices", 
                  localField: "rooms._id",  
                  foreignField: "room_id",  
                  as: "roomPrices" 
                }, 
              },
              
              
              {
                $lookup: {
                  from: "propertyrightimages", 
                  localField: "_id",  
                  foreignField: "property_id",  
                  as: "leftImage" 
                }, 
              },

              
            
            {
              $group: {
                _id: "$property_type_id", // Group by property_type_id
                properties: { $push: "$$ROOT" } // Collect all documents in this group
              }
            }
          ]);

          const propertyTypes = await Property.find({status:1})

        return getResponse(true,{city:cityData,property:properties, propertyTypes: propertyTypes},200);

    }catch(error){
        console.log(error)
        return getResponse(false,error,400)
    }
}