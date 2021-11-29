function topla(x, y) {
    return x + y;
}
var topla2 = function (x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
};
console.log(topla(2, 3));
//default deger =4 yaptik
console.log(topla2(2));
var topla3 = function (x, y) {
    if (y) {
        return x + y;
    }
    return x;
};
console.log(topla3(3.2));
