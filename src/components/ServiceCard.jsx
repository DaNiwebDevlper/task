import React from 'react'
import { FiCornerDownRight } from 'react-icons/fi'


const ServiceCard = ({ heading, desc }) => {
    return (
        <div className='sm:min-h-[150px] py-5 border-b border-black flex sm:justify-between sm:items-center flex-col sm:flex-row gap-y-5'>
            <div className="flex items-center gap-1">
                <FiCornerDownRight size={25} />
                <h2 className='text-2xl'>{heading}</h2>
            </div>
            <div className="sm:w-[60%] flex justify-between sm:items-center flex-col sm:flex-row ml-9 sm:ml-0">
                <p className='text-lg'>{desc}</p>
                <input type="text" className='w-[150px] border-b border-black outline-none' placeholder='Explore AIP' />
            </div>
        </div>
    )
}

export default ServiceCard
