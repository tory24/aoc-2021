import fs from "fs";
let subMovement = fs.readFileSync("../public/day2.txt", "utf8").split("\n");

/**
 * DAY 2: Controlling the Submarine
 * Part 1 & 2
 */

let horizontalPos = 0;
let depth = 0;
let aim = 0;

subMovement.forEach((movement) => {
  let value = parseInt(movement[movement.length - 1]);
  if (movement[0] == "u") {
    aim -= value;
  } else if (movement[0] == "d") {
    aim += value;
  } else {
    horizontalPos += value;
    depth += aim * value;
  }
});

console.log("Part1: ", horizontalPos * aim);
console.log("Part2: ", horizontalPos * depth);
