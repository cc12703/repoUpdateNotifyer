
import http from 'http'
import path from 'path'


import express from 'express'
import cors from 'cors'
import * as sio from 'socket.io'

import * as store from './store'
import * as util from './util'

const PORT = util.normalizePort(process.env.PORT || '3000')

const MSG_UPDATE_INFOS = 'updateInfos'

const app = express()
const serv = http.createServer(app)
const rApp = new sio.Server(serv, {
            cors: {credentials: true}
        })

app.use(cors({credentials: true}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))




app.post('/update/submit', (req, resp) => {
    store.setUpdate(req.body)
    resp.send({code: 'succ'})

    rApp.sockets.emit(MSG_UPDATE_INFOS, store.getUpdates())
})



rApp.on("connection", (socket: sio.Socket) => {
    console.log(`websocket is connect ${socket.id}`)
    socket.emit(MSG_UPDATE_INFOS, store.getUpdates())
})



store.load()

serv.listen(PORT, ()=> {
    console.log(`NODE_ENV ${process.env.NODE_ENV}`)
    console.log('server is listen')
})


