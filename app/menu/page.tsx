'use client'
import {NavBar} from "@/src/comps/NavBar";
import {Footer} from "@/src/comps/Footer";
import Image from "next/image";
import backgroundImage from "@/src/imagesBetter/topMenuOrder.png";
import axios from 'axios'
import { useState, useEffect } from "react"
import React from 'react'
import PricingCard from "@/src/comps/PricingCard"


export default function Home() {

    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetchPrices()
    }, []);


    const fetchPrices = async () => {
        const {data} = await axios.get('/api/getproducts')
        setPrices(data)
        console.log(data)
    }


    return (
        <div className="relative">
            <Image
                src={backgroundImage}
                alt="Background"
                layout="responsive"
                width={1920}
                height={1080}
                className="w-full h-auto"
            />

            <div
                className="absolute top-0 left-0 w-full h-full bg-opacity-50 px-6">
                <NavBar/>
                <section className="text-center pt-20 font-black text-9xl text-[#D72727]">
                    Online Ordering
                </section>
            </div>
            <main className=" min-h-screen">

                <div className="max-w-5xl mx-auto py-8">
                    <div className="flex items-center justify-between border-b pb-3">
                        <h1 className="font-semibold tracking-wide leading-10 text-xl lg:text-3xl">
                            Shop Now
                        </h1>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                        {
                            prices.map(p => (
                                <PricingCard key={p.id} price={p}/>
                            ))
                        }
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

/*
'use client'
import React from 'react'
import {NavBar} from "@/src/comps/NavBar";
import {Footer} from "@/src/comps/Footer";

export default function Home() {
    return (
        <div className="relative">
                <NavBar/>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-6xl font-extrabold">Currently under construction</h1>
                <p className="text-lg text-gray-500 mt-10">How about you visit our location at 1720 Southlake Blvd.
                    Southlake, TX. 76092</p>
            </div>

            <Footer />
        </div>
    )
}
 */

