import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 23
    },
    {
        description: 'Samsung',
        price: 23
    }
]

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})

console.log('total', total);
console.log('tax', tax);