const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
const fs = require("fs");

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(express.static("public", { 'extensions': ['html'] }));

app.get('/', function (req, res) {
    res.render('index')
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});