const express = require('express')
const path = require("path")
const app = express()
const port = 3000



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/popularProduct", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "popularProduct.html"));
});

app.get("/customer", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "customer.html"));
});

app.use(express.static(__dirname + "/public"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})