
const mongoose = require('mongoose')
const coaches=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    pass:{
    type:String,
    require:true
    },
    email:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('postcoach',coaches)