import express from 'express'
import {config} from 'dotenv'
import routes from './routes/routes.js'
import {join,dirname} from 'path'
import {fileURLToPath} from 'url'
import cors from 'cors'


config()

export const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))


app.use(cors())
app.use(routes)
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.set('port', process.env.PORT || 4000)





