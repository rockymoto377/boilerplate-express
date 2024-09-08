let express = require('express');
let app = express();
let bodyParser = require('body-parser');
require('dotenv').config();

/*
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${req.ip}`);
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({
            message: "HELLO JSON"
        });
    } else {
        res.json({
            message: "Hello json"
        });
    }
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({
        time: req.time
    });
});
*/

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/:word/echo", (req, res, next) => {
    res.json({
        echo: req.params.word
    });
});

app.route("/name").get((req, res, next) => {
    res.json({
        name: `${req.query.first.toString()} ${req.query.last.toString()}`
    });
}).post((req, res, next) => {
    res.json({
        name: `${req.body.first.toString()} ${req.body.last.toString()}`
    })
});

module.exports = app;
// console.log("Hello World");