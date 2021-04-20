const express = require("express");
const mongoose = require("mongoose");
var path = require('path');
const Form = require("./schema");
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    var options = {
        root: path.join(__dirname)
    };
    const fileName = "index.html";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.get("/api/forms" , (req, res) => {
    Form.find().then(result => {
        res.json(result);
    });
});

app.post("/create", (req, res) => {
    const { name, email, phone } = req.body;
    const data = {
        name,
        email,
        phone,    
    }
    console.log(data);
    new Form(data).save().then(result => {
        res.json(result);
    });
})

app.listen("8000", () => {
    console.log("server running");
});
