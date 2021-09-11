const { error } = require('console');
const fs = require('fs');

try { //비추 방법
    fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
    console.error(error);
}


fs.rename('./text-new.txt', './text.txt',(error) => {
    console.log(error)
})

console.log('hello')

fs.promises.rename('./text.txt', './text-new.txt').then(() => console.log('성공')).catch(console.error)