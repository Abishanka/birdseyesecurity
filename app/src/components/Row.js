import React, { useState } from 'react';
import "./Row.css";
import Button from 'react-bootstrap/Button';

const Row = ({
    isNew,
    alarmPoint,
    buildingName,
    buildingNumber,
    alarmName,
    alarmNumber,
    sensorStatus,
    alarmTag,
    otherNotes,
    workOrder
}) => {

    const [isEditing, setEditing] = useState(isNew);
    const [hideButton, setHideButton] = useState(false);

    return (
        <tr onMouseOver={isEditing?null:setHideButton(true)} onMouseOut={isEditing?null:setHideButton(false)}>
            <td>
                {hideButton ? 
                    <Button onClick={setEditing(true)}>
                        edit
                    </Button>
                : null}
            </td>
            <td>
                <input 
                    type="text"
                    value={alarmPoint}
                    placeholder="Alarm Point"
                    name="alarmPoint"
                    readOnly={!isEditing}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={buildingName}
                    placeholder="Building Name"
                />
            </td>
            <td>
                <input
                    type="text"
                    value={buildingNumber}
                    placeholder="Building Number"
                />
            </td>
            <td>
                <input
                    type="text"
                    value={alarmName}
                    placeholder="Alarm Name"
                />
            </td>
            <td>
                <input
                    type="text"
                    value={alarmNumber}
                    placeholder="Alarm Number"
                />
            </td>
            <td>
                <input
                    type="text"
                    value={sensorStatus}
                    placeholder="Sensor Status"
                />
            </td>
            <td>
                <input
                    type="text"
                    value={alarmTag}
                    placeholder="Alarm Tag"
                />
            </td>
            <td>
                <input
                    type="text"
                    value={otherNotes}
                    placeholder="Other Notes"
                />
            </td>
            <td>
                <input
                    type="text"
                    value={workOrder}
                    placeholder="Work Order"
                />
            </td>
        </tr>
    )
}

export default Row;