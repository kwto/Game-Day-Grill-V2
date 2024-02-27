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

            <Footer/>

        </div>
    )
}
