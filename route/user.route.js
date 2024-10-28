import { singup } from "../controlar/user.cnt.js";
import { login } from "../controlar/user.cnt.js";
import express from 'express'

const router = express.Router()

router.post("/singup", singup)
router.post("/login", login)

export default router;