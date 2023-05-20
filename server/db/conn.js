const mongoose = require('mongoose')
const database = process.env.DATABASE_URL;
mongoose.connect(database).then(()=>{
    console.log('Database is connected');

}).catch((err)=>{
    console.log('database is not connected error: '+err);
})