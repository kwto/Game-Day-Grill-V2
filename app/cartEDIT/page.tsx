'use client'
import React from "react";

export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <a href={"/menuEDIT"}>
                    <h1 className="text-6xl font-extrabold">to-menu</h1>
                </a>
                <h1 className="text-10xl font-extrabold">Cart</h1>
            </div>
        </>
    )
};