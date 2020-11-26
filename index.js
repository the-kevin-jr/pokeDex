const http = require("http");
const db = require("./database")

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hi there!");
})

server.listen(8000, ()=>{
    db.database.connect();
    console.log("Server Running!")
})