const express = require("express");
const app = express();

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.use(express.static('public'));

const port = process.env.PORT|| 80;
app.listen(port, () => console.log(`server şu portta açık: ${port}`));
