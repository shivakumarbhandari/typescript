function calculateDiscount(price: number, discount: number): number {
    return price - price * discount;
}

console.log(calculateDiscount(100, 0.1));
