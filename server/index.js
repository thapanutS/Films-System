const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "films-system"
})

app.get('/films', (req,res) => {
    db.query("SELECT * FROM films", (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.post('/create', (req,res) => {
    const name = req.body.name;
    const generation = req.body.generation;
    const iso = req.body.iso;
    const type = req.body.type;
    const imagepieces = req.body.imagepieces;
    const count = req.body.count;
    const exp = req.body.exp;

    db.query("INSERT INTO films (name, generation, iso, type,imagepieces, count, exp) VALUES(?, ?, ?, ?, ?, ?, ?)", 
        [name, generation, iso, type,imagepieces, count, exp], (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });
})

app.put('/update/name', (req,res) => {
    const id = req.body.id;
    const name = req.body.name;
    db.query("UPDATE films SET name = ? WHERE id = ?", [name, id], (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

app.put('/update/generation', (req,res) => {
    const id = req.body.id;
    const generation = req.body.generation;
    db.query("UPDATE films SET generation = ? WHERE id = ?", [generation, id], (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

app.put('/update/iso', (req,res) => {
    const id = req.body.id;
    const iso = req.body.iso;
    db.query("UPDATE films SET iso = ? WHERE id = ?", [iso, id], (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

app.put('/update/type', (req,res) => {
    const id = req.body.id;
    const type = req.body.type;
    db.query("UPDATE films SET type = ? WHERE id = ?", [type, id], (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

app.put('/update/imagepieces', (req,res) => {
    const id = req.body.id;
    const imagepieces = req.body.imagepieces;
    db.query("UPDATE films SET imagepieces = ? WHERE id = ?", [imagepieces, id], (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

app.put('/update/count', (req,res) => {
    const id = req.body.id;
    const count = req.body.count;
    db.query("UPDATE films SET count = ? WHERE id = ?", [count, id], (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})
 
app.put('/update/exp', (req,res) => {
    const id = req.body.id;
    const exp = req.body.exp;
    db.query("UPDATE films SET exp = ? WHERE id = ?", [exp, id], (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

app.delete('/delete/:id', (req,res) => {
    const id = req.params.id;
    db.query("DELETE FROM films WHERE id = ?", id, (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

app.listen('3001',() => {
    console.log('Server is running on port 3001');
})