import * as boot from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EditAlarmData() {
    function clickHandler() {
        console.log('Clicked the button!')
        //TO DO: Send information to back-end 
    }
    return (
        <>
            <h1>Edit Alarm Data</h1>
            {/* Change state when you click an item from menu, right now it does nothing */}
            <boot.DropdownButton size="md" title = "Action" className = "action">
                        <boot.Dropdown.Item>add to database</boot.Dropdown.Item>
                        <boot.Dropdown.Item>delete from database</boot.Dropdown.Item>
            </boot.DropdownButton>
            <boot.Container>
                <boot.Form>
                    <boot.Form.Group class="form-group">
                        <boot.Form.Label>Alarm Point: </boot.Form.Label>
                        <boot.Form.Control name="alarmPoint" placeholder="Alarm Point"></boot.Form.Control>
                        <boot.Form.Label>Bldg. Name/Bldg.#: </boot.Form.Label>
                        <boot.Form.Control name="bldgNameAndNumber" placeholder="Bldg. Name/Bldg.#"></boot.Form.Control>
                        <boot.Form.Label>Alarm Name/#: </boot.Form.Label>
                        <boot.Form.Control name="alarmNameAndNumber" placeholder="Alarm Name/#"></boot.Form.Control>
                        <boot.Form.Label>Sensor Status: </boot.Form.Label>
                        <boot.Form.Control name="sensorStatus" placeholder="Sensor Status"></boot.Form.Control>
                    </boot.Form.Group>
                </boot.Form>
            </boot.Container>
            <boot.Button onClick={clickHandler}>Submit</boot.Button>
        </>
    )
}