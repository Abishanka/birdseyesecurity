import React, { useState } from 'react';
import Body from '../components/Body';
import Header from '../components/Header';
import * as boot from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlarmLog() {

  var demoLog = [
    {
      id: 0,
      alarmTime: '0930',
      alarmPoint: '0003',
      sensorStatus: 'Alarm',
      alarmTag: 'Other',
      tagNotes: 'Testing',
      otherNotes: 'Monthly test',
      workOrder: '',
    },
    {
      id: 1,
      alarmTime: '0934',
      alarmPoint: '0008',
      sensorStatus: 'Tamper',
      alarmTag: 'Weather',
      tagNotes: 'wind',
      otherNotes: '',
      workOrder: '',
    },
    {
      id: 2,
      alarmTime: '0935',
      alarmPoint: '1202',
      sensorStatus: 'Alarm',
      alarmTag: 'Wildlife',
      tagNotes: 'snake',
      otherNotes: '',
      workOrder: '',
    },
  ]



  const [log, setLog] = useState(demoLog);
  return (
    <div className="AlarmLog">
      <Header log={log} />
      <Body log={log} setLog={setLog}/> 
    </div>
  );
}

export default AlarmLog;