

function debounce (func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        console.log('debounce')
        timer = setTimeout(() => { func.call(this, args); }, timeout);
    };
}
function test(value){
    console.log('test value: ', value);
}

const debounceTest = debounce(() => test('foo'), 1000);


function db (fn, delay = 300) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        console.log('debounce')
        timeout = setTimeout(() => fn(args), delay);
    }
}

const debounceTest2 = db( () => test('foo'), 1000);