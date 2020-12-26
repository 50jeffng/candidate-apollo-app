import express from 'express';
import mongoose from 'mongoose';
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from'./typeDefs';
import {resolvers} from './resolvers';
import dotenv from 'dotenv';
import path from 'path';

console.log(`__dirname = ${__dirname}`);

const result = dotenv.config({
    path: path.join(__dirname,'../', '.env.test'),
})

if (result.error) {
    throw result.error
}

const port: Number = parseInt(`${process.env.SERVER_PORT}`, 10) || parseInt(`${process.env.PORT}`, 10) || 3000;

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs, 
        resolvers
    });

    server.applyMiddleware({app});

    await mongoose.connect(process.env.DB_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
    });
    return app;
};

startServer().then(app => {
    app.get('/', (req, res) => {
        res.send('The sedulous hyena ate the antelope!');
    });
    
    app.get('/test', (req, res) => {
        res.json({'data': 'Government secret DATA!'});
    });
    
    app.listen(port, () => {
        console.log(`express is listening on port ${port}`);
    });
});


