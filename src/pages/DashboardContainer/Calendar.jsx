import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import "./styles/calendar.styles.css";

export default function Calendar() {
  return (
    <div className="calendar__container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[{ title: "My Anniversary", date: "2023-05-26" }]}
      />
    </div>
  );
}
