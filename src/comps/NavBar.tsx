import React, {useEffect, useState} from "react";

export const NavBar = () => {

    const [iscoffe, setiscoffe] = useState(
        JSON.parse(localStorage.getItem('iscoffee') as string)
    );
    useEffect(() => {
        localStorage.setItem('iscoffee', JSON.stringify(iscoffe));
    }, [iscoffe]);

    return (
        <div className="navbar">
            <div className="flex-1">
                <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        className="theme-controller"
                        value="coffee"
                        checked={iscoffe}
                        onChange={() => setiscoffe(!iscoffe)}
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

                <ul className="menu menu-horizontal px-1">

                    <li><a href="/" className="font-bold btn btn-neutral rounded-r-none">Home</a></li>

                    <li>
                        <details>
                        <summary className="btn btn-neutral rounded">
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
                            <summary className="btn btn-neutral rounded-l-none no-animation ">
                                Menu
                            </summary>
                            <ul className="font-bold">
                                <li><a href="/menu">Online Menu</a></li>
                                <li><a href="/physicalmenu">Physical Menu</a></li>
                                <li><a href="/cart">Cart</a></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>
        </div>
    );

}