import express from 'express'
import { loginUser , getUser, logout } from '../controllers/loginController.js'
import { verifyieUser } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/login',loginUser)
router.get('/user',getUser)
router.post('/logout', logout)

export default router
