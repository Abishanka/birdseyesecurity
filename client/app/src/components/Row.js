import React, {useState} from 'react';
import "./Row.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as boot from 'react-bootstrap';
import Axios from 'axios';

const Row = ({
    index,
    row,
    addRow,
    log,
    setLog,
    setNewRow,
}) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [hide, setHide] = useState(false);
    const url = "https://localhost:3001/";
    const placeholder = "https://jsonplaceholder.typicode.com/posts";

    const saveEdit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        //sending updated row to backend by making an http request with axios, the url is the server path we send the request to; note that it is in string format.
        Axios
        .post(placeholder, row)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    //arrow function is basically shorthand for var e = handleChange () { ... }.bind(this);
    const handleChange = (e) => {
        isEditing 
            ? setLog(log.map((r) => index === r.id ? {...r, [e.target.name]: e.target.value} : r))
            : setNewRow({...row, [e.target.name]: e.target.value});
    }

    const setAlarmTime = (e) => {
        e.preventDefault(); 
        const d = new Date();
        const t = d.getHours().toString().padStart(2, '0')+d.getMinutes().toString().padStart(2, '0')
        setNewRow({...row, "alarmTime": t})
    }

    const cell = (value, placeholder, name) => {
        return isEditing || setNewRow ? (
            <input 
                type="text"
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={(e) => handleChange(e)}
                onClick={setNewRow && name==="alarmTime" ? setAlarmTime: null}
            />
            ) : (
                <div>{value}</div>
            )
    }
        
{/*{/*onMouseOver={isEditing ? null : (e)=>{setHide(false)}} onMouseOut={isEditing ? null : (e)=>{setHide(true)}} */}
    return (
        <tr onMouseOver={isEditing ? null : (e)=>{setHide(false)}} onMouseOut={isEditing ? null : (e)=>{setHide(true)}}>
            <td>
                {
                    setNewRow ? (
                        <boot.Button variant="dark" size="sm" type="submit" onClick={addRow}>Add</boot.Button>
                    ) : (
                        isEditing ? (
                            <boot.Button variant="dark" size="sm" hidden={hide} onClick={saveEdit}>Save</boot.Button>
                        ) : (
                            <boot.Button  variant="dark" size="sm" hidden={hide} onClick={() => setIsEditing(true)}>Edit</boot.Button>
                        )
                    )
                }
            </td>
            {<td>
                {isEditing || setNewRow ? (
                        <input 
                            type="text"
                            value={row.alarmTime}
                            placeholder='Time'
                            name="alarmTime"
                            onChange={(e) => handleChange(e)}
                            onClick={setNewRow ? (e) => setAlarmTime(e): null}
                        />
                    ) : (
                        <div>{row.alarmTime}</div>
                )}
            </td>}
            <td>
                {isEditing || setNewRow ? (
                        <input 
                            type="text"
                            value={row.alarmPoint}
                            placeholder='Alarm Point'
                            name="alarmPoint"
                            onChange={(e) => handleChange(e)}
                        />
                    ) : (
                        <div>{row.alarmPoint}</div>
                )}
            </td>
            {/*<td>
                <input
                    type="text"
                    value={row.buildingName}
                    placeholder="Building Name"
                    name='buildingName'
                    onChange={(e) => handleChange(e)}
                />
            </td> */}
            {/*<td>
                <input
                    type="text"
                    value={row.buildingNumber}
                    placeholder="Building Number"
                    name='buildingNumber'
                    onChange={(e) => handleChange(e)}
                />
            </td> */}
            {/*<td>
                <input
                    type="text"
                    value={row.alarmName}
                    placeholder="Alarm Name"
                    name='alarmName'
                    onChange={(e) => handleChange(e)}
                />
            </td> */}
            {/*<td>
                <input
                    type="text"
                    value={row.alarmNumber}
                    placeholder="Alarm Number"
                    name='alarmNumber'
                    onChange={(e) => handleChange(e)}
                />
            </td> */}
            <td>
                {isEditing || setNewRow ? (
                        <boot.DropdownButton size="sm"
                            onSelect={(e) => handleChange({target: {name: "sensorStatus", value: e}})}
                            title={row.sensorStatus ? row.sensorStatus : "Select Status"}
                        >
                            <boot.Dropdown.Item eventKey="Alarm" name="sensorStatus">Alarm</boot.Dropdown.Item>
                            <boot.Dropdown.Item eventKey="Tamper" name="sensorStatus">Tamper</boot.Dropdown.Item>
                        </boot.DropdownButton>
                    ) : (
                        <div>{row.sensorStatus}</div>
                )}
            </td> 
            <td>
                {isEditing || setNewRow ? (
                        <boot.DropdownButton size="sm"
                            onSelect={(e) => handleChange({target: {name: "alarmTag", value: e}})}
                            title={row.alarmTag ? row.alarmTag : "Select Tag"}
                        >
                            <boot.Dropdown.Item eventKey="Wildlife" name="alarmTag">Wildlife</boot.Dropdown.Item>
                            <boot.Dropdown.Item eventKey="Weather" name="alarmTag">Weather</boot.Dropdown.Item>
                            <boot.Dropdown.Item eventKey="Other" name="alarmTag" value="Other">Other</boot.Dropdown.Item>`
                        </boot.DropdownButton>
                    ) : (
                        <div>{row.alarmTag}</div>
                )}
            </td>
            <td>
                {cell(row.tagNotes, "Tag Notes", "tagNotes")}
            </td>
            <td>
                {cell(row.otherNotes, "Other Notes", "otherNotes")}
            </td>
            <td>
                <input
                    type="text"
                    value={row.workOrder}
                    placeholder="Work Order"
                    name='workOrder'
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td>
                <boot.DropdownButton size="sm" variant="dark">
                    {/* Based on what the alarm point # is, it will autofill the other info like building name/#, alarm name/#, sensor status --> they'll configure this */}
                    <label>Bldg. Name/Bldg. # : </label>
                    <label>Alarm Name/# : </label>
                    <label>Sensor Status : </label>
                </boot.DropdownButton>
            </td>
        </tr>

        
    )
}

export default Row;