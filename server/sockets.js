var db = require('./db.js'),
   Linklist = db.Linklist;

function connect(socket) {
    console.log('someone connected');
    socket.on('pass it on', function(data) {
        Linklist.saveLinklist(data.title, data.linklist, data.key);
    });

    socket.on('get linklist', function() {
        Linklist.randomLinklist(function(err, title, linklist, key) {
            socket.emit('linklist', {title: title, linklist: linklist, key:key})
        });
    });
}

exports.init = function(cio) {
  var io = cio;
  io.sockets.on('connection', connect);
}
