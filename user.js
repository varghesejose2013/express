var mongoose = require('./con');
var nameschema =new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    confirm:String


});
var us=mongoose.model("names",nameschema);
module.exports=us;