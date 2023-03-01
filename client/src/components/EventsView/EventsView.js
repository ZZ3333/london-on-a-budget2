import React, { useEffect, useState } from "react";
import axios from "axios";



const EventsView = () => {
  const [events, setEvents] = useState([]);

  useEffect(() =>{
    axios.get("/events")
    .then((response) =>{
      setEvents(response.data);
    })
    .catch((error) =>{
      console.log(error);
    });
  }, []);
  return (
    <div>
      <h5>Events</h5>
      <ul>
        {events.map((event) =>(
          <li key={event._id}>{event.name}</li>
        ))}
      </ul>
      <img src="https://i.postimg.cc/BnMLZpWz/Rectangle-1.png" alt="" />
    </div>
  );
};

export default EventsView;
