import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId:{
        type:Id,
        required:true,
    },
    title:String,

})

const Post = mongoose.model('Post', PostSchema)

export default Post