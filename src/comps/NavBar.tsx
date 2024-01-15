import Image from "next/image";
import logo from "@/src/images/logo.png";
import React from "react";

export const NavBar = () => {
    return (
        <nav>
            <ul className={"navbar flex justify-between items-center"}>
                <li><Image src={logo} alt="Logo" className="logo" width={150} height={50}/></li>
                <div className={"flex space-x-4"}>
                    <li><a href="/">HOME</a></li>
                    <li><a href="contact">ABOUT US</a></li>
                    <li><a href="menu">MENU</a></li>
                    <li><a href="catering">CATERING</a></li>
                </div>
            </ul>
        </nav>
    );
}


