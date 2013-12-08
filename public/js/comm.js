var comm = {};
comm.socket = io.connect(window.location.href);
comm.modified = false;

comm.passItOn = function(title,arr) {
    if (comm.modified) {
        comm.socket.emit('pass it on', {title:title, linklist:arr});
        comm.modified = false;
    }
};

comm.explore = function() {
    console.log('get');
    comm.socket.emit('get linklist');
};

comm.socket.on('linklist', function(data) {
    console.log('got')
    view.populateLinks(data.title, data.linklist);
});

