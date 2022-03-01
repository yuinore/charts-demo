const count = 1200;
const labels = Array(count).fill().map((x,i) => i);
let values = Array(count).fill().map((x,i) => 0.5 - 0.5 * Math.cos(2 * Math.PI * i / count));
values = values.map((x) => Math.round(x * 1000) / 1000);

console.log(`const labels = [${labels.join(", ")}];`);
console.log(`const values = [${values.join(", ")}];`);
