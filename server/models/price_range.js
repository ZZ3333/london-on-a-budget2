const mongoose = require('mongoose');


const PriceRangeSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event',
    required: true 
  }, 
  minPrice: {
    type: Number, 
    required: true
  }, 
  maxPrice:{
    type: Number,
    required: true
  }
});

const PriceRange = mongoose.model('PriceRange', PriceRangeSchema);

module.exports = PriceRange;