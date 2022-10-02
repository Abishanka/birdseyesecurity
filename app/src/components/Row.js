import React, {useState} from 'react';
import "./Row.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as boot from 'react-bootstrap';

const Row = ({
    row,
    setNewRow
}) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [hide, setHide] = useState(false);

    return (
        <tr onMouseOver={isEditing ? null : (e)=>{setHide(false)}} onMouseOut={isEditing ? null : (e)=>{setHide(true)}}>
            <td>
                {
                    setNewRow ? (
                        <boot.Button variant="dark" type="submit">Add</boot.Button>
                    ) : (
                        isEditing ? (
                            <boot.Button variant="dark" hidden={hide} onClick={() => setIsEditing(false)}>Save</boot.Button>
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
                    onChange={(e)=>setNewRow({...row, [e.target.name]: e.target.value})}
                />
            </td>
            <td>
                <input 
                    type="text"
                    value={row.alarmPoint}
                    placeholder="Alarm Point"
                    name="alarmPoint"
                    onChange={(e)=>setNewRow({...row, [e.target.name]: e.target.value})}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.buildingName}
                    placeholder="Building Name"
                    name='buildingName'
                    onChange={(e)=>setNewRow({...row, [e.target.name]: e.target.value})}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.buildingNumber}
                    placeholder="Building Number"
                    name='buildingNumber'
                    onChange={(e)=>setNewRow({...row, [e.target.name]: e.target.value})}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.alarmName}
                    placeholder="Alarm Name"
                    name='alarmName'
                    onChange={(e)=>setNewRow({...row, [e.target.name]: e.target.value})}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.alarmNumber}
                    placeholder="Alarm Number"
                    name='alarmNumber'
                    onChange={(e)=>setNewRow({...row, [e.target.name]: e.target.value})}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.sensorStatus}
                    placeholder="Sensor Status"
                    name='sensorStatus'
                    onChange={(e)=>setNewRow({...row, [e.target.name]: e.target.value})}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.alarmTag}
                    placeholder="Alarm Tag"
                    name='alarmTag'
                    onChange={(e)=>setNewRow({...row, [e.target.name]: e.target.value})}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.otherNotes}
                    placeholder="Other Notes"
                    name='otherNotes'
                    onChange={(e)=>setNewRow({...row, [e.target.name]: e.target.value})}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={row.workOrder}
                    placeholder="Work Order"
                    name='workOrder'
                    onChange={(e)=>setNewRow({...row, [e.target.name]: e.target.value})}
                />
            </td>
        </tr>
    )
}

export default Row;