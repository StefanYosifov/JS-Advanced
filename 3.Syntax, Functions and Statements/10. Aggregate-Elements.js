function solve(arr) {
  return `${arr.reduce((a, v) => a + v, 0)}
    ${arr.reduce((a, v) => a + 1 / v,0)}
    ${arr.join("")}
    `;
}

console.log(solve([2, 4, 8, 16]));
