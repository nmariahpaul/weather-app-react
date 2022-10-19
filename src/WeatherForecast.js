import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day mb-2">Thu</div>
          <WeatherIcon icon={props.icon} alt={props.alt} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">15°</span>
            <span className="WeatherForecast-temperature-min">8°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
