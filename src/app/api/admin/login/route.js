import { Admin } from "@/models/Admin";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

connectDb();
export async function POST(request){

    const {username, password} = await request.json();

    const errors ={};

    if(username =="" || typeof username !== 'string'){
        errors.username = "Username Is required."
    }
    if(password ==""){
        errors.password = "Password Is required."
    }
  
    // return NextResponse.json({errors});
    if(Object.keys(errors).length > 0){
        const response = NextResponse.json({
            errors:errors,
            status:false,
            code:400,
        });
        return response;
    }

    try{
        const admin = await Admin.findOne({
            username:username,
        });
        if(admin===null){
              errors.username = "Invalid Username."
        }
        const passMatch = bcrypt.compareSync(password,admin.password);
         
        if(!passMatch){
            errors.password = "Invalid Password."
        }
       
       
        
        const token =jwt.sign({
            _id:admin._id,
            name:admin.name
        },process.env.JWT_KET);

        const response = NextResponse.json({
            message:"Login Success",
            status:true,
        });

        response.cookies.set('adminAuthToken',token,{
            expireIn:"1d",
            // httpOnly:false
        });

        return response;
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"some Error Occors"
        },{status:500});    
    }
}