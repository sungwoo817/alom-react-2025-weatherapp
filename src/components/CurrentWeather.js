import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const currentWeather = weatherData.hourly;

  return 
  <div>
    <h2>현재 날씨</h2>
    <p>기온: {currentWeather.temperature_2m[0]}°C</p>
    <p>날씨: {currentWeather.weather_code ? currentWeather.weather_code[0] : "알 수 없음"}</p>
  </div>;
};

export default CurrentWeather;
