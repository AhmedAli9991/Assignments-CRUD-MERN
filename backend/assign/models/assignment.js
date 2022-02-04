var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var assignmentSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Desc:{
        type:String,
    }

});

module.exports = mongoose.model('Assignment', assignmentSchema);