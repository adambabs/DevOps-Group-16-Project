import React, {
  Fragment
} from 'react';
import './App.css';

// components

import InputTransaction from "./components/InputTransaction";
import ListTransactions from "./components/ListTransactions";


function App() {
  return (
    <Fragment>
      <div className = "container" >
        <InputTransaction />
        <ListTransactions />
        
      </div>

    </Fragment>);

  }

  export default App;
