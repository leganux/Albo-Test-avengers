const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./db')

require('dotenv').config()

app.get('/', function (req, res) {
    res.status(200).json(
        {
            success: true,
            code: 200,
            data: {},
            message: 'ok'
        }
    )
})

app.use('/marvel', require('./routes/colaborators.routes'))



app.listen(process.env.PORT, () => {
    console.log("The server started at port " + process.env.PORT);
});
