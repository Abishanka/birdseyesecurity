import React, { useState } from 'react';
import "./Body.css";
import Row from "./Row";
import Table from 'react-bootstrap/Table';

const Body = () => {

    const [log, setLog] = useState([]);
    const [addRow, addRowData] = useState({
        alarmPoint: "",

    });

    return (
        <div className="body"> 
            <Table striped>
                <thead className='table-header'>
                    <tr>
                        <th>Edit</th>
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
                    {log.map((row) => {
                        return <Row
                            isNew={false}
                            alarmPoint={row.alarmPoint}
                            buildingName={row.buildingName}
                            buildingNumber={row.buildingNumber}
                            alarmName={row.alarmName}
                            alarmNumber={row.alarmNumber}
                            sensorStatus={row.sensorStatus}
                            alarmTag={row.alarmTag}
                            otherNotes={row.otherNotes}
                            workOrder={row.workOrder}
                        />;
                    })}
                    <Row
                        isNew={true}
                    />
                </tbody>
            </Table>
        </div>
    )
}

export default Body;