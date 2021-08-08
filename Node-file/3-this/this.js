function hi() {
    console.log(this);
    console.log(this === global)
}
hi(); // 함수내에서 this == global

class A {
    constructor(num){
        this.num = num;
    }
    memberfunction() {
        console.log(this)
        console.log(this === module.exports) // 클래스 내에서 this == module.exports임
    }
}

const a = new A(1);
a.memberfunction();