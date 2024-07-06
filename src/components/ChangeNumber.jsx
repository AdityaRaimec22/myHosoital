import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChangeNumber = ({ isOpen, onClose, DoctorId, CurrentNumber, patients, fetchHospitalData }) => {
  if (!isOpen) return null;

  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState('Aditya Rai');
  const [patientNumber, setpatientNumber] = useState('');
  const [currentNum, setCurrentNumber] = useState(CurrentNumber);
  const [patientAge, setPatientAge] = useState('500');
  const [patinetGender, setPatientGender] = useState('Male');
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const patient = patients.find(ele => ele.patientNumber === CurrentNumber);
    if (patient) {
      setPatientId(patient._id);
      setPatientName(patient.patientName);
      setCurrentNumber(patient.patientNumber);
      setPatientAge(patient.patientAge);
      setPatientGender(patient.patientGender);
      console.log("patient ki userId hai: ", patient);
      setUserId(patient.userId);
    }
  }, [CurrentNumber, patients]);

  useEffect(() => {
    console.log("the userId is: ", userId);
    if (userId) {
      findNumberFunc();
    }
  }, [userId]);

  const findNumberFunc = async () => {
    console.log("I am fired");
    try {
      const response = await axios.get(`/api/login/?id=${userId}`);
      console.log("The user data is: ", response.data[0]);
      setpatientNumber(response.data[0].number);
    } catch (error) {
      console.log("The error is: ", error);
    }
  }
  console.log("the userId is: ", userId);

  const changeNumber = async () => {
    console.log("the current number is: ", currentNum);
    const newNumber = currentNum + 1;
    console.log("the current number is: ", newNumber);
    const patient = patients.find(ele => ele.patientNumber === newNumber);
    console.log("the patient is: ", patient);
    if (patient) {
      console.log("I am here");
      try {
        await axios.put('/api/Doctor/', { id: DoctorId, CurrentNumber: newNumber });
        setPatientId(patient._id);
        setPatientName(patient.patientName);
        setCurrentNumber(patient.patientNumber);
        setPatientAge(patient.patientAge);
        setPatientGender(patient.patientGender);
        setUserId(patient.userId);
        fetchHospitalData();
      } catch (error) {
        console.log("the error is: ", error);
      }
    } else {
      console.log("No I am here")
      setNoNums(true);
      setTimeout(() => {
        setNoNums(false);
      }, 2000);
    }
  }

  const [noNums, setNoNums] = useState(false);

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
            <h1 className='text-xl'>Current Number: {currentNum}</h1>
            <h1 className='text-xl'>Patient Age: {patientAge}</h1>
            <h1 className='text-xl'>Patient Gender: {patinetGender}</h1>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <button
            onClick={changeNumber}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Next Number
          </button>
        </div>
        {noNums && <div>This was the last Number, no next Number</div>}
      </div>
    </div>
  );
};

export default ChangeNumber;
