// const square = function (x) {
//     return x * x;
// }

// const squareArrow = (x) => {
//     return x * x;
// }

// const squareArrow = (x) => x * x;

// console.log('square', square(8));
// console.log('squareArrow', squareArrow(1));

// const getFirstName = (name) => {
//     if (name) {
//         return name.split(' ')[0];
//     }
// }

// const getFirstNameShort = (name) => name ? name.split(' ')[0] : null;

// console.log(getFirstNameShort('Tyler Creller'));

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 2002));

const user = {
    name: 'Tyler',
    cities: ['Tampa', 'Ithaca', "Rochester"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}
console.log(user.printPlacesLived());

const multiplier = {
    nums: [2, 1, 400, 3, 4],
    multiplyBy: 112,
    doMultiply() {
        return this.nums.map((num) => num * this.multiplyBy)
    }
}
console.log(multiplier.doMultiply());