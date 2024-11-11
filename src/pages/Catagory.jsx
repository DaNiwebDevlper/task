import React from 'react'
import { Link } from 'react-router-dom'
const categoryData = [
    {
        heading: "Palantir Ranked No. 1 Vendor in AI, Data Science, and Machine Learning",
        desc: " “Palantir has demonstrated its clear leadership in AI on a global scale from both a market share and revenue perspective...we’re excited to see how Palantir continues to separate itself from the competition by solving the toughest business challenges out there with their platforms.”"
    },
    {
        heading: "Palantir Ranked No. 1 in Worldwide Artificial Intelligence Software Study in Market Share and Revenue",
        desc: " “Palantir has demonstrated its clear leadership in AI on a global scale from both a market share and revenue perspective...we’re excited to see how Palantir continues to separate itself from the competition by solving the toughest business challenges out there with their platforms.”"
    },
    {
        heading: "Palantir Named a Leader in AI/ML Platforms by Independent Research Firm",
        desc: " “Palantir has demonstrated its clear leadership in AI on a global scale from both a market share and revenue perspective...we’re excited to see how Palantir continues to separate itself from the competition by solving the toughest business challenges out there with their platforms.”"
    },
]
const Category = () => {
    return (
        <div className="min-h-screen container my-9">
            <h1 className='smLtext-5xl font-semibold text-3xl sm:my-[100px] my-9'>Category-Defining Technology</h1>
            <div className=' flex flex-wrap flex-col sm:flex-row gap-7'>
                {categoryData.map((data) => (
                    <div className="flex-1 space-y-5">
                        <h2 className='text-xl font-medium'>{data.heading}</h2>
                        <p className='text-md text-gray-500'>{data.desc}</p>
                        <Link to="/" className='border-b py-1 my-5 border-black'>
                            view the full report
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category
