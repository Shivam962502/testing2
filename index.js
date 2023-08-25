// file.js (feature/branch2)
function calculateTotal(items) {
    let total = 0;
    for (const item of items) {
        total += item.quantity * item.price; // Updated calculation
    }
    return total;
}

const cartItems = [
    { name: 'Item 1', price: 10, quantity: 2 }, // Quantity added
    { name: 'Item 2', price: 20, quantity: 3 }, // Quantity added
    // ... more items
];

console.log('Total:', calculateTotal(cartItems));

// hello bite