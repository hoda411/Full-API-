
const mongoose = require('mongoose')
const session=mongoose.Schema({
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
    ,
    time:{
        type:String,
    }
    ,
    price:{
        type:String
    }

})
module.exports=mongoose.model('postesession',session)