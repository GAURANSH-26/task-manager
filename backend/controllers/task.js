const Task = require("../models/task")

const handleCreateTask = async()=>{
    const {title, desc} = req.body

    const newTask = new Task({title, desc})
}