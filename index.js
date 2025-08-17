const express = require('express')
const path = require("path")
const app = express()
const fs = require("fs")
const port = 3000

app.use(express.static(__dirname + "/public"));

app.use(express.json())

app.use(express.urlencoded({ extended: true }));


app.post("/", (req, res) => {
    const { email } = req.body
    const date =  new Date().toISOString().split('T')[0]
    const data = `емел: ${email}, Дата: ${date}`
        fs.appendFile('leads.txt', data, (err) => {
        if (err) throw err;
        res.send('Користувача зареєстровано та дані збережено.');
    });

})


//=========

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/popularProduct", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "popularProduct.html"));
});

app.get("/customer", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "customer.html"));
});

app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "blog.html"));
});

app.get("/bestProduct", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "bestProduct.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "about.html"));
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})