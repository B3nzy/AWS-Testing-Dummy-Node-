const express = require("express")
const server = express();
const port = process.env.PORT||8000;

server.get("/", (req, res)=>{
    res.send("Hello from node server!");
})


server.listen(port, (req, res)=>{
    console.log(`Server is running on port ${port}`);
})