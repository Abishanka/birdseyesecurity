import React, { useState } from 'react';
import "./Header.css";
import { CSVLink } from "react-csv";
import * as boot from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = ({
    log
}) => {

    const [date, setDate] = useState('');
    const [name, setName] = useState('');

    const headers = [
        { label: 'Name', key: 'name' },
        { label: 'Date', key: 'date' },
        { label: 'Alarm Time', key: 'alarmTime' },
        { label: 'Alarm Point: ', key: 'alarmPoint' },
        { label: 'Sensor Status: ', key: 'sensorStatus' },
        { label: 'Alarm Tag: ', key: 'alarmTag' },
        { label: 'Tag Notes: ', key: 'tagNotes' },
        { label: 'Other Notes: ', key: 'otherNotes' },
        { label: 'Work Order: ', key: 'workOrder' },
    ]

    const csvReport = {
        filename: 'Report.csv',
        headers: headers,
        data: log
    }

    const autoSetDate = (e) => {
        e.preventDefault();
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        const date = mm + '/' + dd + '/' + yyyy;
        setDate(date);
    }

    return (
        <div className="header">
            <h1>Alarm Log</h1>
            <boot.Form>
                <boot.Row>
                    <boot.Col md="4">
                    </boot.Col>
                    <boot.Col md="4">
                        <boot.Row>
                            <boot.Col md="8">
                                <boot.Form.Control style={{ margin: "0.5vh" }} type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            </boot.Col>
                            <boot.Col md="4">
                                <boot.Form.Control style={{ margin: "0.5vh" }} type="text" placeholder="m/d/yyyy" value={date} onClick={(e) => autoSetDate(e)} />
                            </boot.Col>
                        </boot.Row>
                        <boot.Row>
                            <boot.Col>
                                {/* change CSVLink to proper button */}
                                <CSVLink style={{ margin: "0.5vh" }} className="btn btn-outline-primary btn-sm" {...csvReport}>Export log to CSV</CSVLink>
                            </boot.Col>
                        </boot.Row>
                    </boot.Col>
                </boot.Row>
            </boot.Form>

        </div>
    )
}

export default Header;