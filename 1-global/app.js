const fs = requrie('fs');

console.log(global);

global.hello = () => {
    global.console.log('hello')
};

global.hello();

// Node 에서는 javascript 브라우저 같이 global 오브젝트가 있다. 마치 window오브젝트라고 생각하면된다.