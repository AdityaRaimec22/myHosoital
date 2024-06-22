"use client"
import React, { useState } from "react"
import Navbar from "@/components/Navbar"

const RegisterHospitals = () => {

    const [FacilityArray, setFacilityArray] = useState([
        "Dentist",
        "Orthopedician",
        "neuro surgeon",
        "compounder",
    ]);

    const [doctorsArray, setDoctorsArray] = useState([
        {
            name: "Salman Khan",
            role: "Driver"
        },
        {
            name: "Adarsh Lodhi",
            role: "Chutiya"
        }
    ])

    const [inputValue, setInputValue] = useState('');

    const appendArray = () => {
        setFacilityArray((prevArray) => [...prevArray, inputValue]);
        setInputValue(""); // Clear the input field after appending the value
    };

    const removeFromArray = (value) => {
        setFacilityArray((prevArray) => prevArray.filter((ele) => ele !== value));
    };

    const HandleChange = (event) => {
        setInputValue(event.target.value);
    }

    const appendDoctorsArray = () => {
        
    };

    const removeFromDoctorsArray = (value) => {
        
    };

    return (
        <main>
            <Navbar/>
            <div className="flex justify-center w-full h-full">
                <div className="flex flex-col justify-center m-[2vw] w-[46%]">
                    <div className="w-full flex justify-center m-[1vw]">
                        <h1 className="text-2xl font-semibold bg-slate-400 p-[0.5vw] rounded-lg shadow-lg ">Register Your Hospital</h1>
                    </div>
                    <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black' placeholder='Enter Hospital Name' />
                    <div>
                        <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black' placeholder='State' />
                        <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black' placeholder='City' />
                        <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black' placeholder='Pin Code'/>
                    </div>
                    <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black' placeholder='Full Address'/>
                    <div>
                        <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black' placeholder='Established In Year' />
                        <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black bg-white' type="file" accept="image/*" placeholder='Upload Hospital Image'/>
                    </div>
                    <div className="flex w-full">
                        <input onChange={HandleChange} value={inputValue} className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black w-[80%]' placeholder='Enter all the Facilities one by one'/>
                        <button onClick={appendArray} className="bg-blue-400 rounded-lg px-[1vw] py-0 h-10 mt-3 font-semibold">Add Facility</button>
                    </div>
                    
                    <div className="flex flex-wrap">
                        {FacilityArray.map((ele) => {
                            return <div className="flex bg-slate-300 m-2 py-1 px-2 rounded-lg shadow-lg">
                                <h1 className="text-lg font-semibold">{ele}</h1> <button onClick={()=> {removeFromArray(ele)}} className="bg-white p-1 rounded-lg ml-3 cursor-pointer">X</button>
                            </div>
                        })}
                    </div>
                    <div className="flex justify-center m-[1vw]">
                        <h1 className="text-lg font-semibold bg-slate-400 p-[1vw] rounded-lg shadow-xl">Add Doctors</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {doctorsArray.map((ele) => {
                            return <div className="bg-white rounded-lg shadow-xl p-[1vw]">
                                <div className="flex justify-between">
                                    <img className="h-10" src="/Images/medical-assistance.png" alt="" />
                                    <h1 className="text-lg font-semibold mt-2 mr-2">Dr. {ele.name}</h1>
                                </div>
                                <div className="flex justify-center w-full">
                                    <h1 className="text-lg font-semibold">{ele.role}</h1>
                                </div>
                                <div className="flex justify-center w-full m-2">
                                    <button className="bg-blue-400 p-[0.5vw] rounded-lg shadow-2xl border-black border hover:bg-white">Remove</button>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="mt-5 bg-white rounded-2xl shadow-2xl border border-black p-[1vw]">
                        <div className="flex flex-col">
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black bg-white border border-black' placeholder='Enter Doctor Name'/>
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black bg-white border border-black' placeholder='Enter Doctor`s education qualification'/>
                        </div>
                        <div className="grid grid-cols-3">
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black border border-black' placeholder='Doctor`s Age' />
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black border border-black' placeholder='Gender' />
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black border border-black' placeholder='Role'/>
                        </div>
                        <div>
                            <label className="text-lg font-semibold ml-[1vw]">Doctor's Image</label>
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black bg-white w-[76%] border border-black' type="file" accept="image/*" placeholder='Upload Hospital Image'/>
                        </div>
                        <div className="w-full flex justify-center m-3">
                            <button className="bg-blue-400 text-lg p-[0.5vw] rounded-lg shadow-xl font-semibold">Add Doctor</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RegisterHospitals;