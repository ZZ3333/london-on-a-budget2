const mongoose = require("mongoose");

require("../mongodb_helper");
const Event = require("../../models/event");

describe("Event model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.events.drop(() => {
      done();
    });
  });

  it("stores an event object", () => {
    const event = new Event({

    });
    expect(event).toBeDefined();
  });

});