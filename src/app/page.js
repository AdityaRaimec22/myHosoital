"use client"
import Navbar from '@/components/Navbar'
import Slider from '../components/slider'
import HospitalCard from '@/components/HospitalCard'

export default function Home() {
  return (
    <>
      <div className='flex flex-col gap-6'>
        <Navbar />
        <div className=''>
          <Slider />
        </div>
        <div className='p-6'>
          <h1 className='text-2xl font-semibold ml-[1vw]'>Your bookings</h1>
          <div className='flex justify-center'>
            <div className='py-[1.5vw] px-[7vw] rounded-2xl shadow-xl bg-white grid grid-rows-3 gap-3'>
              <h2 className='text-xl'>Your Number is: 250</h2>
              <h2 className='text-xl'>Patient Name: Salman Khan</h2>
              <h2 className='text-xl'>Your Hospital is: Deengri</h2>
              <div className='w-full flex justify-center'>
                <h1 className='text-3xl font-bold'>200</h1>
              </div>
              <h1 className='text-xl'>is Current Number</h1>
            </div>
          </div>
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
            <HospitalCard/>
          </div>
        </div>
      </div>
    </>
  )
}
