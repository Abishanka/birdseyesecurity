import React, { useState } from 'react';
import "./Header.css";
import Button from 'react-bootstrap/Button';


const Header = () => {
    return (
        <div className="header">
            <h1>Alarm Log</h1>
            <div>
                <input type="text" placeholder='Name'/>
                <Button>Export Log to CSV</Button>
                <div>
                    <Button>Get Monthly Totals</Button>
                    <input type='text' placeholder='Month'/>
                    <input type='text' placeholder='Year'/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header;