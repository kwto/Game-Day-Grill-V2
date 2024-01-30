import React, { useState, useEffect } from 'react';

export const Footer = () => {

    const animations = ["animate-spin", "animate-ping", "animate-bounce", "animate-pulse"];
    const [randomElement, setRandomElement] = useState('');

    const handleClick = () => {
        let newRandomElement;
        do {
            newRandomElement = animations[Math.floor(Math.random() * animations.length)];
        } while (newRandomElement === randomElement);
        console.log(newRandomElement);
        setRandomElement(newRandomElement);
    }

    // Run handleClick once on component mount
    useEffect(handleClick, []);

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img alt="logo"
                     src="/imgs/logo.png"
                     className="logo" width={50} height={50}
                />
            </div>
            <button
                onClick={handleClick}
                className={`btn text-xl align-middle hover:${randomElement}`}
            >   Game Day Grill
            </button>
        </div>
    );
}