import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <span className="Weather">
      <span className="temperature">
        <strong>{Math.round(props.celsius)}</strong>
      </span>
      <span className="units">°C</span>
    </span>
  );
}
