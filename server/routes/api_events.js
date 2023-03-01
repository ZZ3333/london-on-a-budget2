const express = require("express");
const APIEventsController = require("../controllers/api_events");
const router = express.Router();

router.post("/", async (req, res) => {
  const events = await APIEventsController.addEvents();

  if (events) {
    res.status(201).send(events);
  } else {
    res.status(500).send({ error: "Unable to retrieve and save events" });
  }
});

module.exports = router;
