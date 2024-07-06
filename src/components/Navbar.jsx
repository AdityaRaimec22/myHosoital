import React, { useState } from "react";
import Login from "./LoginBox";

const Navbar = ({ isLoggedIn, newFunc, name }) => {
    const [isLogin, setIsLogin] = useState(false);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <nav className="w-[100%] h-16 shadow-xl flex items-center justify-between bg-white">
            <h1 className="text-2xl ml-[3vw] font-semibold">Navbar</h1>
            {isLoggedIn && <div className="flex">
                <h1>{name}</h1>
                <img className="h-10 mr-[2vw]" src="/Images/user.png" alt="hm hai na" /></div>}
            {!isLoggedIn && <div>
                <button onClick={togglePopup} className="p-[0.5vw] text-xl font-semibold rounded-lg shadow-lg bg-blue-400 mr-[2vw]">Login/SignUp</button>
                </div>}
            <Login isOpen={isPopupOpen}
                        onClose={togglePopup} newFunc = {newFunc} />
        </nav>
    )
}

export default Navbar;