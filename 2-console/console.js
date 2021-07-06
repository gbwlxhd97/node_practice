// log level
console.log('log') // 개발
console.info('info') // 정보
console.warn('warn') // 경고
console.error('error') //에러 -> 1.사용자직접에러 리턴 2.시스템 에러

//assert 참이 아닐때만 로그로 출력해준다.
console.assert(2 === 3, 'not same')
console.assert(2 === 2, ' same')

const student = { name : "koji", age= 13}
console.table(student) // object형태를 테이블 형식으로 출력해준다.


// counting 해당 콘솔이 몇번 실행됐는지 횟수를 출력가능
function a() {
    console.count('how play function?');
}
a();
a();
