import React, { useContext, useEffect } from "react";
import moment from "moment";
import eventContext from "../context/events/eventContext";
import Map from "./Map.js";
// comente {event}
const Event = () => {
  // define context
  const EventContext = useContext(eventContext);
  const { message, getCreator, creatorInfo, event } = EventContext;
  // get craetor info when component is loaded
  useEffect(() => {
    // if there is an error
    if (message) {
      //mostrarAlerta(mensaje.msg, mensaje.categoria);
      console.log(message);
    }
    getCreator(event.creator);
    // eslint-disable-next-line
  }, [message]);

  return (
    <div className=" mt-20 p-3 font-bold mx-20 bg-gray-200 text-gray-600 border border-gray-300">
      <h1 className="text-5xl text-center uppercase">{event.title}</h1>
      {creatorInfo ? (
        <h2 className="text-xl text-center">Posted by {creatorInfo.name} </h2>
      ) : null}
      <h2 className="text-xl text-center">Hosted by {event.host} </h2>
      <div className="pb-10">
      <p>Date: {moment(event.date).format("L")} </p>
      <p>Time: {moment(event.date).format("LT")}</p>
      <p>Details: {event.details}</p>
      </div>
      <Map
      city={event.city}
      />
    </div>
  );
};

export default Event;
