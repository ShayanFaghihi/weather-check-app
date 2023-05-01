import React from 'react';

import UI from './components/UI';
import FetchData from './components/FetchData';
import ShowResults from './components/ShowResults';

import './App.css'

const App = () => {
  return (
    <UI>
        <FetchData />
        <ShowResults />
    </UI>
  )
}

export default App