import mongoose from "mongoose"
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js"
import bcrypt from 'bcryptjs'



export const createUser = async (req, res ) =>{
    try {
        const {login , password} = req.body
        const hashedPassword = bcrypt.hashSync(password , 8)
        const user = await User.create({login:login, password:hashedPassword})
        res.status(201).json(user)
    } 
    catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const ddd = async () => { 
    await User.deleteMany({})
}


export const updateUser = async (req , res ) => {
    const { id:_id} = req.params;
    const user = req.body
    try {
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).send('no user with this id')
        const updatedUser = await User.findByIdAndUpdate(_id, user, {new:true})
        await updatedUser.save()
        res.status(201).send({updatedUser})
    } catch (error) {
        res.status(404).send('cannot get user data')
    }
}


export const getUsers = async ( req, res ) => {
    try {
        const users= await User.find({})
        res.status(201).json(users)
    } 
    catch (error) {
        res.status(404).json({message:error.message})
    }
}