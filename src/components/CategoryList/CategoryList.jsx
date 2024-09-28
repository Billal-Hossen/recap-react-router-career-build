import React from 'react'
import accounts from '../../assets/icons/accounts.png'
import chip from '../../assets/icons/chip.png'
import marketing from '../../assets/icons/marketing.png'
import creative from '../../assets/icons/creative.png'
export default function CategoryList() {
  return (
    <div className="mb-8">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Job Category List</h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you need. Its your future
          </p>

        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <div className='bg-gray-200 px-3 py-4 rounded-lg '>
          <div className='ml-4 space-y-3'>
            <div className='bg-gray-300 p-4 rounded-lg w-20 '>
              <img className='' src={accounts} alt="" />
            </div>
            <h2 className='text-2xl font-semibold'>Account & Finance</h2>
            <p className='text-xl font-thin'>300 Jobs Available</p>
          </div>
        </div>
        <div className='bg-gray-200 px-3 py-4 rounded-lg '>
          <div className='ml-4 space-y-3'>
            <div className='bg-gray-300 p-4 rounded-lg w-20 mt-2'>
              <img className='' src={creative} alt="" />
            </div>
            <h2 className='text-2xl font-semibold'>Creative Design</h2>
            <p className='text-xl font-thin'>100+ Jobs Available</p>
          </div>
        </div>
        <div className='bg-gray-200 px-3 py-4 rounded-lg '>
          <div className='ml-4 space-y-3'>
            <div className='bg-gray-300 p-4 rounded-lg w-20 mt-2'>
              <img className='' src={marketing} alt="marketing" />
            </div>
            <h2 className='text-2xl font-semibold'>Marketing & Sales</h2>
            <p className='text-xl font-thin'>150 Jobs Available</p>
          </div>
        </div>
        <div className='bg-gray-200 px-3 py-4 rounded-lg '>
          <div className='ml-4 space-y-3'>
            <div className='bg-gray-300 p-4 rounded-lg w-20 mt-2'>
              <img className='' src={chip} alt="marketing" />
            </div>
            <h2 className='text-2xl font-semibold'>Engineering Job</h2>
            <p className='text-xl font-thin'>224 Jobs Available</p>
          </div>
        </div>


      </div>
    </div>
  )
}
