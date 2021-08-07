const fs = require('fs').promises;

// read file
fs.readFile('./text.txt','utf8')
.then(data => console.log(data))
.then(console.error)

//write file
fs.writeFile('./file.txt', 'hihi')
.catch(console.error)

fs.appendFile('./file.txt', 'hihi heho')
.then(() => {
    fs.copyFile('./file.txt', './file2.txt')
    .catch(console.error)
})
.catch(console.error)


//folder
fs.mkdir('sub-folder')
.catch(console.error)

fs.writeFile('./sub-folder/text.txt','hi~')
.then(() => {
    data => console.log(data)
})
.catch(console.error)