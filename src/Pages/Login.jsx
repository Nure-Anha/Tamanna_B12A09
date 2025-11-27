import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../AuthContext';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

     // Use CONTEXT 
        const {signInWithEmailPass , setUser , signInWithGoogle} = useContext(AuthContext) ;  //obj detructuring

        const [errorUI , setErrorUI] = useState('') ; 
        const [success , setSuccess] = useState(false) ;


        const location = useLocation() ;
        console.log("Look at the State:", location) ;
        const navigate = useNavigate() ;

        // for Forget Pass Page
         const [email , setEmail] = useState("") ;


    // handleLoginSubmit
    const handleLoginSubmit = (e) => {
        e.preventDefault() ;
        const emailValue = e.target.email.value ;
        const passValue = e.target.pass.value ;
        console.log("EmailValue and passValue:" , emailValue , passValue) ;
       


        setErrorUI('') ;
        setSuccess(false) ;

        signInWithEmailPass(emailValue , passValue )
        .then(res3 => {
            const signedInUser = res3.user ;
            console.log("signedInUser: ", signedInUser) ;
            setUser(signedInUser) ;
            e.target.reset() ;
            setSuccess(true) ;
            toast.success("Login Successfully") ;
            navigate(location.state ? location.state : '/') ;
        })
        .catch(er => {
            console.log("Error Happened Code :", er.code) ;
            console.log("Error Happened message :", er.message) ;
            setErrorUI(er.message) ;
            toast.error('Something Went Wrong') ;
            
        })
    }


    
    // handleGoogleSignIn
    const handleGoogleSignIn = () => {
         setErrorUI('') ;
         setSuccess(false) ;

        signInWithGoogle() 
        .then(resg => {
            const signedInWithGoogleUser = resg.user ;
            console.log("Google signed in by User :", signedInWithGoogleUser) ;
            setUser(signedInWithGoogleUser) ;
            setSuccess(true) ;
            toast.success("Login Successfully") ;
            // navigate(location.state ? location.state : '/') ;
            setTimeout(() => {
                navigate(location.state ? location.state : '/') ;
            } , 1000)
            
        })
        .catch(errg => {
            console.log("Error G :", errg.code) ;
            console.log("Error G :", errg.message) ;
            setErrorUI(errg.message) ;
            toast.error('Something Went Wrong') ;
        })
    }


    // handleForgetPass
    const navigateFpass = useNavigate() ;
    const handleForgetPass = () => {
        console.log("email that will be pass in forget pass page:" , email )
        navigateFpass(`/forgetpass/${email}`) ;
    }


    // Eye Pass
    const [showPass , setShowPass] = useState(false) ;
    const handleShowPassword = (e) => {
        e.preventDefault() ;
        setShowPass(!showPass) ;
    }



    return (
        <div className='bg-[#f1f6fa]  pb-10 pt-10'>
            <title>Login</title>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col  bg-white w-150 p-10 rounded-2xl shadow-xl">
                    <div>
                        <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLoginSubmit}>
                            <fieldset className="fieldset">
                                
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" onChange={(e) => (setEmail(e.target.value))} value={email}  placeholder="Your Email" />

                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input type={showPass ? "text" : 'password'} name='pass' className="input" placeholder="Your Password" />
                                    <button onClick={handleShowPassword} className="btn btn-xs absolute right-5 top-1.5"> {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>} </button>
                                </div>
                                
                                {/* <div><Link to={"/forgetpass"} state={{email}} className="link link-hover text-blue-600 ">Forgot password?</Link></div> */}
                                <div><a onClick={handleForgetPass} className='link link-hover text-blue-600' href="">Forgot password? <span className='text-blue-600 font-bold'>Click here</span></a></div>

                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        {
                            success && <p className='text-green-700'>Account Registered Successfully</p>
                        }
                        {
                            errorUI && <p className='text-red-700'>{errorUI} </p>
                        }
                        <button onClick={handleGoogleSignIn} className="btn mt-4 text-md text-gray-700"><FcGoogle className='text-xl'></FcGoogle>Login With Google</button>
                        <p className='text-md font-medium text-center'>Don't have an account? <Link className='text-blue-600 font-bold' to={'/register'}>Sign up</Link></p>
                    </div>
                    </div>
                </div>
        </div>
        <ToastContainer></ToastContainer>
    </div>
    );
};

export default Login;