// const dotenv = require('dotenv')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server is open at localhost:${PORT}`);
})