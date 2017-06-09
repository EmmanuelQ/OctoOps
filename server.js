const express = require('express'),
	  path = require('path'),
	  http = require('http'),
	  bodyParser = require('body-parser');

const LOGIN = require("./server/routes/login.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/login', LOGIN);


app.use(express.static(path.join(__dirname, 'dist')));


app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
})


const port = process.env.PORT || '4006';

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Server listening on Port: ${port}`);
})