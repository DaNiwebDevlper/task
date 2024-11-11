import { GoArrowUpLeft } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className='min-h-[70px] w-full flex justify-between items-center container'>
            {/* logo  */}
            <section>
                <Link to="/">
                    <h1 className='text-2xl font-bold mb-1'>Logo</h1>
                </Link>
            </section>
            <section className="flex gap-x-5">
                {/* get started button */}
                <Link to="/" className='text-sm border px-8 py-1 border-black/50 flex items-center gap-x-1 hover:bg-black hover:text-white'><GoArrowUpLeft size={18} className="mt-1" /> Get Started</Link>

                {/* search & Menu button */}
                <div className="flex ">
                    <div className="border p-2 border-black/50 hover:bg-black hover:text-white">

                        <IoSearchOutline size={20} />
                    </div>
                    <div className="border p-2 border-black/50 hover:bg-black hover:text-white">

                        <RxHamburgerMenu size={20} />
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar
