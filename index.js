const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()

app.use(express.json());
app.use(express.urlencoded());


const port = 5000;
var apiRouter = require("./routes/api");

app.use(apiRouter)


// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

var mongoUrl = 'mongodb://127.0.0.1/passwordBook'
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
})
