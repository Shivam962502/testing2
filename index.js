// file.js (feature/branch1)
function calculateTotal(items) {
    let total = 0;
    for (const item of items) {
        total += item.price;
    }
    return total;
}

const cartItems = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    // ... more items
];

console.log('Total:', calculateTotal(cartItems));


//hell world