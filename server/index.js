'use strict'

const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')

const newsRouter = require('./routes/withNews')
const fileRouter = require('./routes/withFile')
const recruitRouter = require('./routes/withRecruit')
const requestRouter = require('./routes/withRequest')

const cors = require('cors')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

require('dotenv').config({path : "./server/.env"});
// const  bodyParser = require('body-parser');


//미들웨어 등록
app.use(express.static("./server/assets"));
app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended : false }));
app.use(cors());
app.use(fileUpload({
    createParentPath: true
}));
app.use(cors());

app.use([newsRouter, fileRouter, recruitRouter, requestRouter]);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.listen(5005, '0.0.0.0', () => {
    console.log("node.js port 5005에서 시작")
})

module.exports = app;