import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./styles/calendar.styles.css";
import { toast } from "react-toastify";

export default function Calendar() {
  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
    toast(
      `${arg.dateStr} - portal must be opened and new event name must be handled!`
    );
  };

  return (
    <div className="calendar__container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={[{ title: "My Anniversary", date: "2023-05-26" }]}
        eventClick={(res) => {
          toast(res.event._def);
        }}
      />
    </div>
  );
}
