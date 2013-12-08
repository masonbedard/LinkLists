var db = require('./db.js'),
   Linklist = db.Linklist;

var connect = function(socket) {
    socket.on('pass it on', function(data) {
        console.log("HELLO");
        Linklist.saveLinklist(data.title, data.linklist, function(err) {
            console.log('hello');
        });
    });

    socket.on('get linklist', function() {
        console.log("HERE");
        Linklist.randomLinklist(function(err, title, linklist) {
            socket.emit('linklist', {title: title, linklist: linklist})
        });
    });
}

// the following is the initialization of the sockets 
exports.init = function(cio) {
  var io = cio;
  io.sockets.on('connection', connect);
}
