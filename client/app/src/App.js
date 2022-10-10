import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Button from 'react-bootstrap/Button';

function App() {


  const [log, setLog] = useState([]);
  return (
    <div className="App">
      
      <Header log={log}/>
      <Body log={log} setLog={setLog}/>
    </div>
  );
}

export default App;
