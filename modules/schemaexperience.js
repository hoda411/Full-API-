
const mongoose = require('mongoose')
const experience=mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:3,
        max:100
    },
    person:{
        type:String,
        require:true
    }

})
module.exports=mongoose.model('postexperience',experience)