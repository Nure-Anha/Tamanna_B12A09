import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { toast, ToastContainer } from 'react-toastify';


const MyProfile = () => {

     // Use CONTEXT 
     const {user , updateProf} = useContext(AuthContext) ;  //obj detructuring



    //  Update Profile
    //  const [nameChange , setNameChange] = useState('') ;
    //  const [photoChange , setPhotoChange] = useState('') ;

    //  useEffect(() => {
    //     if(user) {
    //         setNameChange(user?.displayName || '') ;
    //         setPhotoChange(user?.photoURL || '') ;
    //     }
    //  } , [user])



    // // handleNameInput
    // const handleNameInput = (e) => {
    //     setNameChange(e.target.value) ;
    // }
    // const handlePhotoInput = (e) => {
    //     setPhotoChange(e.target.value) ;
    // }

    //  handleSaveChanges
    const handleSaveChanges = (e) => {
        e.preventDefault() ;
        const nameV = e.target.name.value ;
        const photoV = e.target.photo.value ;
        console.log("Name and Photo :", nameV , photoV) ;


        updateProf(nameV , photoV) 
        .then(updateRes => {
            console.log("Profile updated successfully!", updateRes) ;
            // toast.success() ;
            toast.success("Profile updated successfully!")
        })
        .catch(upd_err => {
            console.error("Update failed: ", upd_err);
            // toast.error("Failed to update profile!");
        })
    }


    return (
        <div className='bg-[#f1f6fa] pb-15 pt-15'>
            <title>My Profile</title>
            <div className="avatar flex justify-center items-center ">
                <div className="rounded-full">
                    <img className='object-cover w-34' src={user?.photoURL} />
                </div>
            </div>
            <p className='text-2xl text-black font-bold text-center mt-5'>{user?.displayName} </p>
            <p className='text-lg text-black font-medium text-center mt-2'>{user?.email} </p>


            <div>
                <h1 className="text-4xl font-bold  text-center mt-20">Update Profile</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-5">
                    
                    <div className="card-body">
                        <form onSubmit={handleSaveChanges}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' defaultValue={user?.displayName} className="input" placeholder="Your Full Name" />
                                <label className="label">PhotoURL</label>
                                <input  type="text" name='photo' defaultValue={user?.photoURL} className="input" placeholder="Enter Your PhotoURL" />
                                
                                <button className="btn btn-neutral mt-4">Save Changes</button>
                            </fieldset>
                        </form>
                    </div>
            </div>
            <ToastContainer></ToastContainer>
           
        </div>
    );
};

export default MyProfile;