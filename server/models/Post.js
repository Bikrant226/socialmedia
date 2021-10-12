const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
        image:{
            type:Object,
            required:true
        },
        desc:{
            type:String,
            max:500
        }
    },{
    timestamps:true
})

module.exports=mongoose.model('POST',PostSchema);