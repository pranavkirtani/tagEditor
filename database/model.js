var mongoose = require('./db.js');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
 text:String
    
});
var Tag = mongoose.model('Tag', tagSchema);
module.exports=Tag;