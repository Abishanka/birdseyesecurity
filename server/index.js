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
    db.one(`INSERT INTO <tablename> VALUES (${req.query.key}, ${req.query.alarmTime}, ${req.query.alarmPoint}, ${req.query.alarmTag}, ${req.query.tagNotes}, ${req.query.otherNotes}, ${req.query.workOrder}, ${req.query.extraInfo})`)
        .then(() => {
            db.one(`SELECT * FROM <tablename> WHERE alarmPoint="${req.query.alarmPoint}"`)
                .then((data) => {
                    res.send(data)
                })
        })
});

app.post('/edit_row', function(req,res){
    //anytime save button is clicked (after edit button), exeucte
    //send some response...
    db.one(`UPDATE <tablename> SET alarmTime=\'${req.query.alarmTime}\', alarmPoint=\'${req.query.alarmPoint}\', alarmTag=\'${req.query.alarmTag}\', tagNotes=\'${req.query.tagNotes}\', otherNotes=\'${req.query.otherNotes}\', workOrder=\'${req.query.workOrder}\', extraInfo=\'${req.query.extraInfo}\' WHERE key=\'${req.query.key}\'`)
        .then(() => {
            db.one(`SELECT * FROM <tablename> WHERE alarmPoint="${req.query.alarmPoint}"`)
                .then((data) => {
                    res.send(data)
                })
        })
})
