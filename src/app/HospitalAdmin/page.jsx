"use client";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import ChangeNumberCard from "@/components/ChangeNumberCard";
import axios from "axios";

const Hospital = () => {
    const HospitalId = `667d3c792f69332028522788`;
    const [HospitalData, setHospitalData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchHospitalData();
    }, []);

    const fetchHospitalData = async () => {
        try {
            const response = await axios.get(`/api/Hospitals/?id=${HospitalId}`);
            console.log("API Response: ", response.data);
            setHospitalData(response.data);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (!HospitalData) return <p>No data available</p>;

    return (
        <main>
            <Navbar />
            <div className="flex flex-col gap-4 p-4 bg-slate-200">
                <div className="md:flex px-4 leading-none max-w-full mt-6 bg-blue-100 rounded-md">
                    <div className="flex-none ">
                        <img
                            src="https://getwallpapers.com/wallpaper/full/a/2/f/1092972-nature-background-hd-2560x1600-for-tablet.jpg"
                            alt="pic"
                            className="h-72 w-72 rounded-3xl shadow-2xl transform -translate-y-4 border-4 border-gray-300 mr-12"
                        />
                    </div>

                    <div className="flex-col text-black p-2">
                        <p className="pt-4 text-2xl font-bold mb-3">{HospitalData.name}</p>
                        <p className="mb-4">{HospitalData.address}</p>
                        <div className="bg-white w-full py-0.5 mb-8 rounded-2xl"></div>
                        <div className="text-md flex justify-between px-4 my-2">
                            <span className="font-bold">Higher Education | address | 1000 followers | 20000 alumni</span>
                            <span className="font-bold"></span>
                        </div>

                        <p className="hidden md:block px-4 my-4 text-sm text-left">This is my about page</p>

                        <p className="flex text-md px-4 my-2">
                            Est. 1864
                            <span className="font-bold px-2">|</span>
                            A Grade
                        </p>

                        <div className="text-xs">
                            <button
                                type="button"
                                className="border bg-slate-300 border-blue-400 text-white-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white focus:outline-none focus:shadow-outline"
                            >
                                Tamatar
                            </button>
                        </div>
                    </div>
                    <img
                        className="absolute right-3 mt-6 mr-4 z-20 border border-red-400 w-[13vw] h-[13vw] rounded-full"
                        src="https://getwallpapers.com/wallpaper/full/a/2/f/1092972-nature-background-hd-2560x1600-for-tablet.jpg"
                        alt=""
                    />
                </div>
                <h1 className="text-2xl font-semibold bg-white p-2 rounded-lg shadow-2xl mt-2">Our Doctors</h1>
                <div className="grid grid-cols-3 gap-4">
                    {HospitalData.Doctors && HospitalData.Doctors.map((ele) => (
                        <ChangeNumberCard key={ele._id} doctor={ele} fetchHospitalData = {fetchHospitalData} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Hospital;
