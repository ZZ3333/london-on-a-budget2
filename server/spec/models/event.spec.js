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
  it("has a name", () => {
    const event = new Event({
      name: "testEvent",
    });
    expect(event.name).toBeDefined();
    expect(event.name).toEqual("testEvent");
  });
  it("has a description", () => {
    const event = new Event({
      description: "this is a test event",
    });
    expect(event.description).toBeDefined();
    expect(event.description).toEqual("this is a test event");
  });
  it("has a genre", () => {
    const event = new Event({
      genre: "tech",
    });
    expect(event.genre).toBeDefined();
    expect(event.genre).toEqual("tech");
  });

});