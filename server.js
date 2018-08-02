import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import {
    ApolloServer
} from 'apollo-server-express'
import schema from './schema'
import { mongoUri } from './key';
//Connect mongodb
mongoose.connect(mongoUri)
mongoose.connection.once('open',()=>{
    console.log('Connect to database was success.')
})
///
const server = new ApolloServer({ schema });

const app = express();
const path = '/graphql'
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
server.applyMiddleware({ app,path });

app.listen(5000, (err) => {
    if (err)
        return err
    console.log('Server listen port 5000')
})