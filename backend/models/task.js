const mongoose = require('mongoose')

const taskScema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    importent:{
        type:Boolean,
        default:false,
    },
    complete:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

const Task = mongoose.model('task', taskScema)

module.exports = Task