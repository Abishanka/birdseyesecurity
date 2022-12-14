import * as boot from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

import React from 'react'

//Possible TO DO: Store password somewhere securely, make it changeable through email
function SignIn() {

    const navigate = useNavigate();
    const password = "hello";
    const [data,setData]=useState(null);
    const [print, setPrint]=useState(false);
    
    function clickSubmit() {
        if(data == password)
        {
            navigate("/editalarmdata")
        }
        else
        {
            //have some error that says wrong password 
            setPrint(true)
            console.log("wrong password")
        }
    }

    function clickChangePassword() {
        navigate("/changepassword")
    }

    function getData(val)
    {
        setData(val.target.value)
        console.warn(val.target.value)
    }

  return (
    <div>
  <boot.Container>
    <boot.Form>
        <boot.Form.Label>Type in password (hello)</boot.Form.Label>
        <boot.Row>
        <boot.Col md="4"></boot.Col>
        <boot.Col md="4">
            <boot.Form.Control onChange={getData} name="adminPassword" placeholder="password"></boot.Form.Control>
        </boot.Col>
        </boot.Row>
    </boot.Form>
  </boot.Container>

    <div class="underPassword">
        <boot.Button onClick={clickSubmit}>Submit</boot.Button>
        <boot.Button onClick={clickChangePassword}>Change Password</boot.Button>
    </div>
    {
        print?
        <h6 class="wrongPassword">wrong password - try again</h6>
        :null
    }
    </div>
  )
}

export default SignIn 

