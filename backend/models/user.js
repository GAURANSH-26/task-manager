const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        require:true,
    },

    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    task:{
        type:mongoose.Types.ObjectId,
        ref:"task",
    }

})

const User = mongoose.model('users', userSchema)

module.exports = User