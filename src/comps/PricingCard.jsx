import axios from "axios";
import {getPriceTotal} from "@/src/comps/items";
import React from "react";

export default function Home({ price }) {

    const handleSubscription = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('/api/payment',
            {
                priceId: price.id
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        window.location.assign(data)
    }

    const dynamicImage = (price) => {
        if (price.nickname === "Chips and Queso") {
            return (
                <img
                    alt="Chips and Queso"
                    src="/imgs/food/ChipsandQueso.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Mozzarella Stick") {
            return (
                <img
                    alt="Mozzarella Stick"
                    src="/imgs/food/MozzarellaSticks.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Gameday Wings") {
            return (
                <img
                    alt="Gameday Wings"
                    src="/imgs/food/GamedayWings.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Fried Calamari") {
            return (
                <img
                    alt="Fried Calamari"
                    src="/imgs/food/FriedCalamari.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Gameday Burger") {
            return (
                <img
                    alt="Gameday Burger"
                    src="/imgs/food/GamedayBurger.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Chicken Tender") {
            return (
                <img
                    alt="Chicken Tenders"
                    src="/imgs/food/ChickenTenders.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Chicken Sandwich") {
            return (
                <img
                    alt="Chicken Sandwich"
                    src="/imgs/food/ChickenSandwich.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Grilled Chicken Sandwich") {
            return (
                <img
                    alt="Grilled Chicken Sandwich"
                    src="/imgs/food/GrilledChickenSandwich.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Vegan Burger") {
            return (
                <img
                    alt="Vegan Burger"
                    src="/imgs/food/Veganburger.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "The Classic") {
            return (
                <img
                    alt="The Classic"
                    src="/imgs/food/Theclassic.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Ice Cream Sundae") {
            return (
                <img
                    alt="Ice Cream Sundae"
                    src="/imgs/food/Icecreamsundae.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Cheesecake") {
            return (
                <img
                    alt="Cheesecake"
                    src="/imgs/food/cheesecake.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Tiramisu") {
            return (
                <img
                    alt="Tiramisu"
                    src="/imgs/food/tiramisu.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Apple Pie") {
            return (
                <img
                    alt="Apple Pie"
                    src="/imgs/food/applepie.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Coca-Cola") {
            return (
                <img
                    alt="Coca Cola"
                    src="/imgs/food/Cocacola.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Strawberry Smoothie") {
            return (
                <img
                    alt="Strawberry Smoothies"
                    src="/imgs/food/StrawberrySmoothies.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Chocolate Milkshake") {
            return (
                <img
                    alt="Chocolate Shake"
                    src="/imgs/food/ChocolateShake.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        } else if (price.nickname === "Orange Juice") {
            return (
                <img
                    alt="Orange Juice"
                    src="/imgs/food/OrangeJuice.png"
                    className="rounded-full w-16 h-16"
                    width={200}
                    height={90}
                />
            );
        }
    };


    return (
        <div className="flex flex-col items-center justify-center">
            {price.product && (
                <div className="relative text-center">
                    <div className="relative mb-4">
                        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-lg"/>
                        <p>{dynamicImage(price)}</p>
                        <h4 className="text-lg font-bold relative z-10">{price.nickname}</h4>
                    </div>
                    <button className="btn" onClick={handleSubscription}>
                        Buy {price.metadata.price} - ${getPriceTotal(price)}
                    </button>
                </div>
            )}
        </div>
    );



}