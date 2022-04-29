const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World in console')
    console.log("Hello World")
})

app.listen(100, ()=>console.log('server is running on port 100'))