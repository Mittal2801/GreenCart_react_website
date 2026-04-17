import React from 'react'
import { Data } from '../assets/Asserts'
import { Link } from 'react-router-dom'

const AllProduct = () => {
  return (
    <>
    <div className='mx-10 mt-10 text-2xl font-bold underline'>ALL PRODUCTS</div>
      <div className='grid grid-cols-5'>
        {
            Data.map((item)=>{
                return(
                  
                    <div className='mt-10 mx-10 me-10'>
                      <Link to={`/more/${item.id}/${item.description}`}>
                        <div className='rounded-sm border py-3 w-[230px]'>
                            <img src={item.image} alt=""  />
                            <div className='text-gray-400 ps-5'>{item.description}</div>
                            <div className='font-bold ps-5'>{item.name}</div>
                            <div className='text-green-400 font-bold text-xl mt-2 ps-5 flex'>${item.price}<span className='line-through text-gray-400 ps-3'>${item.before_price}</span>
                            <div className='flex border rounded bg-green-100 ms-10 p-1 px-1 w-[65px]'><img src="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3333_269)'%3e%3cpath%20d='M0.583008%200.583008H2.91634L4.47967%208.39384C4.53302%208.6624%204.67912%208.90365%204.89241%209.07535C5.1057%209.24705%205.37258%209.33825%205.64634%209.33301H11.3163C11.5901%209.33825%2011.857%209.24705%2012.0703%209.07535C12.2836%208.90365%2012.4297%208.6624%2012.483%208.39384L13.4163%203.49967H3.49967M5.83301%2012.2497C5.83301%2012.5718%205.57184%2012.833%205.24967%2012.833C4.92751%2012.833%204.66634%2012.5718%204.66634%2012.2497C4.66634%2011.9275%204.92751%2011.6663%205.24967%2011.6663C5.57184%2011.6663%205.83301%2011.9275%205.83301%2012.2497ZM12.2497%2012.2497C12.2497%2012.5718%2011.9885%2012.833%2011.6663%2012.833C11.3442%2012.833%2011.083%2012.5718%2011.083%2012.2497C11.083%2011.9275%2011.3442%2011.6663%2011.6663%2011.6663C11.9885%2011.6663%2012.2497%2011.9275%2012.2497%2012.2497Z'%20stroke='%234FBF8B'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3333_269'%3e%3crect%20width='14'%20height='14'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" /><span className='font-medium text-[16px] ps-1'>Add</span></div></div>
                        </div>
                      </Link>
                    </div>   
                )
            })
        }
      </div>
    </>
  )
}

export default AllProduct
