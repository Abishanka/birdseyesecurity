import React, { useState } from 'react';
import "./Header.css";
import Button from 'react-bootstrap/Button';
import { CSVLink } from "react-csv";


const Header = ({
    log
}) => {

    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
      
    const headers = [
        //{label: 'Name', key: 'name'},
        //{label: 'Date', key: 'date'},
        {label: 'Alarm Time', key: 'alarmTime'},
        {label: 'Alarm Point: ', key: 'alarmPoint'},
        {label: 'Alarm Tag: ', key: 'alarmTag'},
        {label: 'Tag Notes: ', key: 'tagNotes'},
        {label: 'Other Notes: ', key: 'otherNotes'},
        {label: 'Work Order: ', key: 'workOrder'},
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
            <div>
                <div>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Today's Date" value={date} onClick={autoSetDate}/>
                    {/* change CSVLink to proper button */}
                    <CSVLink className="btn btn-outline-primary" {...csvReport}>Export to CSV</CSVLink>
                </div>
                <div>
                    <input type='text' placeholder='Month' onChange={(e) => setMonth(e.target.value)}/>
                    <input type='text' placeholder='Year' onChange={(e) => setYear(e.target.value)}/>
                    <Button variant="outline-primary" size="sm">Get Monthly Totals</Button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header;