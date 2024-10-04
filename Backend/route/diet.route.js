import express from 'express';
import {getDiet} from '../controller/diet.controller.js';

const router=express.Router()

router.get("/",getDiet)
export default router;