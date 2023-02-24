const addEvent = require("../../controllers/events");
const mongoose = require("mongoose");
const Event = require("../../models/event");

describe("addEvents", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost/london_budget_test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Event.deleteMany({});
  });

  it("Adds a new document to the database", async () => {
    await addEvent();

    const events = await Event.find({});
    expect(events.length).toBeGreaterThan(0);
  });
});
