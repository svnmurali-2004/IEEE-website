import React, { useState } from 'react';

const NavBar2 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [dropdownMenus, setDropdownMenus] = useState({
        aboutUs: false,
        committees: false,
        conference: false,
    });

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (menu) => {
        setDropdownMenus((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    return (
        <header className="bg-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img alt="IEEE logo" className="h-12" height="50" src="https://storage.googleapis.com/a1aa/image/HE0-O1ZN4fO1Udx0fRs9lZeXDKe1oZ1BwbgkXBkWgGM.jpg" width="50" />
                    <img alt="Chaitanya Bharathi Institute of Technology logo" className="h-12" height="50" src="https://storage.googleapis.com/a1aa/image/xa2zbPYAL4lXOOHFWMsXcC3boLBotEgoN96y5tBHbXQ.jpg" width="200" />
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <a className="text-blue-600 hover:text-blue-800" href="#">HOME</a>
                    <div className="relative dropdown">
                        <a className="text-blue-600 hover:text-blue-800 flex items-center" href="#" onClick={() => toggleDropdown('aboutUs')}>
                            ABOUT US <i className="fas fa-caret-down ml-1"></i>
                        </a>
                        {dropdownMenus.aboutUs && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg dropdown-menu">
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">CBIT</a>
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Dept of IT</a>
                            </div>
                        )}
                    </div>
                    <div className="relative dropdown">
                        <a className="text-blue-600 hover:text-blue-800 flex items-center" href="#" onClick={() => toggleDropdown('committees')}>
                            COMMITTEES <i className="fas fa-caret-down ml-1"></i>
                        </a>
                        {dropdownMenus.committees && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg dropdown-menu">
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Advisory Board</a>
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Program and Organizing Committee</a>
                            </div>
                        )}
                    </div>
                    <a className="text-blue-600 hover:text-blue-800" href="#">REGISTER</a>
                    <div className="relative dropdown">
                        <a className="text-blue-600 hover:text-blue-800 flex items-center" href="#" onClick={() => toggleDropdown('conference')}>
                            CONFERENCE <i className="fas fa-caret-down ml-1"></i>
                        </a>
                        {dropdownMenus.conference && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg dropdown-menu">
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Program details</a>
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Travel & Accomodation</a>
                            </div>
                        )}
                    </div>
                    <a className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full hover:from-purple-500 hover:to-pink-600" href="#">Submit Paper</a>
                </nav>
                <div className="md:hidden">
                    <button id="menu-button" className="text-blue-600 focus:outline-none" onClick={toggleMobileMenu}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden">
                    <a className="block px-4 py-2 text-blue-600 hover:bg-gray-100" href="#">HOME</a>
                    <div className="relative dropdown">
                        <button className="block px-4 py-2 text-blue-600 hover:bg-gray-100 flex items-center w-full text-left" onClick={() => toggleDropdown('aboutUs')}>
                            ABOUT US <i className="fas fa-caret-down ml-1"></i>
                        </button>
                        {dropdownMenus.aboutUs && (
                            <div className="mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg dropdown-menu">
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">CBIT</a>
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Dept of IT</a>
                            </div>
                        )}
                    </div>
                    <div className="relative dropdown">
                        <button className="block px-4 py-2 text-blue-600 hover:bg-gray-100 flex items-center w-full text-left" onClick={() => toggleDropdown('committees')}>
                            COMMITTEES <i className="fas fa-caret-down ml-1"></i>
                        </button>
                        {dropdownMenus.committees && (
                            <div className="mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg dropdown-menu">
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Advisory Board</a>
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Program and Organizing Committee</a>
                            </div>
                        )}
                    </div>
                    <a className="block px-4 py-2 text-blue-600 hover:bg-gray-100" href="#">REGISTER</a>
                    <div className="relative dropdown">
                        <button className="block px-4 py-2 text-blue-600 hover:bg-gray-100 flex items-center w-full text-left" onClick={() => toggleDropdown('conference')}>
                            CONFERENCE <i className="fas fa-caret-down ml-1"></i>
                        </button>
                        {dropdownMenus.conference && (
                            <div className="mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg dropdown-menu">
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Program details</a>
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Travel & Accomodation</a>
                            </div>
                        )}
                    </div>
                    <a className="block px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full hover:from-purple-500 hover:to-pink-600" href="#">Submit Paper</a>
                </div>
            )}
        </header>
    );
};

export default NavBar2;
