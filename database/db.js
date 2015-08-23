var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tagEditor');
module.exports=mongoose;