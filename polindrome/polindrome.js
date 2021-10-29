let x = -1111111111111111;
let xString = x.toString();
console.log(xString, typeof(xString));
// let xStringReversed = xString.split("").reverse().join("")

// Reverse String Manualy 
let xStringReversed = "";

for (let i = xString.length - 1; i >= 0; i--) {
    xStringReversed += xString[i];
}
console.log(xStringReversed);

for (let i = 0; i < (xString.length / 2) + 1; i++) {
    if(xString[i] === xStringReversed[i]){
        console.log(`i: ${i} true`);
    }else{
        console.log("false")
        return false;
    }
}
console.log("Final Result: true");
return true;