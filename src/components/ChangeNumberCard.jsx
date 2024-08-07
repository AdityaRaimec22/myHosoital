import React, {useState} from "react";
import AppointmentCard from "./AppointmentCard";
import ChangeNumber from "./ChangeNumber";
import axios from "axios";

const ChangeNumberCard = ({doctor, fetchHospitalData}) => {

    console.log(doctor);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="bg-white relative shadow-xl my-6 mr-6">
            <div className="relative z-10">
                <div className="relative">
                    <img src="/Images/Rectangle2.png" alt="" className="w-full h-auto relative" />
                    <div className="absolute top-2 left-0 right-0 flex flex-col justify-end p-4">
                        <div className="flex justify-between relative">
                            <div>
                            <div className="text-black bg-slate-100 p-1 rounded">Top Rated</div>
                            </div>
                            <div>
                            <img className="h-[4vw] mb-2" src="/Images/rating.png" alt="Helllo" />
                            </div>
                            <img
                                className="absolute right-3 2xl:top-16 xl:top-12 top-14 z-20 border border-red-400 w-24 h-24 rounded-full"
                                src="https://getwallpapers.com/wallpaper/full/a/2/f/1092972-nature-background-hd-2560x1600-for-tablet.jpg"
                                alt=""
                            />
                        </div>
                        <div className="text-2xl font-semibold mt-[1vw]">{doctor.name}</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="px-6 mt-[1vw]">
                    <div className="grid grid-cols-2 m-[1vw]">
                        <div>
                            <h1 className="w-[70%] font-semibold text-lg ">Qualification: {doctor.Qualification}</h1>
                            <h1 className="w-full text-lg font-semibold rounded">Age: {doctor.Age}</h1>
                            <h1 className="w-full text-lg font-semibold rounded">Gender: {doctor.Gender}</h1>
                        </div>
                        <div>
                            <h1 className="w-full font-semibold text-lg rounded">Role: {doctor.Role}</h1>
                            <h1 className="w-full font-semibold text-lg rounded">Current Number of Doctor: {doctor.CurrentNumber}</h1>
                        </div>
                    </div>
                    <div className="w-[100%] flex justify-center">
                        <button onClick={togglePopup} className="bg-blue-400 p-[0.5vw] rounded-lg">Change Number</button>
                    </div>
                    <ChangeNumber isOpen={isPopupOpen}
                        onClose={togglePopup} DoctorId={doctor._id} CurrentNumber={doctor.CurrentNumber} patients={doctor.Patients} fetchHospitalData = {fetchHospitalData}/>
                    <hr className="my-4 w-full" />
                    <div className="grid grid-cols-3 bg-slate-200 rounded-xl py-2 px-[1vw] mb-3">
                        <h1 className="text-sm font-semibold flex flex-wrap">Doctors 12</h1>
                        <h1 className="text-sm font-semibold flex flex-wrap">Experience 13 years</h1>
                        <h1 className="text-sm font-semibold flex flex-wrap">Reviews 14</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeNumberCard;