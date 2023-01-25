import { Router } from "express";
import controller from '../controllers/controller.js'


const route = Router()

//endpoint api

route.get('/',controller.index)

export default route;