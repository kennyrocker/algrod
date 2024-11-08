


function SetBitAt(bit, pos) {
    const mask = 1 << pos;
    return bit | mask;

}
console.log(SetBitAt(5,1));

// 5 = 101
// mask at pos 1 = 10

// 1 0 1
// 0 1 0
// BITWISE OR |
// 1 1 1
// 111 to integer 7





function isOdd(number) {
    return number & 1;
}

console.log('isOdd(7)',isOdd(7));