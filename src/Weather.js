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
                className="btn btn-secondary w-100"
              />
            </div>
          </div>
        </form>

        <h1>New York</h1>
        <ul>
          <li>Saturday 11:00</li>
          <li>Clear</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="sunny"
            />
            <span className="temperature">
              <strong>11</strong>
            </span>
            <span className="units">°C</span>
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
