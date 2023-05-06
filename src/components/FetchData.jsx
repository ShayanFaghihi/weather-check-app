import React, { useState } from "react";

import axios from "axios";

const API_URL = "http://api.weatherapi.com/v1/current.json";
const API_KEY = "f0769b2f8e44482293b134836230105";

const FetchData = ({changeResults}) => {
  const [query, setQuery] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    axios({
      method: "get",
      url: `${API_URL}?q=${query}`,
      responseType: "json",
      headers: {key: API_KEY}
    })
      .then((response) => {
        if(response) {
          changeResults(response.data)
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={submitFormHandler} className="form">
      <input
        type="search"
        name="location-search"
        id="locationSearch"
        placeholder="Search Location (Name, IP, Zip Code)..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default FetchData;
