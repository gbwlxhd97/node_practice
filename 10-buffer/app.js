// buffer -> 메모리에서 고정된 덩어리
// buffer -> array of interger 형태 



const buf = Buffer.from('hi');
console.log(buf)
console.log(buf.length);
console.log(buf[0])
console.log(buf[1])
console.log(buf.toString());

const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);
console.log(buf2)
console.log(buf3)

//concat
const newBuf = Buffer.concat([buf,buf2,buf3])
console.log(newBuf.toString())