const express = require("express");
const cors = require("cors");



// ======================================//

const app = express();
const port = 5000;

app.use(cors({ origin: ["http://localhost:3000"] }));

app.get("/user",(req,res)=>{
    res.send("you got a response")
});

app.get("*", (req, res) => {
    res.send("invalid request");
  });

app.listen(port, () => {
    console.log('server started');
})