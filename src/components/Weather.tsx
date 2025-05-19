import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect } from "react";

interface IWather {
  day: string;
  image: string;
  temp: number;
}
function Weather({ day, image, temp }: IWather) {
  // const {isLoggedIn} = useContext(AppContext)
  

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "2ced6e9b1ec8a8de55a34dabb65c4e89"; // Replace with your OpenWeatherMap API key
        const city = "rasht";
        const d = [{ lon: 35.8439, lat: 50.9715, cnt: 14 }];
        const response = await axios.get(
          `api.openweathermap.org/data/2.5/forecast/daily?lat=${d[0].lat}&lon=${d[0].lon}&cnt=${d[0].cnt}&appid=${apiKey}`
        );
        const data = response.data;
        console.log(data);
        // setWeatherData({
        //   temperature: Math.round(data.main.temp),
        //   weather: data.name,
        //   feelsLike: Math.round(data.main.feels_like),
        //   high: Math.round(data.main.temp_max),
        //   low: Math.round(data.main.temp_min),
        // });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    if (true) fetchWeather();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#CDD9E0",
        // width: "90px",
        height: "250px",
        gap: 3,
        padding: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
      }}
    >
      <Typography
        sx={{
          borderBottom: "2px solid #ccc",
          color: "#003464",
          paddingBottom: "20px",
          fontSize: "14px",
        }}
      >
        {day}
      </Typography>
      <img src={image} />
      <Typography sx={{ color: "#003464", fontSize: "18px" }}>
        {temp}°C
      </Typography>
    </Box>
  );
}

export default Weather;
function setWeatherData(arg0: {
  temperature: number;
  weather: any;
  feelsLike: number;
  high: number;
  low: number;
}) {
  throw new Error("Function not implemented.");
}
