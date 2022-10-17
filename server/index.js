//we're going to require the express middleware (express dependency) 
const express = require("express");
const app = express();
const pgp = require('pg-promise')
const db = pgp('postgres://username:password@host:port/database')

app.listen(3001, () => {
    console.log("running on port 3001");
})

app.post('/insert_row', function(req,res){
    //anytime new row button is clicked, execute
    //send some response...
    
})

app.post('/edit_row', function(req,res){
    //anytime save button is clicked (after edit button), exeucte
    //send some response...
})
