'use client'
import {Footer} from "@/src/comps/Footer";
import React from "react";
import {NavBarStore} from "@/app/cart/navBarStore";


export default function Home() {
    return (
        <>
            <NavBarStore />
            <div className="flex justify-center items-center">
                <h1 className="text-4xl font-bold">Cart</h1>
            </div>
            <Footer />
        </>
    )
};