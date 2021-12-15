import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    login:{type: String , unique:true},
    password:String
})

const User = mongoose.model('User', userSchema)

userSchema.path('login').validate(async login =>{
    const loginCount = await mongoose.models.User.countDocuments({login})
    return !loginCount
},'login already exists')

export default User