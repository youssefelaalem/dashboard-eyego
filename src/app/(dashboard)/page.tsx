"use client";
import { motion } from "framer-motion";
import PeopleIcon from "@mui/icons-material/People";
import NorthIcon from "@mui/icons-material/North";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AreaChartFillByValue from "../Components/Charts/AreaChartFillByValue";
import SpecifiedDomainRadarChart from "../Components/Charts/SpecifiedDomainRadarChart";
import Calender from "../Components/Calender";
import BrushBarChart from "../Components/Charts/BrushBarChart";
import { Box, Typography } from "@mui/material";

export default function HomePage() {


  const dashboardData = [
    {
      name: "Total customers",
      num: 2201,
      percentage: 20,
    },
    {
      name: "Members",
      num: 1901,
      percentage: 20,
    },
    {
      name: "Active now",
      num: 271,
      percentage: null,
    },
  ];

  return (
    <>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#1f2937", mb: 3 }}
      >
        Dashboard
      </Typography>
      <Box className="dashboardData flex items-center md:flex-row md:justify-between gap-4 text-white">
        {dashboardData.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col justify-between w-full p-4 shadow-lg min-h-[200px] min-w-[150px]  rounded-2xl transition-transform hover:scale-[1.01] odd:bg-cyan-500 even:bg-cyan-600 max-h-[200px]"
          >
            <Box className="flex justify-between items-center">
              <span className="text-lg font-medium">{item.name}</span>
              <MoreVertIcon className="text-white hover:text-gray-300" />
            </Box>

            <p className="text-5xl font-bold">{item.num}</p>

            <Box className="flex justify-end mt-auto">
              {item.percentage !== null ? (
                <span className="bg-cyan-800 hover:bg-cyan-700 text-gray-200 rounded-2xl px-3 py-1 flex items-center gap-1 transition-all duration-300">
                  <NorthIcon
                    style={{ fontSize: "16px" }}
                    className="hover:scale-125 hover:text-green-300 transition-transform duration-300"
                  />
                  {item.percentage}%
                </span>
              ) : (
                <PeopleIcon
                  style={{ fontSize: "24px" }}
                  className="text-gray-200  hover:scale-115 transition-transform duration-300"
                />
              )}
            </Box>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="CalenderContaniner bg-white flex justify-center text-black w-full md:w-[300px] p-4 rounded-2xl shadow-lg"
        >
          <Calender />
        </motion.div>
      </Box>
      <Box className="block md:flex w-full gap-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white mt-4 p-6 rounded-2xl md:w-[50%] shadow-lg h-[300px]"
        >
          <AreaChartFillByValue />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="bg-white mt-4 p-4 rounded-2xl md:w-[50%] shadow-lg h-[300px]"
        >
          <SpecifiedDomainRadarChart />
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="bg-white mt-4 p-4 rounded-2xl shadow-lg h-[300px]"
      >
        <BrushBarChart />
      </motion.div>
    </>
  );
}
