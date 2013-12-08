var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

currKey = 0;

var linklistSchema = new Schema({
    _id: Number,
    title: String,
    links: [String]
});

linklistSchema.statics.saveLinklist = function(title, linklist) {
    var _this = this;
    var linklistData = {
        _id: currKey,
        title: title,
        links: linklist
    }
    var newLinklist = new Linklist(linklistData);
    newLinklist.save(function(err) {
        if (err == null) {
            currKey++;
        }
        else {
            console.log('error saving title '+title+' linklist '+linklist);
            console.log(err);
        }
    });
};

linklistSchema.statics.randomLinklist = function(callback) {
    var _this = this;
    var randomKey = getRandomInt (0, currKey - 1);
    _this.findById(randomKey, function(err, linklist) {
        if (err == null) {
            callback(null, linklist.title, linklist.links);
        }
        else {
            callback(0, null, null);
        }
    });
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Linklist = module.exports = mongoose.model('Linklist', linklistSchema);
