import React, { useState } from 'react';

const AppointmentCard = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const formSubmit = async (e) => {
    e.preventDefault();

  }

  const [formData, setFormData] = useState(
    {
      patientNumber: '',
      patientName: '',
      patientAge: '',
      patientGender: '',
      DoctorId: '',
      HospitalId: '',
    }
  );

  const handleChange = (event) => {

  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        
      <div className="bg-white p-6 rounded shadow-lg">
      <div className='flex justify-center text-2xl font-semibold'>Appointment Form</div>
      <form onSubmit={formSubmit}>
      <div className='flex flex-col my-[2vw]'>
        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Enter Patient Name' name='name' value={formData.patientName} />
        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Enter Patient Age' name='age' value={formData.patientAge} />
        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Enter Patient gender' name='gender' value={formData.patientGender}/>
        
      </div>
      <div className='w-full flex justify-center'>
        <button
          type='submit'
          onClick={onClose}
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