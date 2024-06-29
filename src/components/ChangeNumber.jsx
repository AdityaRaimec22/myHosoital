import React, { useState } from 'react';

const ChangeNumber = ({ isOpen, onClose, DoctorId }) => {
  if (!isOpen) return null;

  const [patientName, setPatientName] = useState('Aditya Rai');
  const [patientNumber, setpatientNumber] = useState('7974660375');
  const [currentNumber, setCurrentNumber] = useState('40');
  const [patientAge, setPatientAge] = useState('500');
  const [patinetGender, setPatientGender] = useState('Male');

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded shadow-lg">
        <button 
          className='absolute top-2 right-2 p-[0.3vw] border border-black rounded-xl shadow-xl text-xl' 
          onClick={onClose}
        >
          X
        </button>
        <div className='flex justify-center text-2xl font-semibold'>Change Number</div>
      
        <div className='flex flex-col my-[2vw]'>
          <div className='grid grid-cols-1 gap-3'>
            <h1 className='text-xl'>Patient Name: {patientName}</h1>
            <h1 className='text-xl'>Patient Number: {patientNumber}</h1>
            <h1 className='text-xl'>Current Number: {currentNumber}</h1>
            <h1 className='text-xl'>Patient Age: {patientAge}</h1>
            <h1 className='text-xl'>Patient Gender: {patinetGender}</h1>
          </div>
        </div>
        
        <div className='w-full flex justify-center'>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Next Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeNumber;
