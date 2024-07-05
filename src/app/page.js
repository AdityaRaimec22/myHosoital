"use client"
import Navbar from '@/components/Navbar'
import Slider from '../components/slider'
import HospitalCard from '@/components/HospitalCard'
import Cookies from 'universal-cookie'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

  const cookie = new Cookies();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [hospitals, setHospitals] = useState();
  const [patientData, setPatientData] = useState();

  useEffect(() => {
    // Access the stored cookie.
    newFunc();
  }, [cookie]);

  const newFunc = () => {
    const data = cookie.get('data'); // assuming 'data' is the name of your cookie.
    // console.log("The token is: ", data);
    if (data) {
      setUserId(data.user.id);
      setIsLoggedIn(data.user.success);
    }
  }

  useEffect(() => {
    fetchHospitals();
  }, [])

  useEffect(() => {
    if (userId) {
      fetchPatient();
    }
  }, [userId]);

  const fetchHospitals = async () => {
    try {
      const response = await axios.get('/api/Hospitals/');
      // console.log("The hospitals are set to: ", response.data);
      setHospitals(response.data);
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  };

  const fetchPatient = async () => {
    try {
      console.log("The id which is logged in is: ", userId);
      const response = await axios.get(`/api/HospitalNumber/?userId=${userId}`);
      console.log("the patient data is: ", response.data.HospitalNumber);
      setPatientData(response.data.HospitalNumber);
    } catch (error) {
      console.log("some error occured: ", error);
    }
  }

  return (
    <>
      <div className='flex flex-col gap-6'>
        <Navbar isLoggedIn = {isLoggedIn} newFunc = {newFunc} />
        <div className=''>
          <Slider hospitals = {hospitals} />
        </div>
        <div className='p-6'>
          {isLoggedIn && <div>
            <h1 className='text-2xl font-semibold ml-[1vw]'>Your bookings</h1>
            <div className='flex justify-center'>
              {patientData && <div className='py-[1.5vw] px-[7vw] rounded-2xl shadow-xl bg-white grid grid-rows-3 gap-3'>
                <h2 className='text-xl'>Your Number is: {patientData.patientNumber}</h2>
                <h2 className='text-xl'>Patient Name: {patientData.patientName}</h2>
                <h2 className='text-xl'>Your Hospital is: {patientData.HospitalId && patientData.HospitalId.name}</h2>
                <h2 className='text-xl'>Your Hospital is: {patientData.DoctorId && patientData.DoctorId.name}</h2>
                <div className='w-full flex justify-center'>
                  <h1 className='text-3xl font-bold'>{patientData.DoctorId && patientData.DoctorId.CurrentNumber}</h1>
                </div>
                <h1 className='text-xl'>is Current Number</h1>
              </div>}
            </div>
          </div>}
          <h1 className='text-2xl font-semibold mt-6 ml-[1vw]'>Search for Hospital</h1>
          <div>
            <div>
              <input className='h-10 p-2 rounded-xl shadow-lg m-2' placeholder='Enter state Name' />
              <input className='h-10 p-2 rounded-xl shadow-lg m-2' placeholder='Enter city name' />
            <input className='h-10 p-2 rounded-xl shadow-lg m-2' placeholder='Search by hospital name' />
              <button className='rounded-full bg-blue-500 px-5 py-2 font-semibold'>find Hospitals</button>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {hospitals && hospitals.map((ele) => {
              return <HospitalCard hospital = {ele} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
