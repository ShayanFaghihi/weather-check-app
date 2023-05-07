import React, { useState } from "react";

import axios from "axios";
import { Bars } from "react-loader-spinner";

const API_URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "f0769b2f8e44482293b134836230105";

const FetchData = ({ changeResults }) => {
  const [query, setQuery] = useState("");
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false)

  const submitFormHandler = (e) => {
    e.preventDefault();
    setShowLoadingSpinner(true)
    axios({
      method: "get",
      url: `${API_URL}?q=${query}`,
      headers: { "Content-Type": "application/json", key: API_KEY },
    })
      .then((response) => {
        if (response) {
          changeResults({ data: response.data, error: "" });
          setShowLoadingSpinner(false);
        }
      })
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          changeResults({
            data: "",
            error: "Please Check Your Connection, and Try Again!",
          });
        } else {
          changeResults({ data: "", error: "Please Check the Query Again!" });
        }
        setShowLoadingSpinner(false)
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
        />
      </form>
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
