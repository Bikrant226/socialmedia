const router=require('express').Router();
const Post=require('../models/Post');
const path=require('path');
const multer=require('multer');

// const upload=multer({dest:'./client/public/photos'});

const store=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname+'/static'))
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:store});

router.post('/',upload.single('file'),(req,res)=>{
    try{
        const newImage=new Post({image:req.file,desc:req.body.description})
        newImage.save()
        res.status(200).send(newImage)
    }catch(err){
        res.status(400).send('Bad Request')
    }
});

router.put('/:id',async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(post.userId===req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).send('Post has been updated')
        }else{
            res.status(500).send('You can only update your post');
        }
    } catch (error) {
        console.log(error);
    }
});


router.delete('/:id',async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(post.userId===req.body.userId){
            await post.deleteOne();
            res.status(200).send('Post has been deleted')
        }else{
            res.status(500).send('You can only delete your own post');
        }
    } catch (error) {
        console.log(error);
    }
});


router.put('/:id/like',async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){                                                                 
            await post.updateOne(req.body.userId);
            res.status(200).send('You liked this post')
        }else{
            res.status(500).send('You can only delete your own post');
        }
    } catch (error) {
        console.log(error);
    }
});


router.get('/:id',async(req,res)=>{
    try {
        const post=Post.findById(req.params.id)
        res.status(200).send('Post found')
    } catch (error) {
        console.log(error)
    }
});

router.get('/timeline',async(req,res)=>{
    let postarray=[];
    try {
        const post=await Post.findById(req.body.userId);
        const userPosts=await Post.find({userId:cu})
        res.status(200).send('Post found')
    } catch (error) {
        console.log(error)
    }
})



module.exports=router;