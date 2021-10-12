const router=require('express').Router();
const User=require('../models/User');
const bcryptjs=require('bcryptjs');

router.post('/register',async(req,res)=>{
    try {
        const salt= await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(req.body.password,salt);
        
        User.findOne({email:req.body.email},async(err,success)=>{
            if(success){
                res.status(401).send('Email already exists,please choose another!!')
            }else{
                const user=new User({
                    username:req.body.username,
                    email:req.body.email,
                    password:hashedPassword
                })
    
                await user.save();
                console.log(user);
                res.status(200).send(user);
            }
        })
    } catch (err) {
        res.send(err);
    }
});

router.post('/login',async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            res.status(401).send('Email doesn\'t exists');  
        }else{
            const validatePassword=await bcryptjs.compare(req.body.password,user.password)
            if(!validatePassword){
                res.status(401).send('Incorrect Password')
            }else{
                res.status(200).send(user);
            }
        } 
    }catch(err){
        console.log(err);
    }
})

router.get('/hi',(req,res)=>{
    res.send('hi');
})

module.exports=router;