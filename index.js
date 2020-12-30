const express = require('express');
const app = express();


app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index.ejs');
});

const port = process.env.PORT|| 3000;
app.listen(port, () => {console.log(`server şu portta açık: ${port}`)});
