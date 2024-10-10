const { Schema, default: mongoose } = require("mongoose");
const { Property } = require("./property");
const { type } = require("jquery");


const roomSchema = new Schema({
    property_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PropertyDetails',
        required:[true, 'Property Id required']
    },
    room_title:{
        type:String,
        required:[true, 'Title is required']
    },
    description:{
        type:String,
        required:[true, 'Short description is required']
    },
    status:String
});

export const room = mongoose.models.Room || mongoose.model('Room',roomSchema);

// ====================================Start Room price schema models=======================================================

const roomPriceSchema = new Schema({
    room_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Room'
    },
    duration_from:{
        type:Number,
        required:[true, 'Duration from is required']
    },
    duration_to:{
        type:Number,
        required:[true, 'Duration To is required']
    },
    time_duration:{
        type:String,
        required:[true, 'Time duration is required']
    },

    move:{
        type:String
    },

    occupancy:{
        type:String,
        required:[true, 'Occupancy is required']
    },

    currency:{
        type:String,
        required:[true, 'Currency is required']
    },
    price:{
        type:Number,
        required:[true, 'Currency is required']
    },
});
 
export const roomPrices = mongoose.models.RoomPrice || mongoose.model('RoomPrice',roomPriceSchema);


// ==============================================Start room image===========================================================================


const roomImageSchema = new Schema({
    room_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Room'
    },
    image:String,
    sorting:Number,
})

export const roomImage = mongoose.models.RoomImage || mongoose.model('RoomImage',roomImageSchema)

// ======================================================================================
const roomAmenitySchema = new Schema({
    room_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Room'
    },
    amenities_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Amenities',
        required:[true, 'Property name is required.']
    },
})

export const roomAmenity = mongoose.models.RoomAmenity || mongoose.model('RoomAmenity',roomAmenitySchema)


// ======================================================================================
 