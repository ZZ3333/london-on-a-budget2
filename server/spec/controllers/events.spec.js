const addEvent = require("../../controllers/events");
const mongoose = require("mongoose");
const Event = require("../../models/event");
require("../mongodb_helper");

describe("addEvents", () => {

  beforeEach(async () => {
    await Event.deleteMany({});
  });

  it("Adds a new document to the database", async () => {
    await addEvent();

    const events = await Event.find({});
    expect(events.length).toBeGreaterThan(0);
  });
});
