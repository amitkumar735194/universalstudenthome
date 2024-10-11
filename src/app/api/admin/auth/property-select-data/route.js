import { connectDb } from "@/helper/db";
import { City } from "@/Http/Models/cities";
import { Country } from "@/Http/Models/country";
import { Amenities, IncludeBill, Property, propertyAmenities, propertyDetails, propertyIncludeBills } from "@/Http/Models/property";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
connectDb();
export async function GET(request){
    const { searchParams } = new URL(request.url);
    const property_id = searchParams.get('update');
    
    try{
        
        let property = null;
        let cityList = [];
        let propertyWithAminityAndInclusiveBill =[]
        if(property_id){

            

            property = await propertyDetails.findById(property_id);
            let amenities = await propertyAmenities.find({property_id:new mongoose.Types.ObjectId(property_id)});
             amenities = amenities.map((item)=>item.amenities_id.toString())
            const propertyWithAminity ={
                ...property.toObject(),
                amenities
            }

            let Inclusive_bill = await propertyIncludeBills.find({property_id:new mongoose.Types.ObjectId(property_id)}).select('includeBill_id');

             Inclusive_bill = Inclusive_bill.map((item)=>item.includeBill_id.toString());
           
             propertyWithAminityAndInclusiveBill ={
                ...propertyWithAminity,
                Inclusive_bill
            }

             cityList = await City.find({ country_id: new mongoose.Types.ObjectId(property.country_id) })
            .sort({ name: 1 })  
            .exec();
        }
        const country = await Country.find({status:1}).sort({name:1});
        const propertyType =await Property.find({status:1}).sort({property_type:1});
        const amenities =await Amenities.find({status:1}).sort({title:1});
        const inclusive =await IncludeBill.find({status:1}).sort({title:1});

        return NextResponse.json({status:true,  country:country, propertyType:propertyType, amenities:amenities, inclusive:inclusive, property:propertyWithAminityAndInclusiveBill,cityList:cityList});

    }catch(error){
        console.log(error)
        return NextResponse.json({status:false, data:'Error'});
    }
    
}