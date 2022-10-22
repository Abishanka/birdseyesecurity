import * as boot from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
    const navigate = useNavigate();

    function clickSubmit() {
        navigate("/signin")
        //TO DO: Send information to back-end 
    }

    function clickBack() {
        navigate("/signin")
    }

  return (
    <div>
        <h1>Change Password</h1>
        <boot.Container>
            <boot.Form>
                <boot.Row>
                    <boot.Col md="4"></boot.Col>
                    <boot.Col md="4">
                        <boot.Form.Label>Current Password </boot.Form.Label>
                        <boot.Form.Control name="currPassword" placeholder="Current Password"></boot.Form.Control>
                        <boot.Form.Label>New Password </boot.Form.Label>
                        <boot.Form.Control name="newPassword" placeholder="New Password"></boot.Form.Control>
                        <boot.Form.Label>Retype New Password </boot.Form.Label>
                        <boot.Form.Control name="retypeNewPassword" placeholder="New Password"></boot.Form.Control>
                    </boot.Col>
                </boot.Row>
            </boot.Form>
        </boot.Container>
        <BsFillArrowLeftSquareFill onClick={clickBack} size="2em" class="backButton"></BsFillArrowLeftSquareFill>
        <boot.Button onClick={clickSubmit}>Submit</boot.Button> 
    </div>
  )
}

export default ChangePassword
