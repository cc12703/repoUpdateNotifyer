
import http from 'http'
import path from 'path'


import express from 'express'
import cors from 'cors'
import * as sio from 'socket.io'

import * as store from './store'

const PORT = 3000

const MSG_UPDATE_INFOS = 'updateInfos'

const app = express()
const serv = http.createServer(app)
const rApp = new sio.Server(serv)

app.use(cors({credentials: true}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))




app.post('/update/submit', (req, resp) => {
    store.setUpdate(req.body)
    resp.send({code: 'succ'})

    rApp.sockets.emit(MSG_UPDATE_INFOS, store.getUpdates())
})


if(process.env.NODE_ENV === 'development') {
    app.get('/demoGet', function(req, resp) {
        resp.sendFile('demoGet.html', {root:path.join(__dirname, 'static')})
    })
}



rApp.on("connection", (socket: sio.Socket) => {
    console.log(`websocket is connect ${socket.id}`)
    socket.emit(MSG_UPDATE_INFOS, store.getUpdates())
})



store.load()

serv.listen(PORT, ()=> {
    console.log(`NODE_ENV ${process.env.NODE_ENV}`)
    console.log('server is listen')
})


