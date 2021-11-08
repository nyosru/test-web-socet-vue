// Header set Access - Control - Allow - Origin "test.php-cat.com"

//server.js

const express = require("express");
const app = express();

app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "test.php"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// const port = 4000;
const port = 4008;
// const port = 6001;

const server = app.listen(`${port}`, function () {
    console.log(`Server started on port ${port}`);
});

const io = require("socket.io")(server, {
    cors: { origin: "https://test.php-cat.com", methods: ["GET", "POST"] },
});

// io.origins('*:*') // for latest version
// io.set("origins", "*:*");

function getRandomValue() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
}
io.on("connection", (socket) => {
    setInterval(() => {
        socket.broadcast.emit("newdata", getRandomValue());
    }, 5000);
});
