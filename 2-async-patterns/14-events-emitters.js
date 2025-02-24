
const http = require('http')

const server = http.createServer()

server.listen(5001)

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved ${name} with ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic`)
})

customEmitter.emit('response', 'john', 35)