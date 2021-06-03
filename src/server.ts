
import http from 'http'


import app from './app'
import * as rapp from './rapp'

const PORT = 3000


rapp.create(http.createServer(app))

app.listen(PORT, ()=> {
    console.log('express server is listen')
})


