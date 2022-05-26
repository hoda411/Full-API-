
const mongoose = require('mongoose')
const learners=mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:3,
        max:100
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
module.exports=mongoose.model('postlearner',learners)