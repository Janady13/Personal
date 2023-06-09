const minNum =1;
const maxNum =100;
const numPicks = 5;

function generateNumbers(min, max, num) {
    const numbers = [];   //array
    while (numbers.length < num) {  //method
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  }

  function playLottery(myPicks){
    const winningNumbers = generateNumbers(minNum,maxNum,numPicks);
    const matchedNumbers = myPicks.filter( num => winningNumbers.includes(num))
    const numMatches = matchedNumbers.length;
    let message =  `Winning numbers: ${winningNumbers.join(", ")}\n`;

    if (numMatches === numPicks) {
        message += `Congratulations! You have won the jackpot!`;
      } else if (numMatches > 0) {
        message += `You matched ${numMatches} number(s): ${matchedNumbers.join(", ")}`;
      } else {
        message += `Sorry, you did not win this time. Better luck next time!`;
      }
      return message;
    }
  


    // Example usage
const myPicks = [7, 12, 23, 34, 45];
const result = playLottery(myPicks);
console.log(result);