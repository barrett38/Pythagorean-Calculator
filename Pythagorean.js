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


    if (sum2 === 11 || sum === 11 || reducedComplete === 11) {
        console.log(`11's are the Sages and Prophets. 
        11's are the most intuitive of all the numbers. 
        The double 1's represent the pillars of Solomon's Temple. 
        They are the most spiritual of the numbers. 
        11's are the most sensitive of all the numbers. 
        11's and 7's are the most psychic of all the numbers. 
        For an 11 to find true happiness, 
        they must seach within and find God within.`)
    }
    if (sum2 === 22 || sum === 22 || reducedComplete === 22) {
        console.log(`22's are the Master Builders.
        Master Builders build and shape society.
        22's find purpose in building something that will 
        last generations after they pass.
        22's will be remembered for the foundation they lay.
        22's are able to see the big picture and are able to 
        see how all the pieces fit together.
        For a 22 to find true happiness, they must find a way 
        to build something bigger than themselves.
        They are able to see the bigger picture and how the 
        Stone the builders rejected can become the cornerstone.`)
    }
    if (sum2 === 33 || sum === 33 || reducedComplete === 33) {
        console.log(`33's are the Master Teachers.
        Master Teachers build and shape society.
        33's find purpose in teaching others.
        33's will be remembered for the lessons they teach.
        33's are able to see the big picture and are able 
        to see how all the pieces fit together.
        For a 33 to find true happiness, they must 
        find a way to teach others.`)
    }
    if (reducedComplete === 1) {
        console.log(`1's are the Leaders. 1's are the 
        most independent of all the numbers.
        1's are the most self-sufficient of all the numbers.
        1's are the masculine enrergy of all the numbers.
        They represent the father in numerology.
        To find true happiness, 1's must learn to be more selfless.
        In numerology, 1's will find strength in being more selfless.
        This is the mark of a true leader.`)
    }
    if (reducedComplete === 2) {
        console.log(`2's are the Mediators. 2's are the most 
        sensitive of all the numbers.There are 2 sides to everything. 
        2's are able to see both sides of the coin.
        2's are the most feminine energy of all the numbers. 
        The 2 is the mother in numerology.
        To find true happiness, 2's must learn to be more assertive.
        In numerology, 2's will find strength in being more assertive.`)
    }
    if (reducedComplete === 3) {
        console.log(`3's are the Communicators. 3's are the 
        most creative of all the numbers.
        3's are the most expressive of all the numbers. 
        They are the most social of all the numbers.
        The 3 is the child child-like creativity in numerology.
        To find true happiness, 3's must learn to be more disciplined.`)
    }
    if (reducedComplete === 4) {
        console.log (`4's are the Workers. 4's are the most 
        hard-working of all the numbers.
        4's are the most practical of all the numbers.
        4's are the most grounded of all the numbers.
        The 4 is the father in numerology.
        To find true happiness, 4's must learn 
        to be more flexible.`)
    }
    if (reducedComplete === 5) {
        console.log(`5's are the Freedom Seekers. 5's are the 
        most adventurous of all the numbers.
        5's are the most sensual, sexual, and 
        romantic of all the numbers.
        They are the most curious of all the numbers.
        5's are the most adaptable and flexible of all the numbers.
        They are the most versatile of all the numbers.
        To find true happiness, 5's must 
        learn to be more disciplined.`)
    }
    if (reducedComplete === 6) {
        console.log(`6's are the Nurturers. 6's are the 
        most nurturing of all the numbers.
        6's are the most responsible of all the numbers.
        6's are the most loving of all the numbers.
        They are the most compassionate of all the numbers.
        6's are the most self-sacrificing of all the numbers.
        To find true happiness, 6's must learn 
        to be more flexible.`)
    }
    if (reducedComplete === 7) {
        console.log(`7's are the Seekers. 7's are the most 
        spiritual of all the numbers.
        7's and 11's are the most psychic of all the numbers.
        7's are the most analytical of all the numbers.
        They are the most intellectual of all the numbers.
        7's are the most introverted of all the numbers.
        To find true happiness, 7's must learn 
        to be more flexible.`)
    }
    if (reducedComplete === 8) {
        console.log(`8's are the Powerhouses. 8's are the 
        most powerful of all the numbers.
        8's are the most ambitious of all the numbers.
        8's are the most materialistic of all the numbers.
        They are the most authoritative of all the numbers.
        8's are the most business-minded of all the numbers.
        To find true happiness, 8's must 
        learn to be more flexible.`)
    }
    if (reducedComplete === 9) {
        console.log(`9's are the Humanitarians. 9's are the 
        most compassionate of all the numbers.
        9's are the most generous of all the numbers.
        9's are the most selfless of all the numbers.
        They are the most charitable of all the numbers.
        9's are the most forgiving of all the numbers.
        To find true happiness, 9's must learn 
        to be more flexible.`)
    }

    console.log("Sum: ", sum, " > ", sum2, " > ", reducedComplete)
    reader.close()
});
