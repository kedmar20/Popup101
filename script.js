const belsp2 = require('./buttons.js')

// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

console.log(belsp2());

const http = require('http')
const port = 3000


const handler = (request, response) => {
    console.log('new user!');
    response.end('Hello node')
}

const server = http.createServer(handler)
server.listen(port, ()=>{
    console.log('server is running...');
})