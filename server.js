const express = require('express'),
	  path = require('path'),
	  http = require('http'),
	  bodyParser = require('body-parser');

const USERAUTH = require("./server/routes/userauth.js");

const app = express();
const api = require('./server/routes/api');
const port = process.env.PORT || '4006';
app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/userauth', USERAUTH);
app.use('/api', api);



app.use(express.static(path.join(__dirname, 'dist')));




const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Server listening on Port: ${port}`);
})