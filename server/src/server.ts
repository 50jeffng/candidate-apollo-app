import express from 'express';
import mongoose from 'mongoose';
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from'./typeDefs';
import {resolvers} from './resolvers';
import * as g from './constants';

const port = g.PORT || process.env.PORT;

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs, 
        resolvers
    });

    server.applyMiddleware({app});

    await mongoose.connect('mongodb://localhost/candidate-apollo-app', {
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


