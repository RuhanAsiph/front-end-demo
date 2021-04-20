const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const FormSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
});

module.exports = model("Form", FormSchema);
