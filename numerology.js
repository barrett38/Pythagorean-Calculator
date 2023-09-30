function red(n) {
    n = n.toString().split('').map(Number);
    n = n.reduce((a, curr) => a + curr, 0);
    const masNum = [11, 22, 33];
    return masNum.includes(n) || n < 10 ? n : red(n);
  }
  
  function pythagorean(input) {
    input = input.replace(/[ajs]/gi, 1).replace(/[bkt]/gi, 2);
    input = input.replace(/[clu]/gi, 3).replace(/[dmv]/gi, 4);
    input = input.replace(/[enw]/gi, 5).replace(/[fox]/gi, 6);
    input = input.replace(/[gpy]/gi, 7).replace(/[hqz]/gi, 8);
    input = input.replace(/[ir]/gi, 9).replace(/[' -]/gi, 0);
    input = red(input);
    return input;
  }
  
  function getBirthdayNum(input) {
    const formatSplit = input.split('-');
    const day = formatSplit[1];
    input = day;
    input = red(input);
    return input;
  }
  
  function getSoulUrge(input) {
    const pattern = /[aeiou]y/gi;
    if (pattern.test(input)) {
      input = input.replace(/y/gi, '7');
    } else {
      input = input.replace(/y/gi, '0');
    }
    input = input.replace(/a/gi, 1).replace(/e/gi, 5).replace(/i/gi, 9);
    input = input.replace(/o/gi, 6).replace(/u/gi, 3);
    input = input.replace(/[bcdfgh]/gi, 0).replace(/[jklmnp]/gi, 0);
    input = input.replace(/[qrstvwxyz]/gi, 0);
    input = input.replace(/-/gi, 0).replace(/'/gi, 0).replace(/ /gi, 0);
    input = red(input);
    return input;
  }
  
  function getPersonality(input) {
    const pattern = /[aeiou]y/gi;
    if (pattern.test(input)) {
      input = input.replace(/y/gi, '0');
    } else {
      input = input.replace(/y/gi, '7');
    }
    input = input.replace(/[aeiou]/gi, 0);
    input = input.replace(/[js]/gi, 1).replace(/[bkt]/gi, 2);
    input = input.replace(/[cl]/gi, 3).replace(/[dmv]/gi, 4);
    input = input.replace(/[nw]/gi, 5).replace(/[fx]/gi, 6);
    input = input.replace(/[gpy]/gi, 7).replace(/[hqz]/gi, 8);
    input = input.replace(/[r]/gi, 9).replace(/[' -]/gi, 0);
    input = red(input);
    return input;
  }
  
  function calculateNumbers() {
    const nameInput = document.getElementById("nameInput").value;
    const bdayInput = document.getElementById("birthdayInput").value;
  
    let lifePath = pythagorean(bdayInput);
    let birthdayNum = getBirthdayNum(bdayInput);
  
    let soulUrge = getSoulUrge(nameInput);
    let personality = getPersonality(nameInput);
    let expression = pythagorean(nameInput);
  
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your Life Path Number is ${lifePath}.<br>Your Birthday Number is ${birthdayNum}.<br>Your Soul Urge Number is ${soulUrge}.<br>Your Personality Number is ${personality}.<br>Your Expression Number is ${expression}.`;
  }
  