import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const prices = await stripe.prices.list({
        // change for numbebr of items
        limit: 18,
    });

    return NextResponse.json(prices.data.reverse())
}