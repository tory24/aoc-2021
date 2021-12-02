// DAY 1: Sonar sweep
// The sonar returns values of the ocean depth as the sweep goes further away from the submarine

import fs from "fs";

let sonarSweep = fs
  .readFileSync("public/day1.txt", "utf8")
  .split("\n")
  .map((x) => parseInt(x));

/* 
* Task 1:
* Part 1
Find out how quickly the depth increases:
- Count the number of times a depth measurement increases from the last
There is no previous measurement from the first reading.
*/

function sonarSweepIncrease() {
  let amount = 0;
  sonarSweep.forEach((item, index) => {
    if (item > sonarSweep[index - 1]) {
      amount++;
    }
  });
  console.log("sonarSweepIncrease", amount);
}
sonarSweepIncrease();

/*
 * Part 2
 */

function countInThrees() {
  let amount = 0;
  let a;
  let b;
  sonarSweep.forEach((item, index) => {
    a = sonarSweep[index] + sonarSweep[index + 1] + sonarSweep[index + 2];
    b = sonarSweep[index + 1] + sonarSweep[index + 2] + sonarSweep[index + 3];

    if (a < b) amount++;
  });
  console.log("countInThrees", amount);
}
countInThrees();

function countInThreesProper() {
  let amount = 0;
  sonarSweep.forEach((item, index) =>
    sonarSweep[index] < sonarSweep[index + 3] ? amount++ : null
  );
  console.log("countInThreesProper", amount);
}
countInThreesProper();
