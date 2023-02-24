require('dotenv').config();
const axios = require('axios');
const Event = require('../models/event');
const db = require('../db');

//const apikey = process.env.API_KEY

//const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apikey}&locale=*&size=10&city=London&countryCode=GB`;


async function addEvent() {
  try {
    const response = await axios.get(
      "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&size=10&city=London&countryCode=GB"
    );
    const events = response.data._embedded.events.map((event) =>{
      return{
        name: event.name, 
        venue: event._embedded.venues[0].name,
        URL: event.url
      };
    });
    await Event.insertMany(events);
  }catch (error){
    console.error(error);
  }

};

    
newEvent();

module.exports = addEvent;

