"use client"
import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import axios from "axios";

const RegisterHospitals = () => {
    const [FacilityArray, setFacilityArray] = useState([]);

    const [doctorsArray, setDoctorsArray] = useState([
        {
            name: "Salman Khan",
            role: "Driver"
        },
        {
            name: "Adarsh Lodhi",
            role: "Chutiya"
        }
    ]);

    const [formData, setFormData] = useState({
        name: '',
        state: '',
        city: '',
        pinCode: '',
        address: '',
        established: '',
        img: null
    });

    const [docFormData, setDocFormData] = useState({
        name: '',
        Qualification: '',
        Age: '',
        Gender: '',
        Role: '',
        img: null
    });

    const [inputValue, setInputValue] = useState('');

    const appendArray = () => {
        setFacilityArray((prevArray) => [...prevArray, inputValue]);
        setInputValue(""); // Clear the input field after appending the value
    };

    const removeFromArray = (value) => {
        setFacilityArray((prevArray) => prevArray.filter((ele) => ele !== value));
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        console.log(formData);
    };

    const docHandleChange = (event) => {
        setDocFormData({
            ...docFormData,
            [event.target.name]: event.target.value
        });
        console.log(docFormData);
    };

    const handleFacilityInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFileChange = (event) => {
        setFormData({
            ...formData,
            img: event.target.files[0]
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("me toh chl gya bhai");
    
        // Create a JSON object with the form data
        const data = {
            name: formData.name,
            state: formData.state,
            city: formData.city,
            pinCode: formData.pinCode,
            address: formData.address,
            established: formData.established,
            img: formData.img,
            facilities: FacilityArray.map(facility => ({ name: facility }))
        };
    
        console.log("the data is: ", data);
    
        try {
            const response = await axios.post('/api/Hospitals', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("aapki request successful hui", response.data);
        } catch (error) {
            console.error("error aa gya: ", error);
        }
    };

    const handleDocSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: docFormData.name,
            Qualification: docFormData.Qualification,
            Age: docFormData.Age,
            Gender: docFormData.Gender,
            Role: docFormData.Role,
            img: docFormData.img,
        };

        console.log("the data is: ", data);

        try {
            const response = await axios.post('/api/Doctor', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("aapki request successful hui", response.data);
        } catch (error) {
            console.error("error aa gya: ", error);
        }
    }

    return (
        <main>
            <Navbar />
            <div className="flex justify-center w-full h-full">
                <div className="flex flex-col justify-center m-[2vw] w-[46%]">
                    <div className="w-full flex justify-center m-[1vw]">
                        <h1 className="text-2xl font-semibold bg-slate-400 p-[0.5vw] rounded-lg shadow-lg">Register Your Hospital</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            name="name"
                            className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black'
                            placeholder='Enter Hospital Name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div>
                            <input
                                name="state"
                                className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black'
                                placeholder='State'
                                value={formData.state}
                                onChange={handleChange}
                            />
                            <input
                                name="city"
                                className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black'
                                placeholder='City'
                                value={formData.city}
                                onChange={handleChange}
                            />
                            <input
                                name="pinCode"
                                className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black'
                                placeholder='Pin Code'
                                value={formData.pinCode}
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            name="address"
                            className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black'
                            placeholder='Full Address'
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <div>
                            <input
                                name="established"
                                className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black'
                                placeholder='Established In Year'
                                value={formData.established}
                                onChange={handleChange}
                            />
                            <input
                                className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black bg-white'
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="flex w-full">
                            <input
                                onChange={handleFacilityInputChange}
                                value={inputValue}
                                className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black w-[80%]'
                                placeholder='Enter all the Facilities one by one'
                            />
                            <button
                                type="button"
                                onClick={appendArray}
                                className="bg-blue-400 rounded-lg px-[1vw] py-0 h-10 mt-3 font-semibold">
                                Add Facility
                            </button>
                        </div>
                        <div className="flex flex-wrap">
                            {FacilityArray.map((ele, index) => (
                                <div key={index} className="flex bg-slate-300 m-2 py-1 px-2 rounded-lg shadow-lg">
                                    <h1 className="text-lg font-semibold">{ele}</h1>
                                    <button
                                        type="button"
                                        onClick={() => { removeFromArray(ele) }}
                                        className="bg-white p-1 rounded-lg ml-3 cursor-pointer">
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button type="submit" className="bg-green-500 text-white p-2 rounded-lg shadow-lg m-3">
                            Register Hospital
                        </button>
                    </form>
                    <form onSubmit={handleDocSubmit}>
                    <div className="mt-5 bg-white rounded-2xl shadow-2xl border border-black p-[1vw]">
                        <div className="flex flex-col">
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black bg-white border border-black' name="name" placeholder='Enter Doctor Name' value={docFormData.name} onChange={docHandleChange} />
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black bg-white border border-black' placeholder='Enter Doctor`s education qualification' name="Qualification" value={docFormData.Qualification} onChange={docHandleChange}/>
                        </div>
                        <div className="grid grid-cols-3">
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black border border-black' name="Age" placeholder='Doctor`s Age' value={docFormData.Age} onChange={docHandleChange}/>
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black border border-black' name="Gender" placeholder='Gender' value={docFormData.Gender} onChange={docHandleChange} />
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black border border-black' name="Role" placeholder='Role' value={docFormData.Role} onChange={docHandleChange}/>
                        </div>
                        <div>
                            <label className="text-lg font-semibold ml-[1vw]">Doctor's Image</label>
                            <input className='h-10 p-2 rounded-xl shadow-lg m-3 placeholder-black bg-white w-[76%] border border-black' type="file" accept="image/*" name="img" placeholder='Upload Doctor Image' onChange={handleFileChange} />
                        </div>
                        <div className="w-full flex justify-center m-3">
                            <button className="bg-blue-400 text-lg p-[0.5vw] rounded-lg shadow-xl font-semibold">Add Doctor</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default RegisterHospitals;
