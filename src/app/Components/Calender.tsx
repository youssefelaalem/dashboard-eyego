"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function Calender() {
  const [date, setDate] = useState<Date | [Date, Date] | null>(new Date());

  return (
    <Calendar
      onChange={(value) => setDate(value)}
      value={date}
      locale="en-US"
    />
  );
}
