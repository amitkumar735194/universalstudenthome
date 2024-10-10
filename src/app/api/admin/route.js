import { connectDb } from "@/helper/db";
import { Admin } from "@/models/Admin";
import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcryptjs";
connectDb();

export async function GET(request){

    let admins =[];
    try{
        admins= await Admin.find();
        return NextResponse.json(admins,{status:200});
    }catch(error){
        console.log(error);
        return NextResponse.json({message:false});
    }
    return NextResponse.json({name:'test'});
}

export async function POST(request){

    const {name,email,mobile,username,password} = await request.json();
    const admin = new Admin({
        name,email,mobile,username,password
    }); 

    try{
        admin.password =  bcrypt.hashSync(admin.password, parseInt(process.env.BCRYPT_SALT) )
        await admin.save();
        return NextResponse.json({name,email,mobile,username,password});
    }catch(errors){
        console.log(errors);
        return NextResponse.json({message:'failed'});

    }
   
} 
export function DELETE(request){

}