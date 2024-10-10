import { Property } from "@/Http/Models/property";
import { NextResponse } from "next/server";
import { list } from "postcss";


export async function POST(request) {
    
    const  { property_type, status } =await request.json();

    const property = new Property({
        property_type, 
        status
    });

    try{
        await property.save();
        return NextResponse.json({data:'Property has been Added successfully', status:true}); 
    }catch(error){
        return NextResponse.json({data:'Failed', status:false});
    }

}

export async function PUT(request) {
    
    const  { property_type, status, _id } =await request.json();

    

    try{
        const property = await Property.findOneAndUpdate(
            {_id:_id},
            {
                property_type, 
                status
            },
            { new: true }
        );
        return NextResponse.json({data:'Property has been Update successfully', status:true}); 
    }catch(error){
        return NextResponse.json({data:'Failed', status:false});
    }

}

export async function GET(request) { 
    
    try{
        const property = await Property.find().sort({name:1});
        return NextResponse.json({status:true, data:property});

        }catch(error){
            return NextResponse.json({status:false, data:error}); 
        }
}

export async function DELETE(request) {
    
    const {id} = await request.json();
    try{
        const propertyType = await Property.findByIdAndDelete(id); 
        return NextResponse.json({status:true, data:'Property type has been deleted successfully.'})

    }catch(error){
        return NextResponse.json({status:false, data:'Failed'})
    }
}