import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import { Bars } from "react-loader-spinner";

const API_URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "034786bf1a674163844161618231205";

const FetchData = ({ changeResults }) => {
  const [query, setQuery] = useState("");
  const [userCoordinate, setUserCoordinate] = useState("");
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);

  const queryRef = useRef("");

  useEffect(() => getUserLocation, []);

  const getUserLocation = () => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setUserCoordinate(`${latitude},${longitude}`);
    };

    const error = () => {
      changeResults({ data: "", error: "Unable to retrieve your location!" });
    };

    if (!navigator.geolocation) {
      changeResults({
        data: "",
        error: "Geolocation is not supported by your browser",
      });
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    fetchData(query);
  };

  const fetchData = (data) => {
    setShowLoadingSpinner(true);
    axios({
      method: "get",
      url: `${API_URL}?q=${data}`,
      headers: { "Content-Type": "application/json", key: API_KEY },
    })
      .then((response) => {
        if (response) {
          changeResults({ data: response.data, error: "" });
          setShowLoadingSpinner(false);
          queryRef.current.value = response.data.location.name;
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.code === "ERR_NETWORK") {
          changeResults({
            data: "",
            error: "Please Check Your Connection, and Try Again!",
          });
        } else {
          changeResults({ data: "", error: "Please Check the Query Again!" });
        }
        setShowLoadingSpinner(false);
      });
  };

  return (
    <>
      <form onSubmit={submitFormHandler} className="form">
        <input
          type="search"
          name="location-search"
          id="locationSearch"
          placeholder="Search Location (Name, IP, Zip Code)..."
          onChange={(e) => setQuery(e.target.value)}
          ref={queryRef}
        />
        <button type="submit">🔍</button>
      </form>
      <div className="myLocation">
        <button
          className="myLocation-btn"
          type="button"
          onClick={() => fetchData(userCoordinate)}
        >
          📍 My Location
        </button>
      </div>
      <Bars
        height="40"
        width="80"
        color="#fff"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass="spinner"
        visible={showLoadingSpinner}
      />
    </>
  );
};

export default FetchData;
