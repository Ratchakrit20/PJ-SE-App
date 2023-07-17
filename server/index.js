const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    database: "employeesystem"
})

app.get('/show',(req,res) =>{
    db.query("SELECT * FROM databasetrain1",(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.json(result);
        }
    });
});


app.get('/databasetrain1/:phonenumber',(req,res) =>{
    const phonenumber = req.params.phonenumber;
    db.query("SELECT * FROM databasetrain1 WHERE phonenumber = ?",phonenumber,(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.get('/admin',(req,res) =>{
    const phonenumber = req.params.phonenumber;
    db.query("SELECT * FROM admin",(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Values inserted");
        }
    });
});



app.post('/create',(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const address = req.body.address;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
    const origin = req.body.origin1;
    const destination = req.body.destination1;
    const time1 = req.body.time1;
    const class1 = req.body.class1;
    const total = req.body.total1;

    db.query("INSERT INTO databasetrain1 (firstname,lastname,address,phonenumber,email,origin1,destination1,time1,class1,total1) VALUES(?,?,?,?,?,?,?,?,?,?)",
    [firstname,lastname,address,phonenumber,email,origin,destination,time1,class1,total],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values inserted")
        }
    })
})

// app.post('/create1',(req,res)=>{
//     const origin = req.body.origin1;
//     const destination = req.body.destination1;
//     const time1 = req.body.time1;
//     const class1 = req.body.class1;
//     const total = req.body.total1;

    
//     db.query("INSERT INTO databasetrain1 (origin1,destination1,time1,class1,total1) VALUES(?,?,?,?,?)",
//     [origin,destination,time1,class1,total],
//     (err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send("Values inserted")
//         }
//     })
// })

app.put('/update',(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    db.query("UPDATE databasetrain1 SET name = ? WHERE id = ?",[name,id],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values inserted")
        }
    })

})


app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    db.query("DELETE FROM databasetrain1 WHERE id = ?",id,
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values inserted")
        }
    })
})


app.listen('3001',()=>{
    console.log('Server is running 3001');
})