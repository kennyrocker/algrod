

function count(downFromNum) {
    return {
        increase: () => downFromNum += 1,
        decrease: () => downFromNum -= 1,
        increaseWithAmount: (n) => downFromNum += n
    }
}


const instance = count(10);


console.log(instance.increase());
console.log(instance.decrease());
console.log(instance.increaseWithAmount(30));


function addition() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log('addition(1, 2, 3) => ' + addition(1, 2, 3));


const lambdaAddition = (...args) => {
    let initValue = 0;
    const sum = args.reduce((accumulator, currentValue) => accumulator + currentValue, initValue);
    return sum;
}

console.log('lambdaAddition(5, 2, 3) => ' + lambdaAddition(5, 2, 3));