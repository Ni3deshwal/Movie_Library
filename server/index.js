require('dotenv').config();
const express=require('express')
const connection=require('./config/db.js');
const router=require('./routes/movieRoutes.js')
const cors =require('cors')

const app=express();
app.use(cors());
app.use(express.json());
app.use('/movie',router)

app.listen(4000,()=>{
    try {
        connection();
        console.log("listen");
    } catch (error) {
        console.log(error)
    }
})