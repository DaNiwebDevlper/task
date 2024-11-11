import React from 'react'
import ServiceCard from '../components/ServiceCard'
const servicesData = [
    { heading: "AIP", desc: "Get AI Into Operations" },
    { heading: "Foundary", desc: "Operating System for the Modern Enterprise" },
    { heading: "Gotham", desc: "Operating System for Global Decision Making" },
    { heading: "Apollo", desc: "Operating System for Continuous Delivery" },

]
const Services = () => {
    return (
        <main className='container w-full my-9'>
            <div className="flex w-full justify-between sm:min-h-[150px] border-t border-black sm:items-center border-b sm:flex-row flex-col gap-y-6 py-9">
                <h1 className='sm:text-5xl text-3xl'>Platforms</h1>
                <p className='sm:text-xl text-md max-w-[400px] leading-snug'>Foundational Software of Tomorrow. Delivered Today.</p>

            </div>
            <div className="">
                {
                    servicesData.map((data) => (
                        <ServiceCard heading={data.heading} desc={data.desc} />
                    ))
                }
            </div>
        </main>
    )
}

export default Services
