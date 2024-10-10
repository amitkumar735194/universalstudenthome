import { connectDb } from "@/helper/db";
import { room, roomAmenity, roomPrices } from "@/Http/Models/rooms";

const { NextRequest, NextResponse } = require("next/server")

 
export async function POST(request){ 

    const { property_id, room_title, description, amenities, price_data, status } = await request.json();
   
    const addRoom = new room({
        property_id, room_title, description, status
    })

    try{
        await addRoom.save();
        addRoomPrice(price_data, addRoom._id);
        addAmenities(amenities, addRoom._id);
        return NextResponse.json({status:true, data:'Room Has been added successfully.'});
    }catch(error){ 
        return NextResponse.json({status:false, data:'Failed'}); 
    }
   
}


const addRoomPrice= async (price_data,room_id)=>{

    console.log(price_data, room_id);
    try{
        for (const item of price_data) {
            const price = new roomPrices({
                room_id: room_id,
                duration_from: item.duration_from,
                duration_to: item.duration_to,
                time_duration: item.time_duration,
                move: item.move,
                occupancy: item.occupancy,
                currency: item.currency,
                price: item.price,
            });
            await price.save();  
         }
         return true;
    }catch(error){
        console.log(error)
        return false
    }
}




async function addAmenities(amenities, room_id){ 
    console.log(amenities, room_id);
    try{
        for (const item of amenities) {
            const amenity = new roomAmenity({
              room_id: room_id,
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


export async function GET(request){

    try{
        const roomList = await room.find()
                            .populate('property_id','title')
                            .sort({room_title:1})
                            .exec();

            const roomWithPrice = await Promise.all(
                roomList.map(async (room)=>{
                    const prices = await roomPrices.find({room_id:room._id})

                    return {
                        ...room.toObject(),
                        prices
                    }
                })
            );
    return NextResponse.json({status:true, list:roomWithPrice}) 
    }catch(error){
        return NextResponse.json({status:false}) 
    }
}