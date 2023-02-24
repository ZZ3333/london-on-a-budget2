const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema({
      name: { 
        type: String
      },
      description: {
        type: String
      },
      genre: {
        type: String
      },
      URL: {
        type: String
      },
      image: {
        type: String
      },
      startDateTime: { 
        type: Date
      },
      postcode: {
        type: String
      },
      address_line_one: {
        type: String
      },
      price: {
        type: Number
      },
      legal_age_restriction: {
        type: Boolean
      }

    })


const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
