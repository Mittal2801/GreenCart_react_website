import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-green-50 mt-30 h-[400px]'>
            <div className='flex px-30'>
                <div className='w-[400px]'>
                    <img src="https://greencart-gs.vercel.app/assets/logo-CMLzTNjw.svg" alt="" className='pt-20'/>
                    <div className='py-5 text-gray-500'>We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</div>
                </div>
                <div className='ms-100'>
                    <ul className='font-bold mt-20'>
                        Quick Links
                        <li className='font-light text-gray-700 pt-5'>Home</li>
                        <li className='font-light text-gray-700'>Best Sellers</li>
                        <li className='font-light text-gray-700'>Offers & Deals</li>
                        <li className='font-light text-gray-700'>Contact Us</li>
                        <li className='font-light text-gray-700'>FAQs</li>
                    </ul>
                </div>

                <div>
                    <ul className='font-bold mt-20 mx-10'>
                        Need help?
                        <li className='font-light text-gray-700 pt-5'>Delivery Information</li>
                        <li className='font-light text-gray-700'>Return & Refund Policy</li>
                        <li className='font-light text-gray-700'>Payment Methods</li>
                        <li className='font-light text-gray-700'>Track your Order</li>
                        <li className='font-light text-gray-700'>Contact Us</li>
                    </ul>
                </div>

                <div>
                    <ul className='font-bold mt-20'>
                        Follow US
                        <li className='font-light text-gray-700 pt-5'>Instagram</li>
                        <li className='font-light text-gray-700'>Twitter</li>
                        <li className='font-light text-gray-700'>Facebook</li>
                        <li className='font-light text-gray-700'>YouTube</li>
                    </ul>
                </div>
                
            </div>
        </div>
        
    </>
  )
}

export default Footer
