import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext';

const Navbar = () => {


   // Use CONTEXT 
          const {user , signOutUser} = useContext(AuthContext) ;  //obj detructuring


  // handleLogo
  const navigate = useNavigate() ;
  const handleLogo = () => {
    navigate("/") ;
  }


  // handleLogoutbtn
  const handleLogoutbtn = () => {
      signOutUser()
      .then(() => {
        console.log("Logged Out Successfully") ;
        console.log("Nav User" , user) ;
        
      }).catch((error) => {
        console.log("Logout Error" , error.message) ;
      });
  }

    // Links
    const links = <>
        <li className='font-bold'><NavLink to={"/"}>Home</NavLink></li>
        <li className='font-bold'><NavLink to={"/myprofile"}>My Profile</NavLink></li>
        <li className='font-bold'><NavLink to={"/mywishlist"}>My WishList</NavLink></li>
        </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-6 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <div onClick={handleLogo} className='flex space-x-1 lg:space-x-3'>
      <img className='mt-3 ml-[-15px] lg:mt-0 lg:ml-[-0px] w-6 h-6 lg:w-12 lg:h-12 cursor-pointer rounded-full' src="/myassets/Logo.jpg" alt="" />
      <a className="text-3xl lg:text-5xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2" href=''>KiddoLand</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className='flex space-x-5'><div className='tooltip tooltip-left' data-tip={user.displayName}><img className='w-10 rounded-full cursor-pointer' src={user.photoURL} alt="" /></div> <button onClick={handleLogoutbtn} className='btn w-25 font-bold border-violet-300 hover:bg-blue-700 hover:text-white'>Logout</button> </div>: <Link className="btn w-25 font-bold border-violet-300 hover:bg-blue-700 hover:text-white" to={'/login'}>Login</Link>
    }
  </div>
</div>
    );
};

export default Navbar;