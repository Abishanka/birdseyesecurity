import React, { useState } from 'react';
import "./Header.css";
import Button from 'react-bootstrap/Button';
import { CSVLink } from "react-csv";


const Header = ({
    log,
}) => {

    const data = [
        {alarmPoint: "something", alarmTag: "something", tagNotes: "something"},
        {alarmPoint: "something", alarmTag: "something", tagNotes: "something"},
        {alarmPoint: "something", alarmTag: "something", tagNotes: "something"},
        {alarmPoint: "something", alarmTag: "something", tagNotes: "something"},
        {alarmPoint: "something", alarmTag: "something", tagNotes: "something"}
      ];
      
      const headers = [
        {label: 'Alarm Point: ', key: 'alarmPoint'},
        {label: 'Alarm Tag: ', key: 'alarmTag'},
        {label: 'Tag Notes: ', key: 'tagNotes'}
      ]
      
      const csvReport = {
        filename: 'Report.csv',
        headers: headers,
        data: data
      }

    return (
        <div className="header">
            <h1>Alarm Log</h1>
            <div>
                <input type="text" placeholder='Name'/>
                <Button size="sm" variant="outline-primary"><CSVLink {...csvReport}>Export to CSV</CSVLink></Button>
                <div>
                    <Button variant="outline-primary" size="sm">Get Monthly Totals</Button>
                    <input type='text' placeholder='Month'/>
                    <input type='text' placeholder='Year'/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header;