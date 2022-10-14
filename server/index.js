//we're going to require the express middleware (express dependency) 
const express = require("express");
const app = express();
const mysql = require("mysql");

app.listen(3001, () => {
    console.log("running on port 3001");
})