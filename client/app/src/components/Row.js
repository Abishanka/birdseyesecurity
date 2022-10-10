import React, {useState} from 'react';
import "./Row.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as boot from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

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

    const saveEdit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        //TODO backend, send updated row to backend
    }
    
    //arrow function is basically shorthand for var e = handleChange () { ... }.bind(this);
    const handleChange = (e) => {
        isEditing 
            ? setLog(log.map((r) => index === r.id ? {...r, [e.target.name]: e.target.value} : r))
            : setNewRow({...row, [e.target.name]: e.target.value});
    }

    const setAlarmTime = (e) => {
        e.preventDefault(); const d = new Date(); setNewRow({...row, "alarmTime": d.getHours().toString()+d.getMinutes().toString()})
    }

    const cell = (value, placeholder, name) => {
        return isEditing || setNewRow ? (
            <input 
                type="text"
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={(e) => handleChange(e)}
                onClick={setNewRow && name==="alarmTime" ? (e) => setAlarmTime(e): null}
            />
            ) : (
                <div>{value}</div>
            )
    }
        

    return (
        <tr onMouseOver={isEditing ? null : (e)=>{setHide(false)}} onMouseOut={isEditing ? null : (e)=>{setHide(true)}}>
            <td>
                {
                    setNewRow ? (
                        <boot.Button variant="dark" size="sm" type="submit" onClick={(e) => addRow(e)}>Add</boot.Button>
                    ) : (
                        isEditing ? (
                            <boot.Button variant="dark" size="sm" hidden={hide} onClick={(e) => saveEdit(e)}>Save</boot.Button>
                        ) : (
                            <boot.Button  variant="dark" size="sm" hidden={hide} onClick={() => setIsEditing(true)}>Edit</boot.Button>
                        )
                    )
                }
            </td>
            {<td>
                {cell(row.alarmTime, "Time", "alarmTime")}
            </td>}
            <td>
                {cell(row.alarmPoint, "Alarm Point", "alarmPoint")}
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
            {/*<td>
                <input
                    type="text"
                    value={row.sensorStatus}
                    placeholder="Sensor Status"
                    name='sensorStatus'
                    onChange={(e) => handleChange(e)}
                />
            </td> */}
            <td>
                {cell(row.alarmTag, "Alarm Tag", "alarmTag")}
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
        </tr>

        
    )
}

export default Row;