import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Button from 'react-bootstrap/Button';

function App() {

  const demoLog = [
    {
      alarmTime: '0930',
      alarmPoint: '0003',
      alarmTag: 'Other',
      tagNotes: 'Testing',
      otherNotes: 'Monthly test',
      workOrder: '',
    },
    {
      alarmTime: '0934',
      alarmPoint: '0008',
      alarmTag: 'Weather',
      tagNotes: 'wind',
      otherNotes: '',
      workOrder: '',
    },
    {
      alarmTime: '0935',
      alarmPoint: '1202',
      alarmTag: 'Wildlife',
      tagNotes: 'snake',
      otherNotes: '',
      workOrder: '',
    },
  ]



  const [log, setLog] = useState(demoLog);
  return (
    <div className="App">
      
      <Header log={log} />
      <Body log={log} setLog={setLog}/>
    </div>
  );
}

export default App;
