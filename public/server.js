// Header set Access - Control - Allow - Origin "test.php-cat.com"

console.log(`Server started on /public`);

//server.js

const express = require("express");
const app = express();

// app.use(function (req, res, next) {
//     // res.header("Access-Control-Allow-Origin", "test.php"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

// const port = 4000;
const port = 4008;

// const port = 6001;

const server = app.listen(`${port}`, function () {
    console.log(`Server started on port ${port}`);
});

const io = require("socket.io")(server, {
    cors: { origin: "http://test.php-cat.com", methods: ["GET", "POST"] },
});

function getValue() {
    // return {
    //     user_id: 77,
    //     count: Math.floor(Math.random() * (50 - 5 + 1)) + 5
    // };
    return [
        {
            id: 111105,
            type: "take_off",
            timestamp: 1634604672,
            trackId: 30417,
            productName: "Орех Бразильский сушёный, 100г",
            productCount: -1,
            sessionId: "143c1ddd-be57-4644-ae9a-6b16fee9078b",
        },
        {
            id: 111106,
            type: "put_on",
            timestamp: 1634606230,
            productName: "Салфетки детские, 50шт",
            productCount: 1,
            sessionId: "143c1ddd-be57-4644-ae9a-6b16fee9078b",
        },
        {
            id: 111107,
            type: "take_off",
            timestamp: 1634623962,
            productName: "Матча латте, 100г",
            productCount: -10,
            sessionId: "143c1ddd-be57-4644-ae9a-6b16fee9078b",
        },
        {
            id: 111108,
            type: "put_on",
            timestamp: 1634623963,
            productName: "Матча латте, 100г",
            productCount: 1,
            sessionId: "143c1ddd-be57-4644-ae9a-6b16fee9078b",
        },
        {
            id: 111109,
            type: "take_off",
            timestamp: 1634624212,
            productName: "Кальций d3, 137г",
            productCount: -9,
            sessionId: "6822d3db-a766-499f-b6ca-b9d6382c94b0",
        },
        {
            id: 111110,
            type: "take_off",
            timestamp: 1634624256,
            productName: "Кальций d3, 137г",
            productCount: -4,
            sessionId: "6822d3db-a766-499f-b6ca-b9d6382c94b0",
        },
        {
            id: 111111,
            type: "put_on",
            timestamp: 1634624436,
            productName: "Конфеты шоколадные с фундуком и морковью, 150г",
            productCount: 1,
            sessionId: "6822d3db-a766-499f-b6ca-b9d6382c94b0",
        },
        {
            id: 111112,
            type: "take_off",
            timestamp: 1634624489,
            productName: "Конфеты шоколадные с фундуком и морковью, 150г",
            productCount: -1,
            sessionId: "6822d3db-a766-499f-b6ca-b9d6382c94b0",
        },
        {
            id: 111113,
            type: "put_on",
            timestamp: 1634624497,
            productName: "Кальций d3, 137г",
            productCount: 1,
            sessionId: "6822d3db-a766-499f-b6ca-b9d6382c94b0",
        },
        {
            id: 111114,
            type: "take_off",
            timestamp: 1634624851,
            productName: "Томаты вяленные в масле, 240г",
            productCount: -1,
            sessionId: "143c1ddd-be57-4644-ae9a-6b16fee9078b",
        },
        {
            id: 111115,
            type: "put_on",
            timestamp: 1634624985,
            productName: "Конфеты шоколадные с фундуком и морковью, 150г",
            productCount: 1,
            state: "initial",
            sessionId: "143c1ddd-be57-4644-ae9a-6b16fee9078b",
        },
        {
            id: 111116,
            type: "take_off",
            timestamp: 1634625399,
            productName: "Конфеты шоколадные с фундуком и морковью, 150г",
            productCount: -1,
            sessionId: "143c1ddd-be57-4644-ae9a-6b16fee9078b",
        },
        {
            id: 111117,
            type: "put_on",
            timestamp: 1634625809,
            productName: "Салфетки детские, 50шт",
            productCount: 1,
            sessionId: "143c1ddd-be57-4644-ae9a-6b16fee9078b",
        },
        {
            id: 111118,
            type: "put_on",
            timestamp: 1634625812,
            productName: "Кальций d3, 137г",
            productCount: 1,
            sessionId: "6822d3db-a766-499f-b6ca-b9d6382c94b0",
        },
        {
            id: 111119,
            type: "take_off",
            timestamp: 1634625964,
            productName: "Салфетки детские, 50шт",
            productCount: -1,
            sessionId: "143c1ddd-be57-4644-ae9a-6b16fee9078b",
        },
        {
            id: 111120,
            type: "take_off",
            timestamp: 1634626045,
            productName: "Кальций d3, 137г",
            productCount: -1,
            sessionId: "f159363a-6dc9-46b1-87f5-cf82bc145e48",
        },
        {
            id: 111121,
            type: "put_on",
            timestamp: 1634626306,
            productName: "Кальций d3, 137г",
            productCount: 1,
            sessionId: "f159363a-6dc9-46b1-87f5-cf82bc145e48",
        },
        {
            id: 111122,
            type: "put_on",
            timestamp: 1634626666,
            productName: "Кальций d3, 137г",
            productCount: 1,
            sessionId: "f159363a-6dc9-46b1-87f5-cf82bc145e48",
        },
        {
            id: 111123,
            type: "take_off",
            timestamp: 1634626689,
            productName: "Кальций d3, 137г",
            productCount: -1,
            sessionId: "f159363a-6dc9-46b1-87f5-cf82bc145e48",
        },
        {
            id: 111124,
            type: "put_on",
            timestamp: 1634627710,
            productName: "Кальций d3, 137г",
            productCount: 2,
            sessionId: "f159363a-6dc9-46b1-87f5-cf82bc145e48",
        },
        {
            id: 111125,
            type: "take_off",
            timestamp: 1634627714,
            productName: "Кальций d3, 137г",
            productCount: -2,
            sessionId: "f159363a-6dc9-46b1-87f5-cf82bc145e48",
        },
        {
            id: 111126,
            type: "take_off",
            timestamp: 1634627878,
            productName: "Кальций d3, 137г",
            productCount: -1,
            sessionId: "6822d3db-a766-499f-b6ca-b9d6382c94b0",
        },
        {
            id: 111127,
            type: "put_on",
            timestamp: 1634627917,
            productName: "Кальций d3, 137г",
            productCount: 1,
            sessionId: "6822d3db-a766-499f-b6ca-b9d6382c94b0",
        },
    ];
}

io.on("connection", (socket) => {
    setInterval(() => {
        socket.broadcast.emit("newdata", getValue());
    }, 60*1000);
});
