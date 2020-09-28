import * as express from 'express';
import * as bodyParser from 'body-parser';
import mongoose = require('mongoose');
import routes from './routers'

const server: express.Application = express()

server.use(bodyParser.json())

server.use(bodyParser.urlencoded({ extended: false }));

server.use(routes)

const porta = 3003;

const uri: string = 'mongodb://localhost:27017'

mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    server.listen(porta, () =>
      console.log(`Server running on http://localhost:${porta}`)
    )
  )
  .catch(error => {
    throw error
  })
