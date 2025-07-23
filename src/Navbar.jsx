import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // using react-icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/home" },
        { name: "Features", path: "/features" },
        { name: "Pricing", path: "/pricing" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-primary">
                        Shomyn
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative group text-sm font-medium transition-all duration-200 ${isActive ? 'text-primary' : 'text-gray-400'
                                    }`
                                }
                            >
                                {link.name}
                                <span
                                    className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"
                                ></span>
                            </NavLink>

                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col px-4 py-2 space-y-2">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-sm font-medium hover:text-primary transition ${isActive ? 'text-primary' : 'text-gray-700'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
