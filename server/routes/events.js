const axios = require('axios');

const express = require('express');
const router = express.Router();
const { getEvents } = require('../controllers/events');


router.get("/",
  async (req, res) => {
    const events = await getEvents();
    console.log(events);
  }
);


module.exports = router;