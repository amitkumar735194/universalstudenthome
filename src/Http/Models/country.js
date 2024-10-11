const { Schema, default: mongoose } = require("mongoose");


const countrySchema = new Schema({
    name:{
        type:String,
        required:[true, 'Property name is required.']
    },
    slug:String,
    flag:String,
    status:String,
    
}, { timestamps: true })

export const Country = mongoose.models.Country || mongoose.model('Country',countrySchema);