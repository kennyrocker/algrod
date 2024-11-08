
// Singleton
let util = (() => {
    let instance;
    function init() {
        let count = 10;
        return {
            countDown: () => count--,
            getCount: () => count
        }
    }

    return {
        get: () => {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();


const instance1 = util.get();

instance1.countDown();

console.log(instance1.getCount());


const instance2 = util.get();

instance2.countDown();

console.log(instance2.getCount());




// Factory
const fakeIdFactory = (name, age, sex) => {
    return {
        name: name,
        age: age,
        sex: sex,
        serialize: () => {
            return JSON.stringify({
                name: name,
                age: age,
                sex: sex
            })
        }
    }
};


const p1 = fakeIdFactory('Jake', 23, 'M');
const p2 = fakeIdFactory('Marry', 21, 'F');
const p3 = fakeIdFactory('Fiona', 25, 'F');

console.log(p1.serialize(), p2.serialize(), p3.serialize());



// Generator

function* uuidGenerator() {
    while (true) {
        yield 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

const gen = uuidGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

