import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from'./schema';
import {resolvers} from './resolvers';
import * as g from './constants';

const server = new ApolloServer({typeDefs, resolvers});
const port = g.PORT || process.env.PORT;
const app = express();
server.applyMiddleware({app});

app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});

app.get('/test', (req, res) => {
    res.json({'data': 'Government secret DATA!'});
});

app.listen(port, () => {
    console.log(`express is listening on port ${port}`);
});