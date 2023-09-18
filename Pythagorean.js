// Pythagorean Numerology
// This is only applicabale for English letters at this time

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What do you wish to calculate? ", function(input){

// Replacing all ENGLISH letters with Pythagorean numeral values

    ajs = input.replace(/a/gi, 1).replace(/j/gi, 1).replace(/s/gi, 1)
    bkt = ajs.replace(/b/gi, 2).replace(/k/gi, 2).replace(/t/gi, 2)
    clu = bkt.replace(/c/gi, 3).replace(/l/gi, 3).replace(/u/gi, 3)
    dmv = clu.replace(/d/gi, 4).replace(/m/gi, 4).replace(/v/gi, 4)
    enw = dmv.replace(/e/gi, 5).replace(/n/gi, 5).replace(/w/gi, 5)
    fox = enw.replace(/f/gi, 6).replace(/o/gi, 6).replace(/x/gi, 6)
    gpy = fox.replace(/g/gi, 7).replace(/p/gi, 7).replace(/y/gi, 7)
    hqz = gpy.replace(/h/gi, 8).replace(/q/gi, 8).replace(/z/gi, 8)
    ir = hqz.replace(/i/gi, 9).replace(/r/gi, 9)
    final = ir.replace(/-/gi, 0).replace(/'/gi, 0).replace(/ /gi, 0)

// Taking final and changing to a string with .string()
// Splitting every character, using .split('')
// Finally, changing the string values into numbers, using .map(Number)
// * Map(Number) has to be used because string() has to be used > 
// * Without it, it will show up invalid > 
// * The Final Variable must be changed into a string to work
// This repeats twice to reduce further

    let digit1 = final.toString().split('').map(Number);
    let sum = digit1.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    let digit2 = sum.toString().split('').map(Number);
    let sum2 = digit2.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    let digit3 = sum2.toString().split('').map(Number);
    let reducedComplete = digit3.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    console.log("Sum: ", sum, " > ", sum2, " > ", reducedComplete)
    reader.close()
});
