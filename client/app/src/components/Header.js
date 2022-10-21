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
    const [shift, setShift] = useState('');

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

    const autoSetShift = (e) => {
        e.preventDefault(); // default shifts 0-> 8 (1), 8->4 (2), 4->0 (3)
        const d = new Date();
        const hour = d.getHours();
        //const shift = hour >= 0 && hour < 8 ? "Shift 1" : (hour >= 8 && hour < 16 ? "Shift 2" : (hour >= 16 ? "Shift 3" : "Error"));
        //new format is: Shift 1 goes from 6 am - 6 pm and Shift 2 goes from 6 pm to 6 am 
        const shift = hour >= 6 && hour < 18 ? "Shift 1" : "Shift 2";
        setShift(shift);
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
                            <boot.Col md="12">
                                <boot.Form.Control style={{ margin: "0.5vh" }} type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            </boot.Col>
                            <boot.Col md="6">
                                <boot.Form.Control style={{ margin: "0.5vh" }} type="text" placeholder="m/d/yyyy" value={date} onClick={(e) => autoSetDate(e)} />
                            </boot.Col>
                            <boot.Col md = "6">
                                <boot.Form.Control style={{ margin: "0.5vh" }} type="text" placeholder="Current Shift" value={shift} onClick={(e) => autoSetShift(e)} />
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