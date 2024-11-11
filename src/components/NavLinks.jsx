import React from 'react'
import { Link } from 'react-router-dom'
const navLinks = [
    { name: "AIP", path: "/aip" },
    { name: "Foundary", path: "/aip" },
    { name: "Gotham", path: "/aip" },
    { name: "Apollo", path: "/aip" },
    { name: "AIP Bootcamp", path: "/aip" },
    { name: "AIP for Developers", path: "/aip" },
]
const NavLinks = () => {

    return (
        <div className='text-md text-gray-500 min-h-[60px] items-center flex gap-x-5 container flex-wrap'>
            {navLinks.map((links) => (
                <Link to={links.path}>
                    {links.name}
                </Link>

            ))}

        </div>
    )
}

export default NavLinks
