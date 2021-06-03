

import express from 'express'
import {json, urlencoded} from 'body-parser'
import cors from 'cors'



class App {

    public app = express()

    constructor() {

        this.app.use(cors())
        this.app.use(json())
        this.app.use(urlencoded({extended:false}))

        this.app.get('/', (req, res) => {
            res.send({message: 'Hello Express'})
        })
    }
}



export default new App().app