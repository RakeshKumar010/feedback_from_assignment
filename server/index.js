const dotenv = require('dotenv')
const express = require('express')
const app = express()
const cors = require('cors')
dotenv.config({path:'./config.env'})
require('./db/conn')

app.use(cors())
app.use(express.json()) 
app.use(require('./router/router'))


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is open at localhost:${PORT}`);
})