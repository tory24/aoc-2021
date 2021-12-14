import fs from "fs";
let fish = fs
  .readFileSync("../public/day6.txt", "utf8")
  .split(",")
  .map((x) => parseInt(x));

let tally = 0;
/* Part 1:: Small enough for a few for loops */
for (let i = 1; i <= 80; i += 1) {
  tally++;
  for (let x = 0; x < fish.length; x++) {
    if (fish[x] === 0) {
      fish.push(9);
      fish[x] = 6;
    } else {
      fish[x]--;
    }
  }
}

console.log(tally);
console.log(fish.length);

/*
 * Part 2:: Go for 256 days
 */
