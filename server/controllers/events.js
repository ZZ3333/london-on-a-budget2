require('dotenv').config();
const axios = require('axios');
const Event = require('../models/event');


//const apikey = process.env.API_KEY

//const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apikey}&locale=*&size=10&city=London&countryCode=GB`;


async function addEvent() {
  try {
    const response = await axios.get(
      "https://app.ticketmaster.com/discovery/v2/events?apikey=GET API KEY FROM DOT ENV AND PLACE HERE&locale=*&size=10&city=London&countryCode=GB"
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

module.exports = addEvent;

