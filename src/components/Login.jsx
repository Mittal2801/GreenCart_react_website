import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='bg-white shadow-2xl mx-120 mt-10 rounded-sm'>
        <div className='text-green-500 font-bold text-2xl text-center pt-10'>User <span className='text-black'>Login</span></div>
        <form action="">
            <div className='grid grid-rows-2'>
                <label htmlFor="email" className='ps-5'>Email</label>
                <input type="email" className='border mx-5 border-gray-300 rounded-sm p-1' placeholder='type here' />
            </div>
            
            <div className='grid grid-rows-2'>
                <label htmlFor="password" className='ps-5 pt-3'>Password</label>
                <input type="password" className='border mx-5 mt-1 border-gray-300 rounded-sm p-1' placeholder='type here' />
            </div>
            

            <div className='ps-5 pt-3'>Create an account?<Link to={`/register`}><span className='text-green-500'> Click here</span></Link></div>

            <button className='bg-green-500 w-[370px] p-2 rounded-sm ms-5 mt-5 mb-20 text-white font-bold'>Login</button>
        </form>
      </div>
    </>
  )
}

export default Login
