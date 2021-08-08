function sayhello() {
    console.log(`hello 🙌`);
    console.log('hihi')
    console.log('hihi22')
}

function calculate(x,y) {
    console.log(`calculating..`);
    const result = x + y;
    console.log(`results: ${result}` );
    sayhello();
    return result
}

calculate(1,2)

const stop = 4;
console.log('.....log......');
for (let i =0; i< 10; i ++) {
    console.log('count', i );
    if(i === stop) {
        break;  
    }
}