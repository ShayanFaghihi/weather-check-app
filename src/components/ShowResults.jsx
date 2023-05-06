import React from "react";

const ShowResults = ({results} ) => {
  if (results) {
    const location = results.location.name;
    const tempC = results.current.temp_c;
    const tempF = results.current.temp_f;
    const conditionIconURL = results.current.condition.icon;
    const condition = results.current.condition.text;
    const humidity = results.current.humidity;
    const windSpeed = results.current.wind_kph;

    return (
      <div className="results-box">
        <h2 className="results-box__title">Weather in {location}</h2>
        <div className="results-box__data">
          <div className="results-box__data--temp">
            <span>{tempC} </span>
            <span>℃</span>
          </div>
          <div className="results-box__data--condition">
            <img
              src={'http:' + conditionIconURL}
              alt="Current Location Condition Sign"
            />
            <span>{condition}</span>
          </div>
          <div className="results-box__data--humidity">Humidity: {humidity}%</div>
          <div className="results-box__data--wind">Wind Speed: {windSpeed} km/hr</div>
        </div>
      </div>
    );
  }
};

export default ShowResults;
