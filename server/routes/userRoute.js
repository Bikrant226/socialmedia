const router=require('express').Router();
const bcryptjs=require('bcryptjs');
const User = require('../models/User');

router.put('/:id',async(req,res)=>{
    if(req.body.userId===req.params.id || req.body.isAdmin){
        if(req.body.password){
            try {
                const salt=await bcryptjs.genSalt(10);
                req.body.password=await bcryptjs.hash(req.body.password,salt);
            }
            catch (error) {
                console.log(error);   
            }
        }
        try{
            const user=await User.findByIdAndUpdate(req.params.id,{ $set:req.body })
            res.status(200).send('Account updated successfully')
        } 
        catch(error){
            
        }
    }else{
        res.status(403).send('You need to have an admin priviledge');
    }
});



router.delete('/:id',async(req,res)=>{
    if(req.body.userId===req.params.id || req.body.isAdmin){
        try{
            const user=await User.findByIdAndDelete(req.params.id);
            res.status(200).send('Account deleted successfully')
        } 
        catch(error){
            return res.send(error);
        }
    }else{
        res.status(403).send('You need to have an admin priviledge');
    }
});

router.get('/:id',async(req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        res.status(200).send(user)
    } catch (error) {
        return res.status(404).send('Couldn\'t find the user')
    }
});

router.put('/:id/follow',async(req,res)=>{
    if(req.body.userId !== req.params.id){
        const user= await User.findById(req.params.id);
        const currentUser=await User.findById(req.body.userId);

        if(!user.followers.includes(req.body.userId)){
            await user.updateOne({$push:{followers:{currentUser}}});
            await currentUser.updateOne({$push:{followings:{currentUser}}});
            res.status(403).send('User has been followed');   
        }else{
            res.status(403).send('You are already following this user!!')
        }
    }else{
        res.status(403).send('You can\'t follow yourself');
    }
});

router.put('/:id/unfollow',async(req,res)=>{
    if(req.body.userId !== req.params.id){
        const user= await User.findById(req.params.id);
        const currentUser=await User.findById(req.body.userId);

        if(user.followers.includes(currentUser)){
            await user.updateOne({$pull:{followers:{currentUser}}});
            await currentUser.updateOne({$pull:{followings:{currentUser}}});
            res.status(403).send('User has been unfollowed');   
        }else{
            res.status(403).send('You are already unfollowing this user!!')
        }
    }else{
        res.status(403).send('You can\'t unfollow yourself');
    }
});





module.exports=router;