import React from "react";

export const NavBar = () => {
    return(
    <div className="navbar bg-base-200">
        <div className="flex-1">
            <label className="swap swap-rotate">
                <input type="checkbox" className="theme-controller" value="coffee"/>
                        <img alt="Tailwind CSS Navbar component"
                             src="/imgs/logo.png"
                             className="logo" width={50} height={50}
                        />
            </label>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a>Link</a></li>
                <li>
                    <details>
                        <summary>
                        Menu
                        </summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                            <li><a>Online Menu</a></li>
                            <li><a>Physical Menu</a></li>
                            <li><a>Cart</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
    );
}