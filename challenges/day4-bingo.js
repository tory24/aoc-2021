import fs from "fs";
let bingo = fs.readFileSync("../public/day4.txt", "utf8").split("\n");

const numDrawn = bingo[0].split(",").map((x) => parseInt(x));
bingo.splice(0, 1);

let bingoCards = [];
let currentCard = [];
let cardIndex = 0;

bingo.forEach((row, index) => {
  if (index === 0) {
    return;
  } else if (row.length === 0) {
    bingoCards.push(currentCard);
    currentCard = [];
    cardIndex = 0;
  } else {
    currentCard.push([]);
    row
      .trim()
      .split(" ")
      .map(
        (num) => num.length > 0 && currentCard[cardIndex].push(parseInt(num))
      );
    cardIndex++;
  }
});

// Deep Copy
var newBingoArray = [];
for (var i = 0; i < bingoCards.length; i++) {
  newBingoArray[i] = [];
  for (var j = 0; j < bingoCards[i].length; j++)
    newBingoArray[i] = [...newBingoArray[i], bingoCards[i][j].slice()];
}

let bingoWinner = false;
let finalBoardIndex;
let finalDrawnNum;

numDrawn.forEach((drawnNum, numDrawnIndex) => {
  if (bingoWinner) return;
  newBingoArray.forEach((array, bingoIndex) => {
    if (bingoWinner) return;
    var bingoCardTally = [];

    array.map((line, lineIndex) => {
      if (bingoWinner) return;

      for (let i = 0; i < line.length; i++) {
        if (line[i] === drawnNum) {
          line[i] = true;
        }
        if (newBingoArray[bingoIndex][lineIndex][i] === true) {
          bingoCardTally[i] ? bingoCardTally[i]++ : (bingoCardTally[i] = 1);
        }
      }

      if (line.every((x) => x === true) || bingoCardTally.includes(5)) {
        finalBoardIndex = bingoIndex;
        finalDrawnNum = drawnNum;
        bingoWinner = true;
      }
    });
  });
});

console.log(
  "we have bingo",
  newBingoArray[finalBoardIndex]
    .flat()
    .filter((x) => x !== true)
    .map((x) => parseInt(x))
    .reduce((prevVal, currVal) => prevVal + currVal) * finalDrawnNum
);
