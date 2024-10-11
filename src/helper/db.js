import mongoose from "mongoose";
import { Admin } from "@/models/Admin";

export const connectDb=async ()=>{

    try{
    const {connection} =await  mongoose.connect(process.env.MONGO_DB_URI,{
            dbName: "rpsmedcare",
            
        });

        console.log('mongoDB Connect data base');
      const admin =   new Admin({
            name:'Amit Kumasr',
            email:'amitkumar@gmsail,com',
            password:'1s23454',
            username:'ussesdsdrname',
            mobile:7895127070,
        })


    //    await admin.save();
        console.log('admin created');

        // console.log(connection.host);
    }catch(error){
        console.log('fail to connect database');
        console.log(error);
    }
}