import express from 'express'
import { getData } from '../controlar/data.cnt.js'
const router = express.Router()

router.get("/", getData)
export default router;
