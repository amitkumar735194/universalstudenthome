import { connectDb } from "@/helper/db";
import { getResponse } from "@/helper/helper";
import { propertyAmenities, propertyDetails, propertyIncludeBills, propertyRightImages } from "@/Http/Models/property";
import { room } from "@/Http/Models/rooms";
import mongoose from "mongoose";

connectDb();
export async function GET(request){
    const { searchParams } = new URL(request.url);
    const property_id = searchParams.get('property_id');

    try{

    
            const propertyDetail = await propertyDetails.findOne({_id:property_id});

             // fetch  Amenity bill
            const pAmenity = await propertyAmenities
                                .find({ property_id: new mongoose.Types.ObjectId(propertyDetail._id) })
                                .populate('amenities_id','image title')
            const pAmenityData ={
                ...propertyDetail,
                pAmenity
            }

            // fetch  inclusive bill
            const PInclusiveBill = await propertyIncludeBills
                                    .find({ property_id: new mongoose.Types.ObjectId(propertyDetail._id) })
                                    .populate('includeBill_id','image title') 
            const PInclusiveBillData ={
                            ...pAmenityData,
                            PInclusiveBill
                        }

            const pLeftImage = await propertyRightImages.find({
                property_id:new mongoose.Types.ObjectId(propertyDetail._id),
                position: "left"
            })

            const pRightImage = await propertyRightImages.find({
                property_id:new mongoose.Types.ObjectId(propertyDetail._id),
                position: "right"
            });


            const rooms = await room.aggregate([
                {
                    $match: {
                        property_id: new mongoose.Types.ObjectId(propertyDetail._id),
                        status: "1"
                    }
                },
                {
                    $lookup: {
                        from: "roomprices",
                        localField: "_id",
                        foreignField: "room_id",
                        as: "room_prices"
                    }
                },
                {
                    $lookup: {
                        from: "roomimages",
                        localField: "_id",
                        foreignField: "room_id",
                        as: "room_images"
                    }
                }
            ]);

            const returnData ={
                pDetails:PInclusiveBillData,
                leftImage:pLeftImage,
                rightImage:pRightImage,
                rooms:rooms
            }

            return getResponse(true, returnData,200);
    }catch(error){
        console.log(error)
        return getResponse(false, error, 400)
    }
}