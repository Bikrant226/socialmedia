const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        uniqe:true    
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:3
    },
    desc:{
        type:String
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports=mongoose.model('USER',UserSchema);