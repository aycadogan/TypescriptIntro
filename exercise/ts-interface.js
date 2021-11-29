// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 2 – Interfaces
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈
// Objectives:
// • Demonstrate structural typing (duck typing)
// • Create an interface and implement it on a class
// • Differentiate type aliases from interfaces
var ExerciseTwo = function () {
    // ======== Exercise 2.1 ========
    // Instructions:
    // • Create an interface `CartItem` and replace the param's type with it
    // • Make variantId optional
    function addToCart(item) {
        console.log('[Exercise 2.1]', "Adding \"".concat(item.title, "\" to cart."));
    }
    addToCart({ id: 1, title: 'Concrete shoes' });
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var jane = new Person('Jane', 31);
    console.log('[Exercise 2.2]', "".concat(jane.name, " is ").concat(jane.age, " years old."));
    var User = /** @class */ (function () {
        function User(name, id) {
            this.name = name;
            this.id = id;
        }
        return User;
    }());
    var user = new User('Dog', 1);
    console.log(user.id); // readable
    user.name = 'Harold'; // writable
    // user.id = 5 // not writable
    console.log("User:", user);
};
ExerciseTwo();
