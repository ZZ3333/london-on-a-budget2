const axios = require("axios");
const { getEvents } = require("./events");

jest.mock("axios");

describe("getEvents", () => {
  it("returns events data", async () => {
    const events = [
      { id: 1, title: "Event 1" },
      { id: 2, title: "Event 2" },
    ];
    const response = { data: events };
    axios.get.mockResolvedValue(response);

    const result = await getEvents();
    expect(result).toEqual(events);
  });
});
