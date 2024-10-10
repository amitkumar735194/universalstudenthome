import { connectDb } from "@/helper/db";
import { slugify } from "@/helper/helper";
import { Amenities, IncludeBill, propertyAmenities, propertyDetails, propertyIncludeBills } from "@/Http/Models/property";
import { room } from "@/Http/Models/rooms";
import { NextResponse } from "next/server";

connectDb();
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export async function POST(request) {
    
    const   {country_id, city_id, property_type_id, title, short_description, address, content, popular, amenities, Inclusive_bill, status  } = await request.json();

    
    const propertyDetail = new propertyDetails({
        country_id, city_id, property_type_id, title, short_description, address, content, popular, status,
        slug:slugify(title)+rand(11,99)
    })

    try{
        await propertyDetail.save();
        addAmenities(amenities,propertyDetail._id);
        addIncludeBill(Inclusive_bill,propertyDetail._id);
        return NextResponse.json({status:true, data:'Property has been added successfully.', propertyDetail:propertyDetail});
    }catch(error){
        console.log('Error' ,error)
        return NextResponse.json({status:false, data:error});
    }
}


async function addAmenities(amenities, property_id){ 
    console.log(amenities, property_id);
    try{
        for (const item of amenities) {
            const amenity = new propertyAmenities({
              property_id: property_id,
              amenities_id: item
            });
            await amenity.save();  
         }
         return true;
    }catch(error){
        console.log(error)
        return false
    }
   
}


async function addIncludeBill(Inclusive_bill, property_id){ 

    try{
        for (const item of Inclusive_bill) {
            const bills = new propertyIncludeBills({
              property_id: property_id,
              includeBill_id: item
            });
            await bills.save();  
         }
         return true;
    }catch(error){
        console.log(error)
        return false
    } 
}


export async function GET(request) {
    
    try{ 
        const propertyList = await propertyDetails.find()
                                    .populate('country_id','name')
                                    .populate('city_id','name')
                                    .populate('property_type_id','property_type')
                                    .sort({title:1});


                                     // Fetch rooms for each property
                                    const propertyWithRooms = await Promise.all(
                                        propertyList.map(async (property) => {
                                            const rooms = await room.find({ property_id: property._id });
                                            return {
                                                ...property.toObject(),
                                                rooms, // Add the rooms to the property object
                                            };
                                        })
                                    );
 
        return NextResponse.json({status:true, data:propertyWithRooms}); 
    }catch(error){
         console.log(error)
         return NextResponse.json({status:false, data:[]})
    } 
}

export async function DELETE(request){
    
    const {id} =await request.json();
    if (!id) {
        return NextResponse.json({ data: 'Property Id is required' ,status: false });
      }

    try{
        const deletedProperty = await propertyDetails.findByIdAndDelete(id);
        return NextResponse.json({status:true, data:'Property Deleted successfully.'});
    }catch(error){
        console.log(error)
        return NextResponse.json({status:false, data:'Failed'});
    }
}