import express from "express"
import userController from "../controllers/userController.js"
const router = express.Router()

router.get('/', userController.getUsers)
router.post('/', userController.saveUser)

export default router