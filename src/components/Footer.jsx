import { IoLogoYoutube, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const socialLinks = [
    { path: "/", icon: <IoLogoYoutube size={22} />, color: "text-red-600" },
    { path: "/", icon: <IoLogoLinkedin size={25} />, color: "text-blue-700" },
    { path: "/", icon: <FaXTwitter /> },
    { path: "/", icon: <IoLogoGithub size={23} /> },
];

const Footer = () => {
    return (
        <footer className="border-t py-10 bg-white">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <section>
                    <ul className="space-y-2 ">
                        <li className='flex gap-4 items-center'>
                            {socialLinks.map((links, index) => (
                                <Link to={links.path} key={index} className={` text-xl`}>
                                    {links.icon}
                                </Link>
                            ))}
                        </li>
                        <li>
                            <Link to="tel:+1234567890">+1234567890</Link>
                        </li>
                        <li>
                            <Link to="mailto:info@company.com">info@company.com</Link>
                        </li>
                    </ul>
                </section>
                {/* Capabilites Section */}
                <section>
                    <h3 className="text-lg  mb-4 text-gray-500">Capabilites</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/about">
                                Custome Software
                            </Link>
                        </li>
                        <li>
                            <Link href="/career">
                                Web Application
                            </Link>
                        </li>
                        <li>
                            <Link href="/press" >
                                CMS Development
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                SaaS & E-commerce
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                Cloud Operations
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                AI integration
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                AI Chatbots
                            </Link>
                        </li>

                    </ul>
                </section>

                {/* Case Study Section */}
                <section>
                    <h3 className="text-lg text-gray-500 mb-4">Case Studies</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/services/web-development" className="">
                                Tjuvholmen
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/seo" className="">
                                Damned Designs
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/content-writing" className="">
                                Botblogs
                            </Link>
                        </li>

                    </ul>
                </section>
                {/* Other sections remain the same */}
            </div>
            <section className="mt-10 text-left container flex justify-between items-center pt-9 text-md ">
                <Link to="/" className='text-xl font-bold'>
                    <h1 className="text-2xl font-semibold">Logo</h1>
                </Link>
                <p>© 2025 New Talent</p>
            </section>
        </footer>
    );
};

export default Footer;
