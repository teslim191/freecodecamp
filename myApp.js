const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/json", (req, res) => {
  // if (process.env.MESSAGE_STYLE == "uppercase"){
  //     res.json({"message":"HELLO JSON"})
  // }
  // else{
  //     res.json({"message":"hello json"})
  // }
  process.env.MESSAGE_STYLE == "uppercase"
    ? res.json({ message: "HELLO JSON" })
    : res.json({ message: "hello json" });
});


app.get('/:word/echo', (req, res)=> {
    res.json({echo: 'word'});
    console.log(req.params.word)
})



app.listen(100, () => console.log("Server is running on port 100"));
