import mongoose, { Schema } from "mongoose";

const user = new Schema('users',{
   name: {type:String,required:[true, 'Name is required.']},
   email: {type:String,required:[true, 'Email is required.']},
   mobile: {type:String, required:[true,'Mobile is required']},
});