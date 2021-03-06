const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./routes');
const cors = require('cors');
// const con = require('./db')
app.use(cors());
app.use(bodyParser.json())
app.use(router)
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname))
// con.connect((err) => {
//     if(err) throw err;
//     console.log('Mysql is connected')
// })

app.listen(5000, () => {
    console.log('Node Server is listening on port 5000....')
});
