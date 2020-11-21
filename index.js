const http = require("http");
const scraper = require("./scripts/request")
const database = require("./database/database")

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hi there!");
})

server.listen(8000, ()=>{
    database.connect();
    console.log("Server Running!")
    scraper.scrape();
})