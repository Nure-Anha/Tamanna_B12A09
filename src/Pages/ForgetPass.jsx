import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const ForgetPass = () => {

    const location = useLocation() ;
    const emailFromLoginPage = location.state?.email || "" ;

    const [email , setEmail] = useState(emailFromLoginPage) ;
    // const navigate = useNavigate() ;

    // FPemailField
    // const FPemailField = (e) => {
    //     // e.preventDefault() ;
    //     setEmail(e.target.email.value) ;
    //     console.log(e.target.email.value)
    // }



    // handleResetPassword
    const handleResetPassword = (e) => {
        e.preventDefault() ;
        // navigate("https://mail.google.com/mail/u/0/#inbox") ;
        window.location.href = "https://mail.google.com";
    }
    return (
        <div className='bg-[#f1f6fa] pb-15 pt-15'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-15">
                    <div className="card-body">
                        <form onSubmit={handleResetPassword}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' value={email} className="input"   />
                                <button className="btn btn-neutral mt-4">Reset Password</button>
                            </fieldset>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default ForgetPass;