import React, { useContext } from 'react';
import { Link } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../AuthContext';

const Login = () => {

     // Use CONTEXT 
        const {signInWithEmailPass , setUser} = useContext(AuthContext) ;  //obj detructuring


    // handleLoginSubmit
    const handleLoginSubmit = (e) => {
        e.preventDefault() ;
        const emailValue = e.target.email.value ;
        const passValue = e.target.pass.value ;
        console.log("EmailValue and passValue:" , emailValue , passValue) ;
        // toast.success("Login Successfully") ;
        // e.target.reset() ;



        signInWithEmailPass(emailValue , passValue )
        .then(res3 => {
            const signedInUser = res3.user ;
            console.log("signedInUser: ", signedInUser) ;
            setUser(signedInUser) ;
        })
        .catch(er => {
            console.log("Error Happened Code :", er.code) ;
            console.log("Error Happened message :", er.message) ;
        })
    }



    return (
        <div className='bg-[#f1f6fa]'>
            <title>Login</title>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col  bg-white w-150 p-20 rounded-2xl shadow-xl">
                    <div>
                        <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLoginSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Your Email" />
                                <label className="label">Password</label>
                                <input type="password" name='pass' className="input" placeholder="Your Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
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