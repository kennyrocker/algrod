

const obj = { name: 'jack', age: 13 }

// shallow copy

const obj2 = obj;

console.log('obj', obj,  'obj2', obj2);

obj.name = 'mike';

console.log('obj', obj,  'obj2', obj2);


// deep copy

// option 1
const obj3 = {...obj2};

console.log('obj3', obj3, 'obj2', obj2);

obj2.name = 'grace';

console.log('obj3', obj3, 'obj2', obj2);


// option 2
const obj4 = Object.assign({}, obj3);

console.log('obj4', obj4, 'obj3', obj3);

obj3.name = 'bob';

console.log('obj4', obj4, 'obj3', obj3);