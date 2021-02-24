import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Countrypicker from './components/Countrypicker/Countrypicker';
import Chart from './components/Chart/Chart';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = () => {

  return (
    <>
      <Header />
      <Cards />
      <Countrypicker />
      <Chart />
    </>
  );
}

export default App;