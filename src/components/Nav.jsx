import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import { UserContext } from '../context/UserContexct';


const Nav = () => {
  const { cart } = useContext(UserContext);
  return (
    <>
      <nav className='flex my-5 mx-30'>
        <img src="https://greencart-gs.vercel.app/assets/logo-CMLzTNjw.svg" alt=""/>
        <div className='pt-2 ms-50 p-1 border rounded-full text-sm  mt-2'>Saller Dashbord</div>
        <Link to='/' className='mx-5 mt-3'>Home</Link>
        <Link to='/allproduct' className='mt-3'>All Product</Link>
        {/* <div className='mx-5 mt-2'>Home</div>
        <div className='mt-2'>All Product</div> */}
        <input type="text" className='border rounded-full ms-10 p-2' placeholder='Search Product'/>
        <Link to='/cart'><div className='ms-10 mt-3 text-2xl'><CiShoppingCart />
         </div></Link>
         <p className='border rounded-3xl bg-red-600 px-2 h-[25px] text-[14px] font-bold text-white'>{cart.length}</p>
        <Link to='/login'><button className='bg-green-600 px-5 py-3 rounded-full mx-5 mt-1 text-white'>Login</button></Link> 
      </nav>
      <hr />
    </>
  )
}

export default Nav
