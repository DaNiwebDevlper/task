import React from 'react'
import Services from './Services'
import Category from './Catagory'

const Home = () => {
    return (
        <>
            <div className='sm:min-h-screen container'>
                <h1 className='font-semibold sm:text-7xl text-3xl my-[50px]'>Get AI Into Operations</h1>
                <div className="flex justify-center items-center">
                    <img src="/plantir.png" alt="plantir" className=' w-full sm:w-[1300px] sm:h-[500px] object-cover' />
                </div>
                <div className="w-full flex justify-end items-center">
                    <input type="text" placeholder='Explore AIP now' className='border-b border-black sm:w-[300px] my-6 text-black focus:ring-0 outline-none py-2' />
                </div>
            </div>

            {/* services pages */}
            <Services />
            {/* category page */}
            <Category />
        </>
    )
}

export default Home
