import React, { Fragment, useState } from 'react';
import "./Body.css";
import Row from "./Row";
import * as boot from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Body = () => {

    const emptyRow = {
        alarmTime: '',
        alarmPoint: '',
        buildingName: '',
        buildingNumber: '',
        alarmName: '',
        alarmNumber: '',
        sensorStatus: '',
        alarmTag: '',
        otherNotes: '',
        workOrder: '',
    }

    const [log, setLog] = useState([]);
    const [newRow, setNewRow] = useState(emptyRow);

    const addRow = (e) => {
        e.preventDefault();
        setLog([...log, newRow]);
        setNewRow(emptyRow);
    }

    return (
        <div className="body"> 
            <form onSubmit={addRow}>
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
                            <th>Other Notes</th>
                            <th>Work Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {log.map((row) => (
                            <Row
                                row={row}
                            />
                        ))}
                        <Fragment>
                            <Row 
                                row={newRow}
                                setNewRow={setNewRow}
                                addRow={addRow}
                            />
                        </Fragment>
                    </tbody>
                </boot.Table>
            </form>
        </div>
    )
}

export default Body;