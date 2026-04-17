import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Data } from '../assets/Asserts'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { UserContext } from '../context/UserContexct';
import toast from 'react-hot-toast'


const SingleProduct = () => {

    const {id, category} = useParams();
    const {addCart} = useContext(UserContext);


    const ProductDetails = Data.find((p) => p.id === parseInt(id))    
 
    const relatedProduct = Data.filter((p)=> p.description === category)
    // console.log(relatedProduct);
    
  

    return (
        <>
            <div className='mx-35 my-10'>
                <Link to='/'>Home </Link><Link to='/allproduct' className='mt-2'>/ Products / </Link> <Link to={`category`}>{ProductDetails.description}</Link> / {ProductDetails.name}
            </div>
            <div className='grid grid-cols-2 ms-30 me-150'>
                <div className='border py-20 mx-5 rounded-sm border-gray-400 me-5'>
                    <img src={ProductDetails.image} alt=""/>
                </div>
                <div className='ms-10'>
                    <div className='text-3xl font-bold'>{ProductDetails.name}</div>
                    <div className='text-green-500 text-xl flex pt-2'><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarOutline /> <span className='text-black ps-2 text-sm'>(4)</span></div>
                    <div className='text-gray-400 line-through mt-7'>MRP : {ProductDetails.before_price}</div>
                    <div className='text-xl font-medium'>MRP : {ProductDetails.price}</div>
                    <div className='text-gray-400'>(inclusive of all taxes)</div>
                    <ul className='list-disc text-black font-normal mt-4'>
                        About Product
                        {
                            ProductDetails.about_product.map((p)=>{
                                return(
                                    <li className='text-gray-400 ms-5'>{p}</li>
                                )
                            })
                        }
                    </ul>
                    <div className='grid grid-cols-2'>
                        <button className='border-none bg-gray-100 rounded-sm p-3 w-[400px] text-gray-600 font-bold my-10' onClick={()=>addCart(ProductDetails)}>Add to Cart</button>
                        <button className='border-none bg-green-400 rounded-sm p-3 w-[400px] text-white font-bold my-10 ms-60'>Buy Now</button>
                    </div>  
                </div>


            </div>
          <div className='text-center text-3xl underline my-10 underline-offset-10'>Related Product</div>
          <div className='grid grid-cols-4 mx-10'>
                    {
                        relatedProduct.map((p)=>{
                            return(
                                 <div className='mt-5 border me-10 border-gray-400 rounded-sm'>
                                        <Link to={`/more/${p.id}/${p.description}`}>
                                            <div className='py-3 w-[230px]'>
                                                <img src={p.image} alt=""  />
                                                <div className='text-gray-400 ps-5'>{p.description}</div>
                                                <div className='font-bold text-xl ps-5'>{p.name}</div>
                                                <div className='text-green-400 font-bold text-xl mt-2 ps-5'>{p.price}<span className='line-through text-gray-400 ps-3'>{p.before_price}</span>
                                                
                                                </div>
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

export default SingleProduct
