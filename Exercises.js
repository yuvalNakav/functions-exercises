//Question 1
function myReverse(str) {
const n = "Nitzan"
function myReverse(str) {
    let arr = Array.from(str).reverse().join("")
    return arr
    }
console.log(myReverse(n));
  
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here 
  for (let i = 0; i < str.length; i++){
    for (let j = i + 1; j < str.length + 1; j++){
        combinations.push(str.slice(i, j));
    }
  return combinations;
  }
  }

//Question 3
function allCaps(str) {
  let newStr = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
      newStr = newStr + arr[i][0].toUpperCase() + arr[i].slice(1) + " "
  }
  newStr = newStr.slice(0, newStr.length)
  return newStr;
  return "";
}

//Question 4
function myPower(x, n) {
    return x ** n;
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
    function getFirstNotRepeating(str) {
      const set = new Set();
    const finalSet = new Set();
    str.split('').forEach(char => {
      if (set.has(char)) finalSet.delete(char);
      else {
        set.add(char);
        finalSet.add(char);
      }
    })
    const iter = finalSet.values();
    return iter.next().value;
  }
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
