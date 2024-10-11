const { Schema, default: mongoose } = require("mongoose");

const citySchema = new Schema({
  country_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' }, // Reference to Country model
  name: {
    type: String,
    required: [true, 'City name is required.'],
  },
  slug:String,
  image: String,
  status: String,
  review: Number,
 
}, { timestamps: true });

export const City = mongoose.models.City || mongoose.model('City', citySchema);
