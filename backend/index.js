const express = require('express');
const { connectToMB } = require('./connection');
const router = require('./routers/user')
require('dotenv').config();
const cors = require('cors')
const app = express()
const URL = process.env.MONGO_CONN

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())



app.use('/api', router)

app.listen(PORT, ()=>{
    console.log(`Server running on port = ${PORT}`)

})


connectToMB(URL)

