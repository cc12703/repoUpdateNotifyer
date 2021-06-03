
import { Server, Socket} from 'socket.io'


export function create(server: any) {
    const serv = new Server(server)
    serv.on("connection", (socket: Socket) => {
        console.log(`connect ${socket.id}`)
    })
}