let a = [1, 2, 3, 4];

let b = a.map(function(item, i, arr) {
    return item * item;
});

let c = a.reduce(function(total, item, i, arr) {
    return total + item;
});

let d = [{ price: 1, name: "Apple" }, { price: 2, name: "Orange" }];
let e = d.reduce(function(tital, item) {
    return total + item.price;
}, 0);

let f = a.filter(function() {

})