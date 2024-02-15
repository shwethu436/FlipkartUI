import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
   
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

<div className="flex items-center space-x-4 text-white ">

          {/* Login dropdown */}
          <div className="relative p-3">
            <button onClick={toggleLoginDropdown} className="hover:text-gray-300 flex items-center">
            <Link to="/login" className="hover:text-gray-300 ">
              <i className="fas fa-user p-2"></i>Login
              <i className="fas fa-caret-down ml-1"></i>
            </Link>
            </button>

            {isLoginDropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-64 bg-white border rounded-lg shadow-xl z-10 p-2">
               <Link to="/customer/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
               <span>New Customer? </span>
               <span className="ml-4"></span>
              <button className="text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-md">Signup</button>
               </Link>
               <Link to="/profile" className=" text-gray-800 hover:bg-gray-200 flex items-center">
                  <i className="fas fa-user-circle mr-2"></i>My Profile
                </Link>
                <Link to="/orders" className=" text-gray-800 hover:bg-gray-200 flex items-center">
                  <i className="fas fa-shopping-bag mr-2"></i>Orders
                </Link>
                <Link to="/wishlist" className=" text-gray-800 hover:bg-gray-200 flex items-center">
                  <i className="fas fa-heart mr-2"></i>Wishlist
                </Link>
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


