import React, { useRef,useState } from 'react'
import { Category, Seller } from '../assets/Asserts'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";

const Home = () => {
  return (
    <>
      <div className='bg-[url(https://greencart-gs.vercel.app/assets/main_banner_bg-BUDbdxCy.png)] h-[500px] bg-cover rounded-sm mx-30 my-10' >
        <div className='text-5xl font-bold w-[500px] pt-20 ps-20'>Freshness You Can Trust, Savings You will Love!</div>
        <div className='flex'>
            <button className='rounded-sm border-none p-3 text-white font-bold bg-green-600 ms-20 my-10 '>Shop Now</button>
            <div className='my-10 mx-10 mt-12 font-bold'>Explore details</div>
        </div>
        </div>
        <div className='mx-30 my-10 text-3xl font-bold'>Categories</div>
        <div className='grid grid-cols-7 mx-30'>
        {
            Category.map((item)=>{
                return(
                   <div className='me-5'>
                    <Link to={`/cat/${item.cat_name}`}>
                        <div className='rounded-sm p-3' style={{backgroundColor: `${item.color}`}}>
                            <img src={item.image} alt="" />
                            <div className='text-center font-medium text-gray-500'>{item.cat_name}</div>
                            
                        </div>
                         </Link>
                   </div> 
                  
                )
            })
        }
        </div>
      
        <div className='mx-30 mt-10 text-3xl font-bold'>Best Sellers</div>
        <div className='flex mx-10'>
            {
                Seller.map((bestseller)=>{
                    return(
                        <div className='mt-10'>
                            <Link to={`/more/${bestseller.id}/${bestseller.description}`}>
                            <div className='rounded-sm text-gray-400 border w-[220px] h-90 mx-5'>
                                <img src={bestseller.image} alt="" />
                                <div className='text-gray-400 ps-5'>{bestseller.description}</div>
                                <div className='font-bold mt-3 ps-5'>{bestseller.name}</div>
                                <div className='text-green-400 font-bold text-xl mt-2 flex ps-5'>${bestseller.price} <span className='line-through text-gray-400'>${bestseller.before_price}
                                </span><div className='flex border rounded bg-green-100 ms-8 p-1 px-1'><CiShoppingCart /><span className='font-medium text-[16px] ps-1'>Add</span></div>
                                </div>
                                
                            </div>
                            </Link>
                        </div>
                    )
                })
            }
            
       
        </div>

        <div className='bg-[url(https://greencart-gs.vercel.app/assets/bottom_banner_image-DdX_9fDq.png)] bg-cover rounded-sm mx-30 h-[600px] my-30'>
            <div className='text-3xl font-bold text-green-700 ps-200 pt-30'>Why We Are the Best?</div>
            <div className='flex py-5'>
                <img src="https://greencart-gs.vercel.app/assets/delivery_truck_icon-1jAFohyB.svg" alt="" className='ps-200'/>   
                <div className='text-xl font-bold ps-3'>Fastest Delivery
                    <div className='font-light text-gray-500 text-sm'>Groceries delivered in under 30 minutes.</div>
                </div>
            </div>
              <div className='flex'>
                <img src="https://greencart-gs.vercel.app/assets/leaf_icon-CSYCE1ol.svg" alt="" className='ps-200'/>   
                <div className='text-xl font-bold ps-3'>Freshness Guaranteed
                    <div className='font-light text-gray-500 text-sm'>Fresh produce straight from the source.</div>
                </div>
            </div>
             <div className='flex py-5'>
                <img src="https://greencart-gs.vercel.app/assets/coin_icon-D_msmGb0.svg" alt="" className='ps-200'/>   
                <div className='text-xl font-bold ps-3'>Affordable Prices
                    <div className='font-light text-gray-500 text-sm'>Quality groceries at unbeatable prices.</div>
                </div>
            </div>
             <div className='flex'>
                <img src="https://greencart-gs.vercel.app/assets/trust_icon-B9jiLsCp.svg" alt="" className='ps-200'/>   
                <div className='text-xl font-bold ps-3'>Trusted by Thousands
                    <div className='font-light text-gray-500 text-sm'>Loved by 10,000+ happy customers.</div>
                </div>
            </div> 
            
            
               
        </div>

        <div className='text-center'>
            <p className='font-bold text-4xl text-gray-700'>Never Miss a Deal!</p>
            <p className='pt-3 text-gray-500'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
            <input type="email" placeholder='Enter your email id' className='border mt-10 w-[500px] rounded-sm p-3'  />
            <button className='bg-green-600 rounded-r-sm p-3 font-medium text-white '>Subscribe</button>
        </div> 

        
        
    </>
  )
}

export default Home
