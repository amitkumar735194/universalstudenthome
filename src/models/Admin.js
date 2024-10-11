import mongoose, { now, Schema } from "mongoose";

const adminSchema = new Schema({
    name:String,
    email:String,
    mobile:String,
    username:{
            type: String,
            required: [true, 'Username is required'],
            
    },
    password: {
        type:String,
        required:['true','Password is required']
    },
    created_at:{
        type:Date,
        default: Date.now,
    },
    password:String,
});

export const Admin = mongoose.models.admins ||mongoose.model("admins",adminSchema)