import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'universal-cookie';

const Login = ({ isOpen, onClose, newFunc }) => {
    if (!isOpen) return null;

    const [SignUp, setSignUp] = useState(false);
    const [authToken, setAuthToken] = useState('');
    const [gotData, setGotData] = useState(null);

    const cookie = new Cookies();

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
        const data = { number: loginFormData.number, password: loginFormData.password };

        cookie.set('hello', "hello my name is king khan");

        try {
            const response = await axios.post('/api/login/', data);
            console.log('Response:', response); // Log the full response
            const receivedData = response.data.data;
            const receivedAuthToken = response.data.authToken;
            
            if (receivedAuthToken) {
                setGotData(receivedData);
                setAuthToken(receivedAuthToken);
                console.log('authToken:', receivedAuthToken);
                
                // Ensure cookies are set after the state is updated
                cookie.set('authToken', receivedAuthToken, {
                    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days expiration
                    path: '/', // Ensure the cookie is available throughout the site
                    secure: true, // Uncomment if using HTTPS
                    sameSite: 'None' // Ensure the cookie is sent for cross-site requests
                });
                
                cookie.set('data', receivedData);
                console.log("The data that I wanted is: ", cookie.get('data'));
                console.log('AuthToken set:', cookie.get('hello')); // Verify the cookie is set
                console.log("The authToken that I wanted is: ", cookie.get('authToken'));
                
                onClose(); // Close the modal when the request is successful
                newFunc();
            } else {
                console.log('AuthToken not found in response');
            }
        } catch (error) {
            console.log('kuch galat ho gya', error);
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
            const receivedData = response.data.data;
            const receivedAuthToken = response.data.authToken;
            if (receivedAuthToken) {
                setGotData(receivedData);
                setAuthToken(receivedAuthToken);
                console.log('authToken:', receivedAuthToken);
                
                // Ensure cookies are set after the state is updated
                cookie.set('authToken', receivedAuthToken, {
                    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days expiration
                    path: '/', // Ensure the cookie is available throughout the site
                    secure: true, // Uncomment if using HTTPS
                    sameSite: 'None' // Ensure the cookie is sent for cross-site requests
                });
                
                cookie.set('data', receivedData);
                console.log("The data that I wanted is: ", cookie.get('data'));
                console.log('AuthToken set:', cookie.get('hello')); // Verify the cookie is set
                console.log("The authToken that I wanted is: ", cookie.get('authToken'));
                
                onClose(); // Close the modal when the request is successful
                newFunc();
            } else {
                console.log('AuthToken not found in response');
            }
        } catch (error) {
            console.log('kuch galat ho gya', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-6 rounded shadow-lg">
                <button
                    className="absolute top-2 right-2 p-1 text-xl font-bold text-black bg-gray-200 rounded-full hover:bg-gray-300"
                    onClick={onClose}
                >
                    &times;
                </button>
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
                                     type="password"
                                    value={SignUpFormData.password}
                                    onChange={handleSignUpChange}
                                />
                                <input
                                    className="h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black"
                                    placeholder="Confirm Your Password"
                                    name="confirmPassword"
                                     type="password"
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
                            Have an account? <p onClick={openLogin} className="text-blue-500 cursor-pointer hover:underline">Login</p>
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
                                     type="password"
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
                            Don't have an account? <p onClick={openSignUp} className="text-blue-500 cursor-pointer hover:underline">SignUp</p>
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
