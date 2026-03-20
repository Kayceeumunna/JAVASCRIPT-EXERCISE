//Task: calculate the sum of numbers within an array
const numbers = [85, 22, 800, 360, 467];
const sum = numbers.reduce((acc, curr) => acc + curr , 0);
console.log("sum:", sum); 

//create a length converter function
function lengthConverter(lengthInMeters) {
    const lengthInFeet = lengthInMeters * 4.6789;
    return lengthInFeet;
}
console.log("lengthInFeet:", lengthConverter(7));

//print all even numbers from 0-100
for (let k = 0; k <= 100; k++) {
    if (k % 2 === 0) {
        console.log(k);
    }
}