import React, { useState } from 'react';

export const Footer = () => {
    const animations = ["animate-spin", "animate-ping", "animate-bounce", "animate-pulse"];
    const [randomElement, setRandomElement] = useState<string>('');
    const [previousRandomElement, setPreviousRandomElement] = useState<string>('');

    const handleClick = () => {
        let newRandomElement: string;
        do {
            newRandomElement = animations[Math.floor(Math.random() * animations.length)];
        } while (newRandomElement === randomElement || newRandomElement === previousRandomElement);

        // Update the previous random element before setting the new one
        setPreviousRandomElement(randomElement);

        // Use the functional form to ensure the new state is based on the previous state
        setRandomElement(prevRandomElement => {
            // Ensure the new state is different from the previous one
            return newRandomElement !== prevRandomElement ? newRandomElement : '';
        });
    }

    const handleMouseLeave = () => {
        // Clear the animation when mouse leaves
        setRandomElement('');
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img alt="logo"
                     src="/imgs/logo.png"
                     className="logo" width={50} height={50}
                />
            </div>
            <button
                onMouseEnter={handleClick} // Trigger animation on hover
                onMouseLeave={handleMouseLeave} // Clear animation on leave
                className={`btn text-xl align-middle ${randomElement}`}
            >
                Game Day Grill
            </button>
        </div>
    );
}
