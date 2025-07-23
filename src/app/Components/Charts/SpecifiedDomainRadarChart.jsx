import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    subject: "June",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "July",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "August",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "April",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "May",
    A: 85,
    B: 90,
    fullMark: 150,
  },
];
export default function SpecifiedDomainRadarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Low"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="High"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}
