/**
 * Created by gfrethem on 10/11/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
   text: {type: String, required: true},
    category: String,
    done: Boolean,
    dueDate: Date,
    created_at: Date,
    updated_at: Date
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;