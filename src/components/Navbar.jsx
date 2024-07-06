import React, { useState } from "react";
import Login from "./LoginBox";

const Navbar = ({ isLoggedIn, newFunc, name }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-[100%] h-16 shadow-xl flex items-center justify-between bg-white relative">
            <h1 className="text-2xl ml-[3vw] font-semibold">Navbar</h1>
            {isLoggedIn && (
                <div className="flex items-center">
                    <h1 className="mr-[0.5vw] mt-[0.4vw] font-semibold text-lg">{name}</h1>
                    <button onClick={toggleMenu}>
                        <img className="h-10 mr-[2vw]" src="/Images/user.png" alt="hm hai na" />
                    </button>
                    {isMenuOpen && (
                        <div className="absolute right-[2vw] top-16 bg-white shadow-lg rounded-lg z-50 ">
                            <ul className="flex flex-col p-4">
                                <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Register Hospital</li>
                                <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Your Hospital</li>
                                <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Demo</li>
                            </ul>
                        </div>
                    )}
                </div>
            )}
            {!isLoggedIn && (
                <div>
                    <button onClick={togglePopup} className="p-[0.5vw] text-xl font-semibold rounded-lg shadow-lg bg-blue-400 mr-[2vw]">Login/SignUp</button>
                </div>
            )}
            <Login isOpen={isPopupOpen} onClose={togglePopup} newFunc={newFunc} />
        </nav>
    );
}

export default Navbar;
