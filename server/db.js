var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ll');

var linklist = require('./linklist');

module.exports.Linklist = linklist;
