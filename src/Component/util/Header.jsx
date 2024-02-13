import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {

    // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    
    <header className="bg-gray-800 py-4 mx-auto" style={{ width: '90%'}} >
    <nav className="container mx-auto flex items-center justify-between" >

     <Link to="/" className="flex items-center text-white">
     <img src="/src/images/flipcartIcon.jpg" alt="logo" className="h-8 " />
          <span className="text-xl font-semibold">Flipkart</span>
     </Link>
  <div>
{/* search bar */}
<input type="text" placeholder='search for products,etc....' className="px-3 py-1 rounded-md border border-gray-500"/>
</div>

{/* Link block */}
<div className="flex items-center space-x-4 text-white">
          {/* Login dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="hover:text-gray-300 flex items-center">
              <i className="fas fa-user"></i>Login
              <i className="fas fa-caret-down ml-1"></i>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-xl z-10">
                
                <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">New Customer?Signup</Link>
              </div>
            )}
          </div>


{/* Become a seller option */}
<Link to="/become-seller" className="hover:text-gray-300">
<i className="fas fa-store"></i>Become a Seller
</Link>

{/* Cart */}
<Link to="/cart" className="hover:text-gray-300">
<i className="fas fa-shopping-cart"></i>Cart
</Link>
</div>
    </nav>
   </header>

  )
}

export default Header


