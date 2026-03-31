import express from 'express';
import cors from 'cors'
import connectDb from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
import dotenv from 'dotenv'

dotenv.config();
const PORT=process.env.PORT || 4000;

const app=express();

app.use(express.json());
app.use(cors());


await connectDb();

app.use('/api/user',userRouter);
app.use('/api/image',imageRouter);
app.get('/',(req,res)=>{
    res.send("Api Working")
})


app.listen(5000,()=>
{
    console.log("server started")
})