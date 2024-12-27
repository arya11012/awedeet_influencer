const express=require('express')
const mongoose =require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const influencerRoutes=require("../server/routes/influencerRoutes")
const connectDB=require("./config/db")
const morgan = require('morgan')

//env config 
dotenv.config()

//mongodb connection
connectDB();

//REST object
const app=express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/influencer",influencerRoutes)

//port
const port=process.env.port;
//listen
app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})