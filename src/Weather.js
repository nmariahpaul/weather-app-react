import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container wrapper">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary"
              />
            </div>
          </div>
        </form>

        <h1>New York</h1>
        <ul>
          <li>Saturday 11:00p.m.</li>
          <li>Clear</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="sunny"
            />
            11°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 1%</li>
              <li>Humidity: 52%</li>
              <li>Wind: 6 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}