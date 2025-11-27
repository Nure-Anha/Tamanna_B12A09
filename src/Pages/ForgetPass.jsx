// import React, { useState } from 'react';
import { useContext } from 'react';
import { useParams} from 'react-router';
import { AuthContext } from '../AuthContext';

const ForgetPass = () => {

    // const location = useLocation() ;
    // const emailFromLoginPage = location.state?.email || "" ;

    // const [email , setEmail] = useState(emailFromLoginPage) ;
    // // const navigate = useNavigate() ;

    // FPemailField
    // const FPemailField = (e) => {
    //     // e.preventDefault() ;
    //     setEmail(e.target.email.value) ;
    //     console.log(e.target.email.value)
    // }

    // Use CONTEXT 
    const {resetPass} = useContext(AuthContext) ;  //obj detructuring
    const {email} = useParams() ;




    // handleResetPassword
    const handleResetPassword = (e) => {
        e.preventDefault() ;
        // navigate("https://mail.google.com/mail/u/0/#inbox") ;
        // window.location.href = "https://mail.google.com";
        const emailForgetPass = e.target.email.value ;
        console.log("emailForgetPass" , emailForgetPass) ;

        resetPass(emailForgetPass) 
        .then(() => {
            // Password reset email sent!
            window.open("https://mail.google.com/mail/u/0/#inbox")
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });

    }
    return (
        <div className='bg-[#f1f6fa] pb-15 pt-15'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-15">
                    <div className="card-body">
                        <form onSubmit={handleResetPassword}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' defaultValue={email} className="input"   />
                                <button className="btn btn-neutral mt-4">Reset Password</button>
                            </fieldset>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default ForgetPass;