import React from 'react';

const AppointmentCard = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        
      <div className="bg-white p-6 rounded shadow-lg">
      <div className='flex justify-center text-2xl font-semibold'>Appointment Form</div>
      
      <div className='flex flex-col my-[2vw]'>
        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Enter Patient Name' />
        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Enter Patient Age' />
        <input className='h-8 p-2 rounded-xl bg-slate-300 shadow-lg border m-2 placeholder-black' placeholder='Enter Patient gender' />
        
      </div>
        <div className='w-full flex justify-center'>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Confirm Appointment
        </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;