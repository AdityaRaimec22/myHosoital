import React, {useState} from "react";
import AppointmentCard from "./AppointmentCard";
import ChangeNumber from "./ChangeNumber";

const ChangeNumberCard = () => {

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
                            <div className="text-black bg-slate-100 p-1 rounded">Top Rated</div>
                            <img src="/Images/Group_stars.svg" alt="Helllo" />
                            <img
                                className="absolute right-3 2xl:top-16 xl:top-12 top-14 z-20 border border-red-400 w-24 h-24 rounded-full"
                                src="https://getwallpapers.com/wallpaper/full/a/2/f/1092972-nature-background-hd-2560x1600-for-tablet.jpg"
                                alt=""
                            />
                        </div>
                        <div className="text-2xl font-semibold mt-[1vw]">Lodhi Patel</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="px-6 mt-[1vw]">
                    <div className="flex flex-col rounded ">
                        <h1 className="w-[70%]">Dhanare Colony k baju me hi hai</h1>
                        <h1 className="w-full rounded">Madhya Pradesh, Narsinghpur 487001</h1>
                    </div>
                    <div className="flex flex-wrap my-[1vw]">
                        <div className="bg-slate-400 p-[0.3vw] rounded-lg shadow-lg">
                            <h1 className="font-semibold">Facilities</h1>
                        </div>
                    </div>
                    <div className="w-[100%] flex justify-center">
                        <button onClick={togglePopup} className="bg-blue-400 p-[0.5vw] rounded-lg">Change Number</button>
                    </div>
                    <ChangeNumber isOpen={isPopupOpen}
                        onClose={togglePopup} DoctorId={"667a84b851ef8bd5cec3958c"}/>
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