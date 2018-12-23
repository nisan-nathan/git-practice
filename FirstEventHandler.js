var events = require('events');
var eventEmitter = new events.EventEmitter();

var sampleHandler = function() {
    console.log('I hear a scream');
}

eventEmitter.on('scream', sampleHandler);

eventEmitter.emit('scream');