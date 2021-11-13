//ES6

//object property shorthand

const name = 'Kim';
const userAge = 25;

const user = {
    name,
    age: userAge,
    location: 'Israel'
}

console.log(user)

//object destructuring

const product = {
    label: 'Red notebook',
    price: 30,
    stock: 200,
    salePrice: undefined
}

const {label:lll,stock,rating = 5} = product
console.log(lll)
console.log(product.label)
console.log(stock )

const transaction = (type, {label , stock = 0} = {}) => {
    console.log(type,label, stock)
}

transaction('order', product)