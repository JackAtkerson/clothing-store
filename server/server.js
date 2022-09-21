
// set up express server
const express = require('express');
const path = require('path');
// set up Apollo Server
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const {authMiddleware} = require('./utils/auth');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
})

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  // set up mongoose 
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
}