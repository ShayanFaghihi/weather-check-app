import React from "react";

const FetchData = () => {
  return (
    <form className="form">
      <input
        type="search"
        name="location-search"
        id="locationSearch"
        placeholder="Search Location (Name, IP, Zip Code)..."
      />
    </form>
  );
};

export default FetchData;
