import { json } from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import { createAccesToken , createRefreshToken } from '../tokens/tokens.js'


export const loginUser = async ( req , res ) => {
    const { login , password } = req.body   
    try {
        const user = await User.findOne({login})
        if (!user)  {
            return res.status(400).send('username not finded')
        }

        const validPassword = bcrypt.compareSync(password , user.password)

        if(!validPassword){
            return res.status(400).json({message:'incorrect password'})
        }
        const accesToken = createAccesToken(user.id)
        res.status(201).json({user,accesToken:accesToken})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const logout = async (req, res) => {
    res.clearCookie('accesToken')
    res.send('user logoutted')
}

export const getUser = async (req,res) => {
    const accesToken = req.headers.authorization.split(' ')[1]
    try {
        if (!accesToken){
            res.status(401).json({message:'Acces Denied'})
        }
        const verifyied= jwt.verify(accesToken , 'secret-token')
        const user = await User.findOne({_id:verifyied.id})
        if (!user){
            return res.status(400).send('wrong user')
        } 
        res.status(200).json({
            userName:user.login,
        })
    } catch (error) {
        res.status(404).send(error.message)
    }
}