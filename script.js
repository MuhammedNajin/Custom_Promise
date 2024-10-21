const Promise = require('./promise.js');

// testing code
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolved first one'), 1000);
});
p1.then((res) => {
    console.log(res);
    return new Promise(resolve => {
        setTimeout(() => resolve('resolved second one'), 1000);
    });
}).then(res => {
    console.log(res);
});
