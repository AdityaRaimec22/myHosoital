import React, { useState } from "react";
import Login from "./LoginBox";

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <nav className="w-[100%] h-16 shadow-xl flex items-center justify-between bg-white">
            <h1 className="text-2xl ml-[3vw] font-semibold">Navbar</h1>
            {isLogin && <img className="h-10 mr-[2vw]" src="/Images/user.png" alt="hm hai na" />}
            {!isLogin && <button onClick={togglePopup} className="p-[0.5vw] text-xl font-semibold rounded-lg shadow-lg bg-blue-400 mr-[2vw]">Login/SignUp</button>}
            <Login isOpen={isPopupOpen}
                        onClose={togglePopup}/>
        </nav>
    )
}

export default Navbar;