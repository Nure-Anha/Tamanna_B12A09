import React, { useEffect, useState } from 'react';
import { getWishList, removeFromLS } from './WishList';
import { toast } from 'react-toastify';

const MyWishlist = () => {

    const [WishListed_Toys , setWishListed_Toys] = useState([]) ;


    useEffect(() => {
        setWishListed_Toys(getWishList()) ;
    } , [])



    // handleREMOVE
    const handleRemove = (toyId) => {
       const updatedList = removeFromLS(toyId) ;
       setWishListed_Toys(updatedList) ;

    }


    return (
        <div className="p-20 bg-[#f1f6fa] ">
      {WishListed_Toys.map((k) => (
        <div className='grid grid-cols-3 mb-10 bg-white rounded-xl p-4 w-250'>
                        
            <div>
                <img className='w-[150px] rounded-2xl ml-5 ' src={k.pictureURL} alt={k.toyName} />
            </div>
            <div className='ml-[-140px] p-2'>
                <p className='text-[#001931] font-medium text-xl'>{k.toyName} </p>

                <div className='flex gap-x-15 mt-5'>
                    <p className='text-green-500 font-semibold flex' ><img className='w-7 h-7' src="/myassets/icon-ratings.png" alt="" />{k.rating}M </p>
                    <p className='text-green-500 font-semibold flex' ><img className='w-7 h-7' src="/public/myassets/quantity.png" alt="" />Qty:{k.availableQuantity}Pcs </p>
                    <p className='text-orange-500 text-lg font-semibold flex' >Price: {k.price}BDT </p>

                </div>  
            </div>

                <button onClick={()=> handleRemove(k.toyId)} className='btn w-30 ml-50 bg-[#00D390] border-0 flex justify-center items-center mt-8'>Remove</button>
        </div> 
      ))}

      {
        WishListed_Toys.length === 0 && <h2 className="text-xl font-bold col-span-3 text-center">
          No items in Wishlist
        </h2>
      }
    </div>
    );
};

export default MyWishlist;
