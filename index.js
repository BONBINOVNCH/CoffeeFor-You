const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
require("dotenv").config();
const nodemailer = require("nodemailer");
const port = process.env.port;

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    const { email } = req.body;
    const date = new Date().toISOString().split("T")[0];
    const data = `${email}, ${date} \n`;
    fs.appendFile("leads.txt", data, (err) => {
        if (err) throw err;
        res.send("Користувача зареєстровано та дані збережено.");
    });
});

app.post("/about", (req, res) => {
    const { email } = req.body;
    const date = new Date().toISOString().split("T")[0];
    const data = `${email}, ${date} \n`;
    fs.appendFile("leads.txt", data, (err) => {
        if (err) throw err;
        res.send("Користувача зареєстровано та дані збережено.");
    });
});

app.post("/bestProduct", (req, res) => {
    const { email } = req.body;
    const date = new Date().toISOString().split("T")[0];
    const data = `${email}, ${date} \n`;
    fs.appendFile("leads.txt", data, (err) => {
        if (err) throw err;
        res.send("Користувача зареєстровано та дані збережено.");
    });
});

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS,
    },
});

app.post("/administration", (req, res) => {
    const { email } = req.body;
    res.send(email);

    fs.readFile("leads.txt", "utf8", (err, data) => {
        data.split("\n")
            .filter((line) => line != "")
            .map((line, index) => {
                let mailOptions = {
                    from: process.env.GMAIL_EMAIL,
                    to: line,
                    subject: "Тестовий лист",
                    text: `fefefefefefefe`,
                };

                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("Лист успішно відправлено", info.response);
                });
            });
    });
});

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

app.get("/administration", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "administration.html"));
});

//----------------------

app.get("/lead", (req, res) => {
    fs.readFile("leads.txt", "utf8", (err, data) => {
        const array = data
            .split("\n")
            .filter((line) => line != "")
            .map((line, index) => {
                return `<li><span class="index">${
                    index + 1
                }</span> <span class="email">${
                    line.split(",")[0]
                }</span><span class="date">${line.split(",")[1]}</span></li>`;
            })
            .join("");

        res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="stylesheet" href="./styles/lead.css" />

            <title>Document</title>
        </head>
        <body>
            <h2>Список всіх підписників</h2>
            ${array}
        </body>
    </html>
            `);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
