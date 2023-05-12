import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Switch } from "@mui/material";

const ShowResults = ({ results, error }) => {
  const [isFarenheit, setIsFarenheit] = useState(false);

  const changeTempUnit = () => {
    setIsFarenheit(!isFarenheit);
  };
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 className="results-box__title">Weather in {location}</h2>
          <FormControlLabel
          control ={
            <Switch
              checked={isFarenheit}
              onChange={changeTempUnit}
              inputProps={{ "aria-label": "controlled" }}
              color="warning"
              className="toggleSwitch"
            />
          }
          label="℉"
          />
        </div>
        <div className="results-box__data">
          <div className="results-box__data--temp">
            <span>{!isFarenheit ? tempC : tempF} </span>
            <span>{!isFarenheit ? "℃" : "℉"}</span>
          </div>
          <div className="results-box__data--condition">
            <img
              src={"http:" + conditionIconURL}
              alt="Current Location Condition Sign"
            />
            <span>{condition}</span>
          </div>
          <div className="results-box__data--humidity">
            Humidity: {humidity}%
          </div>
          <div className="results-box__data--wind">
            Wind Speed: {windSpeed} km/hr
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return <p className="error">{error}</p>;
  }
};

export default ShowResults;
