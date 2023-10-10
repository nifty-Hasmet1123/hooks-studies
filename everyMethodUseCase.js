const obj1 = {
    hello: "world",
    howdy: "all"
};

function arrayIterator(items) {
    return !!items
}

// converts the values into array dataType => [ 'world', 'all' ];
const newArray = Object.values(obj1);

// const boolean = newArray.every(items => arrayIterator(items));
console.log(boolean);