const eventEmitter = require('events');
const emitter = new eventEmitter(); 

emitter.on('jiwon', (args) => {
    console.log('first callback', args)
})

emitter.on('jiwon', (args) => {
    console.log('second callback', args)
})

emitter.emit('jiwon',{message: 1})
emitter.emit('jiwon',{message: 2})
emitter.emit('jiwon',{message: 3})