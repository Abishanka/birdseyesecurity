import React, {useState} from 'react';
import "./Row.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as boot from 'react-bootstrap';

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

    const handleChange = (e) => {
        console.log(isEditing)
        isEditing 
            ? setLog(log.map((r) => index === r.id ? {...r, [e.target.name]: e.target.value} : r))
            : setNewRow({...row, [e.target.name]: e.target.value});
    }

    const isReadOnly = () => {
        return !(isEditing || setNewRow)
    }
        

    return (
        <tr onMouseOver={isEditing ? null : (e)=>{setHide(false)}} onMouseOut={isEditing ? null : (e)=>{setHide(true)}}>
            <td>
                {
                    setNewRow ? (
                        <boot.Button variant="dark" type="submit" onClick={(e) => addRow(e)}>Add</boot.Button>
                    ) : (
                        isEditing ? (
                            <boot.Button variant="dark" hidden={hide} onClick={(e) => saveEdit(e)}>Save</boot.Button>
                        ) : (
                            <boot.Button  variant="dark" hidden={hide} onClick={() => setIsEditing(true)}>Edit</boot.Button>
                        )
                    )
                }
            </td>
            <td>
                <input 
                    type="text"
                    value={row.alarmTime}
                    placeholder='Time'
                    name="alarmTime"
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td>
                <input 
                    type="text"
                    value={row.alarmPoint}
                    placeholder="Alarm Point"
                    name="alarmPoint"
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.buildingName}
                    placeholder="Building Name"
                    name='buildingName'
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.buildingNumber}
                    placeholder="Building Number"
                    name='buildingNumber'
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.alarmName}
                    placeholder="Alarm Name"
                    name='alarmName'
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.alarmNumber}
                    placeholder="Alarm Number"
                    name='alarmNumber'
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.sensorStatus}
                    placeholder="Sensor Status"
                    name='sensorStatus'
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.alarmTag}
                    placeholder="Alarm Tag"
                    name='alarmTag'
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.tagNotes}
                    placeholder="Tag Notes"
                    name='tagNotes'
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.otherNotes}
                    placeholder="Other Notes"
                    name='otherNotes'
                    onChange={(e) => handleChange(e)}
                />
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