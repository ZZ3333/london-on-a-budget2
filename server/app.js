const axios = require("axios");
const express = require("express");
const router = express.Router();
const app = express;

apiKey = "GDGXL4VWB5OHBTEDBQTN";

const params = {
  q: "javascript",
  "location.address": "London",
  price: "",
  token: apiKey,
};

axios
  .get("https://www.eventbriteapi.com/v3/organizers/55836839893/", { params })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
