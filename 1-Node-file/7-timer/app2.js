console.log('code1')
setTimeout(() => {
    console.log('setTimeout 0 ')
},0)

console.log('code2')
setImmediate(() => {
    console.log('setImediate')
})

console.log('code3')
process.nextTick(() => {
    console.log('process.nextTick')
})