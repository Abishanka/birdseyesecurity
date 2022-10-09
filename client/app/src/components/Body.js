import React, { Fragment, useState } from 'react';
import "./Body.css";
import Row from "./Row";
import * as boot from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Body = () => {

    const emptyRow = {
        id: '',
        alarmTime: '',
        alarmPoint: '',
        buildingName: '',
        buildingNumber: '',
        alarmName: '',
        alarmNumber: '',
        sensorStatus: '',
        alarmTag: '',
        tagNotes: '',
        otherNotes: '',
        workOrder: '',
    }

    const [log, setLog] = useState([]);
    const [newRow, setNewRow] = useState(emptyRow);

    const addRow = (e) => {
        e.preventDefault();
        if(newRow.alarmTime && newRow.alarmPoint){
            setLog([...log, {...newRow, id: log.length}]);
            setNewRow(emptyRow);
        }
        console.log(log);
        //TODO backend: send newRow to backend
    }

    return (
        <div className="body"> 
            <boot.Table striped>
                <thead className='table-header'>
                    <tr>
                        <th>------</th>
                        <th>Time</th>
                        <th>Alarm Point</th>
                        <th>Building Name</th>
                        <th>Building Number</th>
                        <th>Alarm Name</th>
                        <th>Alarm Number</th>
                        <th>Sensor Status</th>
                        <th>Alarm Tag</th>
                        <th>Tag Notes</th>
                        <th>Other Notes</th>
                        <th>Work Order</th>
                    </tr>
                </thead>
                <tbody>
                    {log.map((row,index) => (
                        <Row
                            key={index}
                            index={index}
                            row={row}
                            log={log}
                            setLog={setLog}
                        />
                    ))}
                    <Row 
                        row={newRow}
                        setNewRow={setNewRow}
                        addRow={addRow}
                    />
                </tbody>
            </boot.Table>
        </div>
    )
}

export default Body;