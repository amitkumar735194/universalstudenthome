import { getResponse } from "@/helper/helper";
import { City } from "@/Http/Models/cities";
import { propertyDetails } from "@/Http/Models/property";

export async function GET(request) {
    
    try{ 
        const cities = await City.find().sort({name:1}).exec();
        const cityWithProperty = await Promise.all(
            cities.map(async (city) => {
               const propertyCount = await propertyDetails.countDocuments({city_id:city._id});
               return {
                ...city.toObject(),
                propertyCount  
            };
            })
        );
        const retData = {
            cities:cityWithProperty
        };
        return getResponse(true, retData,200)
    }catch(error){
        console.log(error)
        return getResponse(false, error,400)

    }
}