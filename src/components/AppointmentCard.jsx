import axios from 'axios';
import React, { useState } from 'react';

const AppointmentCard = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    patientNumber: '',
    patientName: '',
    patientAge: '',
    patientGender: '',
    DoctorId: '',
    HospitalId: '',
  });

  const formSubmit = async (e) => {
    e.preventDefault();
    const data = {
      patientNumber: formData.patientNumber || '30',
      patientName: formData.patientName,
      patientAge: formData.patientAge,
      patientGender: formData.patientGender,
      DoctorId: formData.DoctorId || '667a84b851ef8bd5cec3958c',
      HospitalId: formData.HospitalId || '667a832a0e6d7f5f9a253dad',
    };

    try {
      const response = await axios.post('/api/HospitalNumber', data);
      console.log('aapki request safal hui: ', response.data);
      onClose(); // Close the modal when the request is successful
    } catch (error) {
      console.log('kuch galat ho gaya', error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="flex justify-center text-2xl font-semibold">
          Appointment Form
        </div>
        <form onSubmit={formSubmit}>
          <div className="flex flex-col my-[2vw]">
            <input
              className="h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black"
              placeholder="Enter Patient Name"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
            />
            <input
              className="h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black"
              placeholder="Enter Patient Age"
              name="patientAge"
              value={formData.patientAge}
              onChange={handleChange}
            />
            <input
              className="h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black"
              placeholder="Enter Patient Gender"
              name="patientGender"
              value={formData.patientGender}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentCard;
