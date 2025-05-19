import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "few-clouds-day": "partlycloudy",
    "scattered-clouds-day": "cloudy",
    "broken-clouds-day": "partlycloudy",
    "shower-rain-day": "rainy",
    "rain-day": "pouring",
    "thunderstorm-day": "lightning-rainy",
    "snow-day": "snowy",
    "mist-day": "fog",
    "clear-sky-night": "clear-night",
    "few-clouds-night": "partlycloudy",
    "scattered-clouds-night": "cloudy",
    "broken-clouds-night": "partlycloudy",
    "shower-rain-night": "rainy",
    "rain-night": "pouring",
    "thunderstorm-night": "lightning-rainy",
    "snow-night": "snowy",
    "mist-night": "fog",
  };
  return <WeatherSvg state={codeMapping[props.code]} className="icon" />;
}
