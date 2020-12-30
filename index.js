const http = require('http');
const express = require('express');
const app = express();


app.use(express.static('public'));

http.createServer(app).listen(80); {
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });
};

const port = process.env.PORT|| 80;
console.log(`server şu portta açık: ${port}`);
