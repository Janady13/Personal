// Define the number of lottery balls and the maximum value of each ball
const numBalls = 10
const maxBallValue = 100;

// Initialize an array to hold the lottery numbers
const lotteryNumbers = []; //This is an array

// Generate the lottery numbers this is the for loop that is needed to generate the numbers this can also be considered a method
for (let i = 0; i < numBalls; i++) {
  let ballValue = Math.floor(Math.random() * maxBallValue) + 1;  
  
  // Check if the generated number has already been picked. Also can be considered a method
  while (lotteryNumbers.includes(ballValue)) {
    ballValue = Math.floor(Math.random() * maxBallValue) + 1;
  }
  
  // Add the unique ball value to the lottery numbers array
  lotteryNumbers.push(ballValue);
}

// Sort the lottery numbers in ascending order
lotteryNumbers.sort((a, b) => a - b);

// Print the lottery numbers
console.log(`The winning lottery numbers are: ${lotteryNumbers.join(', ')}`);