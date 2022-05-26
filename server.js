const express = require('express');
const app = express();
const mongoose=require('mongoose')

app.use('/', require('./routes/coach'));
mongoose.connect("mongodb+srv://hodaabdallah:123@cluster0.aqsil.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("connected")
})

app.listen(5000);