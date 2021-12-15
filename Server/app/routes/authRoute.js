import express from 'express'
import { createUser, getUsers , updateUser } from '../controllers/authController.js'

const router = express.Router()

router.post('/auth', createUser)
router.get('/auth',getUsers)
router.patch('/auth/:id', updateUser)
router.delete('./auth/:id',)


export default router;