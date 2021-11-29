//when to use annotations
// 1) Function that return the 'any' type
var json = '{"x":10, "y":20}';
var coords = JSON.parse(json);
console.log(coords);
// 2) When we declare a variable on one line and initialize later
var colors = ['red', 'green', 'blue'];
var foundColor;
for (var i = 0; i < colors.length; i++) {
    if (colors[i] === 'green') {
        foundColor = true;
    }
}
console.log(foundColor);
// 3) Variables whose type cannot be inferred correctly
var numbers = [-10, -1, 12];
var isAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        isAboveZero = true;
    }
    else {
        isAboveZero = numbers[i];
    }
}
console.log(isAboveZero);
