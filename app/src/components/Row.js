import React, { useState } from 'react';
import "./Row.css";

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
                    <button onClick={setEditing(true)}>
                        edit
                    </button>
                : null}
            </td>
            <td>
                <input 
                    type="text"
                    value={alarmPoint}
                    placeholder="Alarm Point"
                    name="alarmPoint"
                />
            </td>
            <td>
                <input
                    type="text"
                    value={buildingName}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={buildingNumber}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={alarmName}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={alarmNumber}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={sensorStatus}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={alarmTag}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={otherNotes}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={workOrder}
                />
            </td>
        </tr>
    )
}

export default Row;