const eventEmitter = require('events');


class Logger extends eventEmitter {
    
     log(callback) {
        this.emit('log','start');
        callback();
        this.emit('log','ended')
    }
}


module.exports.Logger = Logger;