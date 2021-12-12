import fs from "fs";
let hydrothermal = fs
  .readFileSync("../public/day5.txt", "utf8")
  .split("\n")
  .map((x) =>
    x
      .split(" -> ")
      .map((x) => x.split(","))
      .flat()
  );

let map = [];
let vents = [];

function addToMap(y, x) {
  if (!map[y]) map[y] = [];
  map[y][x] ? map[y][x]++ : (map[y][x] = 1);
}

hydrothermal.forEach((vals, i) => {
  if (!vents[i]) vents[i] = [];
  vents[i][0] = [parseInt(vals[0]), parseInt(vals[2])];
  vents[i][1] = [parseInt(vals[1]), parseInt(vals[3])];
});

vents.forEach((point, i) => {
  point.forEach((p, i2) => {
    let diff = p[0] < p[1] ? p[1] - p[0] : p[0] - p[1];
    for (let x = 1; x < diff; x++)
      vents[i][i2].splice(x, 0, p[0] < p[1] ? p[x - 1] + 1 : p[x - 1] - 1);
  });
});

vents.forEach((coord) =>
  coord[0].length > coord[1].length
    ? coord[0].forEach((val) => addToMap(coord[1][0], val))
    : coord[1].forEach((val, index) => {
        if (coord[0].length === coord[1].length) addToMap(val, coord[0][index]);
        if (coord[1].length > coord[0].length) addToMap(val, coord[0][0]);
      })
);

console.log(map.flat().filter((x) => x >= 2).length);
