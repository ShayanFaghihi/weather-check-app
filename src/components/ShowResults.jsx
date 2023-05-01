import React from "react";

const ShowResults = () => {
  return (
    <div className="results-box">
      <h2 className="results-box__title">Weather in New Jersey</h2>
      <div className="results-box__data">
        <div className="results-box__data--temp">
          <span>26 </span>
          <span>℃</span>
        </div>
        <div className="results-box__data--condition">
          <img
            src="http://cdn.weatherapi.com/weather/64x64/day/116.png"
            alt="Current Location Condition Sign"
          />
          <span>Cloudy</span>
        </div>
        <div className="results-box__data--humidity">Humidity: 45%</div>
        <div className="results-box__data--wind">Wind Speed: 3.4 km/hr</div>
      </div>
    </div>
  );
};

export default ShowResults;
