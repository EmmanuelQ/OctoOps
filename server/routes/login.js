const express = require('express'),
	  router = express.Router(),
	  axios = require('axios'),
	  API = 'https://jsonplaceholder.typicode.com';




router.get('/', (req, res)=>{
	res.send("API works");
});



module.exports = exports = router;



