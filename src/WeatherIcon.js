import React from "react";

export default function WeatherIcon(props) {
  let displayIcon = props.icon;
  let displayIconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${displayIcon}.png`;

  return (
    <span className="WeatherIcon">
      <img src={displayIconUrl} alt={props.alt} />
    </span>
  );
}
