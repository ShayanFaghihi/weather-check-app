import React, { useState } from "react";

import UI from "./components/UI";
import FetchData from "./components/FetchData";
import ShowResults from "./components/ShowResults";

import "./App.css";

const App = () => {
  const [currentData, setCurrentData] = useState('');

  const changeResultsHandler = (data) => {
    if(data) {
      setCurrentData(data)
    }
  }
  return (
    <UI>
      <FetchData changeResults = {changeResultsHandler} />
      <ShowResults results={currentData} />
    </UI>
  );
};

export default App;
