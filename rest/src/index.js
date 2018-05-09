const App = require('./config/express');
const http = require('http');

const db = require('./config/database');
// import './config/database/setup';  //-- this resets the databases

const server = http.createServer(App);
const PORT = 3996;

server.listen(PORT, err => {
  if (err) throw new Error();
  console.log("successfully connected to rest-server port ", PORT);
});
