import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express();

// create a http server
const httpServer = createServer(app);

// webSocket take http server as argument
const io = new Server(httpServer);

app.get('/', (req, res) => {
    res.send('hello user')
})

io.on('connection', (socket) => {
    console.log('user connected')
    console.log('user id : ', socket.id)
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})