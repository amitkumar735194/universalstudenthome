import { type } from "jquery";

const { Schema, default: mongoose, mongo } = require("mongoose");
 
const propertySchema = new Schema({
    property_type:{
        type:String,
        required:[true, 'Property name is required.']
    },

    status:String, 
});


export const Property = mongoose.models.Property || mongoose.model('Property',propertySchema);

//=================================================================================================================================

const propertyDetailSchema = new Schema({
    property_type_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Property',
        required:[true, 'Property is required.']
    },
    country_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Country',
        required:[true, 'Country is required.']
    },

    city_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'City',
        required:[true, 'City is required']
    },
    title:{
        type:String,
        required:[true, 'Title Field is required.'],
    },
    short_description:{
        type:String,
        required:[true, 'Short description is required.'],
    },

    address:{
        type:String,
        required:[true, 'Address is required.'],
    },

    content:{
        type:String,
        required:[true, 'Address is required.'],
    },
    popular:{
        type:String, 
    },
 
    slug:String, 
    status:String, 
});


export const propertyDetails = mongoose.models.PropertyDetails || mongoose.model('PropertyDetails', propertyDetailSchema);

//===============================================================================================================================



const amenitiesSchema = new Schema({

    title:{
        type:String, 
        required:[true, 'Title is required.']
    },
    image:{
        type:String, 
        required:[true, 'Image is required.']
    },
    status: String,
});

export const Amenities = mongoose.models.Amenities || mongoose.model('Amenities',amenitiesSchema);
// ====================================================================== 

const includeBillSchema = new Schema({

    title:{
        type:String, 
        required:[true, 'Title is required.']
    },
    image:{
        type:String, 
        required:[true, 'Image is required.']
    },
    status: String,
});

export const IncludeBill = mongoose.models.IncludeBill || mongoose.model('IncludeBill',includeBillSchema);
// ====================================================================== 
const propertyAmenitiesSchema = new Schema({ 
    property_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PropertyDetails',
        required:[true, 'Property name is required.']
    },
    amenities_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Amenities',
        required:[true, 'Property name is required.']
    },
});

export const propertyAmenities = mongoose.models.PropertyAmenities || mongoose.model('PropertyAmenities',propertyAmenitiesSchema);

// ====================================================================== 
const propertyIncludeBillsSchema = new Schema({ 
    property_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PropertyDetails', 
    },
    includeBill_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'IncludeBill', 
    },
});

export const propertyIncludeBills = mongoose.models.PropertyIncludeBills || mongoose.model('PropertyIncludeBills',propertyIncludeBillsSchema);





// ====================================================================== 
const propertyRightImageSchema = new Schema({ 
    property_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PropertyDetails', 
    },
    image:{
        type:String,
       required:[true,'image required'] 
    },
    position:String
});

export const propertyRightImages = mongoose.models.PropertyRightImage || mongoose.model('PropertyRightImage',propertyRightImageSchema);

