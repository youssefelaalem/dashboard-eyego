"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calender() {
  const [date, setDate] = useState<Value>(new Date());

  return (
    <Calendar
      onChange={(value: Value) => setDate(value)}
      value={date}
      locale="en-US"
    />
  );
}
