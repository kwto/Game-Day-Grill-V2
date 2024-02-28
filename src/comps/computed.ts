import Stripe from 'stripe'
export function getProductName(product: any) {
    return product?.name;
}

export function getProductImage(product: any) {
    // return product?.images[]
}

export function getPriceTotal(price: any) {
    return Number(price.unit_amount / 100).toFixed(2);
}