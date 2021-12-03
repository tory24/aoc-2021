import fs from "fs";
let diagnostic = fs
  .readFileSync("/Users/tmoscaritolo/Desktop/aoc-2021/public/day3.txt", "utf8")
  .split("\n");

/*
 * Part 1
 * Power Consumption
 */

function findMostCommonNum(array) {
  const commonArr = [];
  const unCommonArr = [];
  array.forEach((number) => {
    number.split("").forEach((number, index) => {
      if (number == 1) {
        commonArr[index] ? commonArr[index]++ : (commonArr[index] = 1);
      }
    });
  });

  commonArr.forEach((number, index) => {
    if (number < array.length / 2) {
      commonArr[index] = 1;
      unCommonArr[index] = 0;
    } else {
      commonArr[index] = 0;
      unCommonArr[index] = 1;
    }
  });

  console.log(
    parseInt(commonArr.join(""), 2) * parseInt(unCommonArr.join(""), 2)
  );
}

findMostCommonNum(diagnostic);

/*
 * Part 2
 * Oxygen & C02 Levels
 */

let value = 0;
let oxygenArray = [...diagnostic];
let c02Array = [...diagnostic];

function filterArray(array, common, unCommon) {
  array[0].split("").forEach((num, index) => {
    if (array.length === 1) return;
    array.forEach((number) => number[index] == 1 && value++);
    value < array.length / 2 ? (value = common) : (value = unCommon);
    for (let arrIndex = array.length - 1; arrIndex >= 0; --arrIndex) {
      parseInt(array[arrIndex][index]) !== value && array.splice(arrIndex, 1);
    }
  });
  return parseInt(array, 2);
}

console.log(filterArray(c02Array, 1, 0) * filterArray(oxygenArray, 0, 1));
