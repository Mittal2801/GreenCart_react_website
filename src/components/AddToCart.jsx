import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContexct'
import { GiCancel } from "react-icons/gi";
import { Link } from 'react-router-dom';


const AddToCart = () => {
  const { cart,itemDelete,increaseQTY,decreaseQTY } = useContext(UserContext);
  console.log(cart);

  let totalPrice = 0

    cart.map((p)=>{
        totalPrice += p.price*p.quantity
    })



  return cart.length > 0 ? (
    <>
      <div className='mx-30 mt-10'>
        <div className='font-medium text-4xl text-gray-500'>Cart</div>
        <div className="flex mt-10 gap-10">
          <div className='border w-[70%] py-2'>
            <div className="flex justify-between border-b">
              <p className='w-[80%] px-20'>Product Details</p>
              <p className='w-[10%] text-center'>SubTotal</p>
              <p className='w-[10%] text-center'>Action</p>
            </div>
            {cart.map((items,i)=>{
              return(
                <div className="flex mt-3 border-b" key={items.id}>
                  <div className="flex w-[80%] justify-around items-center">
                    <div className="w-[100px]">
                      <img src={items.image} width="100%" alt="" />
                    </div>
                    <p>{items.name}</p>
                    <p>${items.price}</p>
                    <div className="flex items-center">
                      <button className='border w-10 h-10' onClick={() => {items.quantity > 1 ? decreaseQTY(items.id) : itemDelete(i)}}>-</button>
                      <p className=' w-10 h-10 flex justify-center items-center'>{items.quantity}</p>
                      <button className='border w-10 h-10' onClick={() => increaseQTY(items.id)}>+</button>

                    </div>
                  </div>
                  <p className='w-[10%]  flex items-center justify-center'>{items.price * items.quantity}</p>
                  <p className='w-[10%]  flex items-center justify-center' onClick={()=>itemDelete(i)}><GiCancel /></p>
                </div>
              )
            })}
          </div>
          <div className='bg-gray-200 rounded-sm  w-[30%] ps-10 py-5'>
            <div className='font-bold text-2xl py-5'>Order Summary</div>
            <hr className='me-5'></hr>
            <div className='mt-5 font-semibold'>DELIVERY ADDRESS</div>
            <div className='flex'>
              <div className='my-2 text-gray-500'>No address found</div>
              <div className='ps-15 my-2 text-green-500'>Change</div>
            </div>
            <div className='font-semibold mt-5'>PAYMENT METHOD</div>
            <div>
              <select name="mode" id="" className='border w-[240px] py-2 mt-5 bg-white'>
                <option value="val1">Cash On Delivery</option>
                <option value="val2">Online Payment</option>
              </select>
            </div>
            <hr className='me-5 my-5'></hr>
            <div className='flex'>
              <div className='text-gray-500'>Price</div>
              <div className='ps-40 text-gray-500'>{totalPrice}</div>
            </div>
            <div className='flex my-2'>
              <div className='text-gray-500'>Shipping Fee</div>
              <div className='ps-25 text-green-500'>Free</div>
            </div>
            <div className='flex my-2'>
              <div className='text-gray-500'>Tax (2%)</div>
              <div className='text-gray-500'></div>
            </div>
            <div className='flex my-2 text-gray-500 font-semibold'>
              <div className=''>Total Amount:</div>
              <div className='ps-25'>{totalPrice}</div>
            </div>
            <div>
              <button className='bg-green-500 py-3 w-[230px]'>Place Order</button>
            </div>
          </div>
        </div>

      </div>

    </>
  ): (
    <div className="border h-screen flex flex-col justify-center items-center">
      <p className='font-extrabold text-5xl my-5'>No Cart Data Available</p>
      <button className='border px-10 py-3 rounded-full '><Link to='/allproduct'>Continue Shopping</Link></button>
    </div>
  )
}

export default AddToCart
