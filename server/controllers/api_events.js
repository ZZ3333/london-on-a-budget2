const APIEvent = require("../models/api_event");
const axios = require("axios");



const APIEventsController = {
  addEvents: async () => {
    try {
      const response = await axios.get(
        "https://app.ticketmaster.com/discovery/v2/events?apikey={apikey}&locale=*&size=10&city=London&countryCode=GB"
      );

      const events = response.data._embedded.events;

      const apievents = events.map((event) => {
        return new APIEvent({
          name: event.name,
          ticketMasterId: event.id,
          startDateTime: new Date(event.dates.start.dateTime),
          endDateTime: new Date(event.dates.end.dateTime),
          onsaleOnStartDate: new Date(event.sales.public.startDateTime),
          created: new Date(),
          iterated: false,
          lastIterated: null,
          status: "upcoming",
        });
      });

      await APIEvent.insertMany(apievents);

      return apievents;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

module.exports = APIEventsController;
