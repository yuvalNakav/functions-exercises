function allCaps(str) {
    let newStr = "";
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        newStr = newStr + arr[i][0].toUpperCase() + arr[i].slice(1) + " "
    }
    newStr = newStr.slice(0, newStr.length)
    return newStr;
}
console.log(allCaps("dsafsda jlkfds k ksdl lsl")); 
