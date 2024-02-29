import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const NavBar = () => {

    const { handleOnChangeTheme } = useContext(ThemeContext)

    // Handler :: To change theme on clicking logo
    const handleOnChange = () => {
        const currentTheme = localStorage.getItem('theme')
        const updatedTheme = currentTheme === 'autumn' ? 'coffee': 'autumn'
        handleOnChangeTheme(updatedTheme)
    }    

    return (
        <div className="navbar ">
            <div className="flex-1">
                <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        className="theme-controller"
                        onChange = {handleOnChange}
                    />
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="/imgs/logo.png"
                        className="logo swap-on fill-current"
                        width={50}
                        height={50}
                    />
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="/imgs/logo.png"
                        className="logo swap-off fill-current"
                        width={50}
                        height={50}
                    />
                </label>
            </div>

            <div className="flex-none mx-4">

                <ul className="menu menu-horizontal mx-1">

                    <li><a href="/" className="btn font-bold rounded-xl rounded-xl">Home</a></li>

                    <li>
                        <details>
                        <summary className="btn font-bold rounded-xl no-animation mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-5 h-5 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                </svg>
                            </summary>
                            <ul className="font-bold">
                                <li><a href="/contact">About Us</a></li>
                                <li><a href="/catering">Catering</a></li>
                                <li><a href="/reservation">Reservation</a></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary className="btn font-bold rounded-xl no-animation mx-0.5">
                                Menu
                            </summary>
                            <ul className="font-bold">
                                <li><a href="/menu">Online Menu</a></li>
                                <li><a href="/physicalmenu">Physical Menu</a></li>
                                {/*<li><a href="/cart">Cart</a></li>*/}
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>
        </div>
    );

}