import fs from "fs";
let sonarSweep = fs
  .readFileSync("../public/day1.txt", "utf8")
  .split("\n")
  .map((x) => parseInt(x));

// DAY 1: Sonar sweep
// The sonar returns values of the ocean depth as the sweep goes further away from the submarine

/*
 * Part 1
 * Count the number of times a depth measurement increases from the last
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
 * Count in measurements of 3 depths at once
 */

function countInThrees() {
  let amount = 0;
  sonarSweep.forEach((item, index) =>
    sonarSweep[index] < sonarSweep[index + 3] ? amount++ : null
  );
  console.log("countInThrees", amount);
}
countInThrees();
