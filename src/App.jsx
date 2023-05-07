import React, { useState } from "react";

import UI from "./components/UI";
import FetchData from "./components/FetchData";
import ShowResults from "./components/ShowResults";

import "./App.css";

const App = () => {
  const [currentData, setCurrentData] = useState("");
  const [error, setError] = useState("");

  const changeResultsHandler = ({ data, error }) => {
    if (data) {
      setError("");
      setCurrentData(data);
    } else if (error) {
      setCurrentData("");
      setError(error);
    }
  };
  return (
    <UI>
      <FetchData changeResults={changeResultsHandler} />
      <ShowResults results={currentData} error={error} />
    </UI>
  );
};

export default App;
