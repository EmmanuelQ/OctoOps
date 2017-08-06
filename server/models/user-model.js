const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
	//email: String, //email as id
	username: String,
	password: String,
	//firstName: String,
	//lastName: String,
	//ebayAcc: String,
}))