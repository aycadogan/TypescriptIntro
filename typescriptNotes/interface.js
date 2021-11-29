var Product2 = /** @class */ (function () {
    function Product2() {
        this.id = 0;
        this.name = '';
        this.unitPrice = 0;
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + ' kaydedildi!');
}
function save2(product) {
    console.log(product.name + ' kaydedildi!');
}
save({ id: 1, name: 'Laptop', unitPrice: 10 });
var mouse = new Product2();
mouse.name = 'magic mouse';
save2(mouse);
