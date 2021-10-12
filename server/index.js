const express=require('express');
const app=express();
const mongoose=require('mongoose');
const morgan=require('morgan');
const cors=require('cors');
const dotenv=require('dotenv');
const userRoute=require('./routes/userRoute');
const authRoute=require('./routes/authRoute');
const postRoute=require('./routes/postRoute');

app.use(cors());

dotenv.config();

mongoose.connect(process.env.MONGOURI,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('Connected to database');
});

app.use(express.json());
app.use('/api/user',userRoute);
app.use('/api/post',postRoute);
app.use('/api/auth',authRoute);


const PORT=process.env.PORT || 3001;
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))
