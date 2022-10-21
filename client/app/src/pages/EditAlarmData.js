export default function EditAlarmData() {
    return (
        <>
            <h1>Edit Alarm Data</h1>
            <form class = "edit">
                <label>Data type: </label>
                <select>
                    <option value="bldg name">bldg name</option>
                    <option value="bldg #">bldg #</option>
                    <option value="alarm point">alarm point</option>
                    <option value="alarm name + #">alarm name + #</option>
                </select>
                <label>Action: </label>
                <select>
                    <option value="add">add to database</option>
                    <option value="delete">delete from database</option>
                </select>
                <input
                    type="text"
                    className="inputField"
                    required
                />
                <button>submit</button>
            </form>
        </>
    )
}