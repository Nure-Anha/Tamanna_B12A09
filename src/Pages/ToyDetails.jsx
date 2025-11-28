import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { addToLS } from './WishList';

const ToyDetails = () => {


    // Data Fetching ---> NEW WAY
        const [toysData , setToysData] = useState([]) ;
        useEffect(() => {
            fetch("/ToysData.json") 
            .then(res => res.json())
            .then(data => setToysData(data))
            .catch(error => console.log("Error Occured: ", error)) ;
        } , [])
        console.log("Fetched Data for All Toys : ", toysData) ;



        
        // need to get id from URL http://localhost:5173/toydetails/7 which remains in ":id" of main.jsx
        const clickedOne = useParams() ; 
        console.log("Clicked One's Object" , clickedOne) ;  // http://localhost:5173/toydetails/7 -----> {id: '7'}
        console.log("Clicked One's ID", clickedOne.id) ;  
        const clickedToyID = parseInt(clickedOne.id) ;  // str to int type


        const similarID_ToyFound = toysData.find(j => j.toyId === clickedToyID) ;
        console.log(similarID_ToyFound) ;

        if(!similarID_ToyFound) {
            return <p><span className="loading loading-bars loading-xl ml-170"></span></p>
        }



        // handleTryNowSubmit
        const handleTryNowSubmit = (e) => {
            e.preventDefault() ;
            const nameVal = e.target.name.value ;
            const emailVal = e.target.email.value ;
            console.log("NameValue and EmailValue :" , nameVal , emailVal) ;
            toast.success("Form Submitted Successfully") ;
            e.target.reset()
        }


        // handleWishList
        const handleWishList = () => {
            addToLS(similarID_ToyFound) ;

           
        }



    return (
    <div className='bg-[#f1f6fa] '>
        <title>Toy Details</title>
        <div className='flex flex-col space-y-10 xl:space-x-15 xl:space-y-0 lg:flex-row pt-15 pl-10 pr-12 '>
            <div>
                <img className='w-150 rounded-2xl shadow-2xl' src={similarID_ToyFound.pictureURL} alt="" />
            </div>

            <div className='flex flex-col space-y-10 lg:flex-row lg:space-y-0'>
                <div className='text-gray-400 font-medium'>
                    <h3 className='font-bold text-3xl mb-5 text-black'>{similarID_ToyFound.toyName} </h3>
                    <p className='mb-5'>Seller: <span className='text-blue-600'>{similarID_ToyFound.sellerName} </span> </p>
                    <p className='mb-5'>Seller's Email: <span className='text-blue-600'>{similarID_ToyFound.sellerEmail}</span> </p>
                    <p className='mb-5'>Ratings: <span className='text-orange-400' >{similarID_ToyFound.rating}M</span> </p>
                    <p className='mb-5'>Available: <span className='text-green-700'>{similarID_ToyFound.availableQuantity} Pcs Left</span> </p>
                    <p className='mb-5'>SubCategory: <span className='text-black'>{similarID_ToyFound.subCategory}</span> </p>
                    <p className='mb-5'><span className='text-orange-500 text-3xl'>{similarID_ToyFound.price} BDT</span> </p>

                    <p className='font-normal text-gray-300 mb-15'><hr /></p>

                    <p className='xl:w-170 font-normal text-gray-500'>{similarID_ToyFound.description}</p>

                </div>

                <div className="tooltip" data-tip="Add to Wishlist">
                    <button onClick={handleWishList} className="btn btn-circle hover:bg-black hover:text-white" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    </button>
                </div>
            </div>
        </div>
        {/* Form */}
                    <div className="hero min-h-screen pb-100 lg:pb-0 md:pb-0">
                        <div className="hero-content flex-col ">
                            <div className="text-center lg:text-left">
                                <h1 className="text-7xl font-bold mb-8">Try now!</h1>
                            </div>
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <div className="card-body">
                                    <form  onSubmit={handleTryNowSubmit} className='lg:w-78'>
                                        <fieldset className="fieldset">
                                            <label className="label">Name</label>
                                            <input type="text" name='name' className="input" placeholder="Your Name" />
                                            <label className="label">Email</label>
                                            <input type="email" name='email' className="input" placeholder="Your Email" />
                                            <button className="btn btn-neutral mt-4">Try now</button>
                                    </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer></ToastContainer>
    </div>
    );
};

export default ToyDetails;