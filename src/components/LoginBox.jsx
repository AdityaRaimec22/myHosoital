import React, { useState } from 'react';

const Login = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [SignUp, setSignUp] = useState(false);

    const openSignUp = () => {
        setSignUp(true);
    }

    const openLogin = () => {
        setSignUp(false);
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

            <div className="bg-white p-6 rounded shadow-lg">
                {SignUp && <div><div className='flex justify-center text-2xl font-semibold'>SignUp Form</div>

                    <div className='flex flex-col my-[2vw]'>
                        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Enter Your Name' />
                        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Enter Phone Number' />
                        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Enter Your Password' />
                        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Confirm Your Password' />
                    </div>
                    <div className='w-full flex justify-center'>
                        <button
                            onClick={onClose}
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            Sign Up
                        </button>
                    </div>
                    <h1>Have an account? <p onClick={openLogin} >Login</p></h1></div>}
                {!SignUp && <div><div className='flex justify-center text-2xl font-semibold'>Login Form</div>

                    <div className='flex flex-col my-[2vw]'>
                        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Enter Your Number' />
                        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Enter Your Password' />
                    </div>
                    <div className='w-full flex justify-center'>
                        <button
                            onClick={onClose}
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            LogIn
                        </button>
                    </div>
                    <h1>Don't have an account? <p onClick={openSignUp} >SignUp</p></h1></div>}
            </div>
        </div>
    );
};

export default Login;