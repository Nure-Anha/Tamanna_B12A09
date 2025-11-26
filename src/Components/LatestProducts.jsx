import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const LatestProducts = () => {

        // Data Fetching ---> NEW WAY
        const [latestData , setLatestData] = useState([]) ;
        useEffect(() => {
            fetch("/LatestProductsData.json") 
            .then(res => res.json())
            .then(data => setLatestData(data))
            .catch(error => console.log("Error Occured: ", error)) ;
        } , [])
        console.log("Fetched Data for Latest Products Toys : ", latestData) ;


        // handleViewMore
        const navigate = useNavigate() ;

        const handleViewMore = (toy_Id) => {
        navigate(`/toydetails/${toy_Id}`)
    }


    return (
        <div className='ml-20 mr-20 mb-20'>
            <h3 className='text-5xl font-bold text-center mt-20 mb-5'>Latest Products</h3>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 container '>
                {
                    latestData.map(i =>  <div key={i.toyId} className="card bg-base-100 w-full shadow-2xl p-5">
                                <figure>
                                    <img className='h-50 object-cover w-full rounded-2xl' src={i ?.pictureURL} alt="" />
                                </figure>
                                <div className="card-body">
                                    <div className='flex space-x-15 md:space-x-25 lg:space-x-15 xl:space-x-35'>
                                        <div className=' flex gap-x-1.5'><img className='w-7 h-7'  src="/myassets/icon-ratings.png" alt="" /> <p className='mt-2 font-bold text-md'>{i ?.rating}M</p> </div>
                                        
                                        <div className='flex gap-x-1.5'> <img className='w-10 h-10 mt-1 ' src="/myassets/quantity.png" alt="" /> <p className='font-bold text-md mt-1'>Qty:{i ?.availableQuantity}</p> </div>
                                    </div>
                                    <h2 className="card-title mx-auto mt-10">{i.toyName} </h2>
                                    <p className='mx-auto font-bold text-orange-600 text-[16px]'>{i ?.price} BDT </p>
                                    <div className="card-actions justify-center mt-8">
                                        <button onClick={() => handleViewMore(i.toyId)} className="btn btn-primary p-5">View More</button>
                                    </div>
                                </div>
                            </div>)
                }
            </div>
        </div>
    )
        
};

export default LatestProducts;