const express = require('express'),
	  router = express.Router(),
	  axios = require('axios'),
	  mongoose = require('mongoose'),
	  bodyParser = require('body-parser'),
	  API = 'https://jsonplaceholder.typicode.com';



router.use(bodyParser.json()),
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', (req, res)=>{
	let cred = req.body;

	users.forEach(function(user){
		let userName = cred.username;
		let password = cred.password;
		//res.send(JSON.stringify({name: userName}));
		if( userName === user.name && password === user.password){
			res.send(JSON.stringify({name: "emmanuel"}));
		}
	});
	res.setHeader('Content-Type', 'application/json')
	res.send(JSON.stringify({name: "not found"}));
});



const users = [{
	name: 'emmanuelq38@gmail.com',
	password: 'linti565',
}]


module.exports = router;



