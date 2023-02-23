const axios = require("axios");
const express = require("express");
const router = express.Router();
const app = express;


axios
  .get(
    "https://app.ticketmaster.com/discovery/v2/events?apikey=ENTERKEYHETE&keyword=free&locale=*&city=London&countryCode=GB",
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
