const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');




const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





const port = 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));