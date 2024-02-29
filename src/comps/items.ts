import Stripe from 'stripe';

export function getProductName(product: any) {
    console.log('name:', product);
    return product?.name || '';
}

// export function getProductImage(product: any) {
//     return product?.Images?.[0] || '';
// }

// export function getProductDescription(product: any) {
//     return product?.description ?? ''
// }

export function getPriceTotal(price: any) {
    return Number(price.unit_amount / 100).toFixed(2);
}