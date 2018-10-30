const express = require('express');


const app = express();

const mongoose = require('mongoose');

const cors = require('cors');
app.use(cors());

app.use(express.json());

let list = [
    {
        id: "Asasas",
        name: "dssd",
        price: 10
    },
    {
        id: "ABB",
        name: "dssddssd",
        price: 100
    }
];

app.get('/connect', (req, res)=>{

    res.send({msg: "Connected"});
});

app.post('/users', (req, res)=>{
    console.log(req.body)
    list.push(req.body);
    res.send({msg: "Connected"});
});

app.delete('/products/:id', (req, res)=>{
    let id = req.params.id
   const result =  list.splice(id,1)
   res.send({data: result});
})


app.get('/products', (req, res)=>{

    res.send({data: list});
})
app.listen(8900);