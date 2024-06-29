import axios from 'axios';
import React, { useState } from 'react';

const Login = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [SignUp, setSignUp] = useState(false);

    const openSignUp = () => {
        setSignUp(true);
    };

    const openLogin = () => {
        setSignUp(false);
    };

    const [loginFormData, setLoginFormData] = useState({
        number: '',
        password: ''
    });

    const [SignUpFormData, setSignUpFormData] = useState({
        name: '',
        number: '',
        password: '',
        confirmPassword: ''
    });

    const handleSignUpChange = (event) => {
        setSignUpFormData({
            ...SignUpFormData,
            [event.target.name]: event.target.value
        });
    };

    const handleLoginChange = (event) => {
        setLoginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value
        });
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const data = {
            number: loginFormData.number,
            password: loginFormData.password
        };

        try {
            const response = await axios.post('/api/login/', data);
            console.log('your request is successful: ', response.data);
            onClose(); // Close the modal when the request is successful
        } catch (error) {
            console.log('kuch galat ho gya');
        }
    };

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: SignUpFormData.name,
            number: SignUpFormData.number,
            password: SignUpFormData.password
        };

        try {
            const response = await axios.post('/api/register/', data);
            console.log('your request is successful: ', response.data);
            onClose(); // Close the modal when the request is successful
        } catch (error) {
            console.log('kuch galat ho gya');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg">
                {SignUp && (
                    <div>
                        <div className="flex justify-center text-2xl font-semibold">
                            SignUp Form
                        </div>
                        <form onSubmit={handleSignUpSubmit}>
                            <div className="flex flex-col my-[2vw]">
                                <input
                                    className="h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    value={SignUpFormData.name}
                                    onChange={handleSignUpChange}
                                />
                                <input
                                    className="h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black"
                                    placeholder="Enter Phone Number"
                                    name="number"
                                    value={SignUpFormData.number}
                                    onChange={handleSignUpChange}
                                />
                                <input
                                    className="h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black"
                                    placeholder="Enter Your Password"
                                    name="password"
                                    value={SignUpFormData.password}
                                    onChange={handleSignUpChange}
                                />
                                <input
                                    className="h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black"
                                    placeholder="Confirm Your Password"
                                    name="confirmPassword"
                                    value={SignUpFormData.confirmPassword}
                                    onChange={handleSignUpChange}
                                />
                            </div>
                            <div className="w-full flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <h1>
                            Have an account? <p onClick={openLogin}>Login</p>
                        </h1>
                    </div>
                )}
                {!SignUp && (
                    <div>
                        <div className="flex justify-center text-2xl font-semibold">
                            Login Form
                        </div>
                        <form onSubmit={handleLoginSubmit}>
                            <div className="flex flex-col my-[2vw]">
                                <input
                                    className="h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black"
                                    placeholder="Enter Your Number"
                                    name="number"
                                    value={loginFormData.number}
                                    onChange={handleLoginChange}
                                />
                                <input
                                    className="h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black"
                                    placeholder="Enter Your Password"
                                    name="password"
                                    value={loginFormData.password}
                                    onChange={handleLoginChange}
                                />
                            </div>
                            <div className="w-full flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                                >
                                    LogIn
                                </button>
                            </div>
                        </form>
                        <h1>
                            Don't have an account? <p onClick={openSignUp}>SignUp</p>
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
