const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: false }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

// some
const someResult = temperatures.some(temperature => temperature > 80); // true / false
console.log(someResult);

// every
const everyResult = temperatures.every(temperature => !temperature.isRecordTemp); // true / false
console.log(everyResult);