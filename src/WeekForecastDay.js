import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeekForecastDay(props) {
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
return (
    <div>

                    <div className="WeekForecast-day">{day()}</div>
                    <WeatherIcon code={props.data.condition.icon} className="small-icon"/>
                    <div className="WeekForecast-temperatures">
                        <span className="WeekForecast-temp-max">{Math.round(props.data.temperature.maximum)}°</span>
                        <span className="WeekForecast-temp-min">{Math.round(props.data.temperature.minimum)}°</span>
                    </div>
                    </div>
                    )
}