function solve(arr) { //Kinda complex to understand
    return arr.reduce((a, v) => (a = Math.max(...v) > a ? Math.max(...v) : a), -Infinity)
}