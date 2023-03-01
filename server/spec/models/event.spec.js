const mongoose = require("mongoose");

require("../mongodb_helper");
const Event = require("../../models/event");

describe("Event model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.events.drop(() => {
      done();
    });
  });
it('saves an event to the database', async () => {
  const event = new Event({
    name: 'test',
    ticketmasterId: 'tm123456',
    url: 'www.testevent.com', 
    postCode: 'SW1 1AA',
    geoPoint: [0,0],
    venueId: 'v1234',
    venueAddress: '123 Testing place',
    description: 'This is an event',
    genre: 'Tragic',
    subgenre: 'Tech',
    accessibility: 'Wheelchair access',
    isFamilyFriendly: 'no',
    ageRestricted: 'No',
    });
    const savedEvent = await event.save();
    expect(savedEvent._id).toBeDefined();
    expect(savedEvent.name).toBe('test');
});


})

