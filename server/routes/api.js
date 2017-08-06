const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const config = require('../../config.js');
const assert = require("assert");

/* GET api listing. */
router.get('/', (req, res) => {
	
});


module.exports = router;




/*
  var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ]);
}*/