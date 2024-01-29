import Image from "next/image";
import logo from "@/public/imgs/logo.png";
import React from "react";

export const Footer = () => {
    return (
        <footer >
            <ul className="navbar flex justify-between items-center p-4 bg-white">
                <li>
                    <a href="/">
                        <Image src={logo} alt="Logo" className="logo" width={150} height={50} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
