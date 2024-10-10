import { Country } from "@/Http/Models/country";
import { Amenities, IncludeBill, Property } from "@/Http/Models/property";
import { NextResponse } from "next/server";

export async function GET(request){
    try{

        const country = await Country.find({status:1}).sort({name:1});
        const propertyType =await Property.find({status:1}).sort({property_type:1});
        const amenities =await Amenities.find({status:1}).sort({title:1});
        const inclusive =await IncludeBill.find({status:1}).sort({title:1});

        return NextResponse.json({status:true,  country:country, propertyType:propertyType, amenities:amenities, inclusive:inclusive});

    }catch(error){
        return NextResponse.json({status:false, data:'Error'});
    }
    
}