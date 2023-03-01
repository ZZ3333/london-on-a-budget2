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
      addressLine: {
        type: String
      },
      price: {
        type: Number
      },
      legalAgeRestriction: {
        type: Boolean
      }
    })


const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
