const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.set("strictQuery", false);
mongoose.connect(DB,{
    useNewUrlParser: true, 
    useUnifiedTopology: true})
.then(() =>{
    console.log('Database connected successfully')
}).catch((err) =>{ 
    console.log('No connection',err)
});