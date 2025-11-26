import { useContext } from 'react';
import { Link } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { auth } from '../FireBase';
import { AuthContext } from '../AuthContext';

const Register = () => {

    // Use CONTEXT 
    const {regWithEmailPass , user} = useContext(AuthContext) ;  //obj detructuring


    // handleRegisterSubmit
    const handleRegisterSubmit = (e) => {
        e.preventDefault() ;

        const nameVall = e.target.name.value ;
        console.log(nameVall) ;

        const emailVall = e.target.email.value ;
        console.log("EmailValll :" ,emailVall) ;

        const photoURLVall = e.target.photoURL.value ;
        console.log("PhotoURLVall :", photoURLVall) ;
        
        const passVall = e.target.pass.value ;
        console.log("PassValll :" , passVall) ;


        // toast.success("Account Registered Successfully") ;
        // e.target.reset() ;


        regWithEmailPass(emailVall , passVall)
        .then(res => {
            const newUser = res.user ;
            console.log("Created a New User :", newUser) ;
            // as there displayName and PhotoURL: Null so need to update users profile cz we need this 
            updateProfile(auth.currentUser, {
                displayName: nameVall, photoURL: photoURLVall
                }).then(() => {
                // Profile updated with name and photo now all is ready!
                // setUser(newUser) ; //Now no need to setUser here — onAuthStateChanged will update automatically
                console.log("User Value Set by authStateChanged's setUser :", user) ; // as i alrdy setUser but the user in console shows null so need to get the user which done in authprov file
                // ...
                }).catch(() => {
                // An error occurred
                // ...
                });
        })
        .catch(err => {
            console.log("Error Happened Code :", err.code) ;
            console.log("Error Happened Message :", err.message) ;
        })
    }

    
    
    return (
        <div className='bg-[#f1f6fa]'>
            <title>Register</title>
            

            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse bg-white p-20 rounded-2xl shadow-xl">
                    <div>
                        <h1 className="text-5xl font-bold mb-5">Sign Up!</h1>
                        <p className='text-gray-500'>KiddoLand - a vibrant and playful online marketplace for kids' toys,  <br /> encouraging families to discover and support local toy sellers. <br /> Users can log in, browse toys, <br /> view detailed info, and leave feedback or ratings for toys they want to buy for their kids.</p>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegisterSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Your Full Name" />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Your Email" />
                                <label className="label">PhotoURL</label>
                                <input type="text" name='photoURL' className="input" placeholder="Enter Your PhotoURL" />
                                <label className="label">Password</label>
                                <input type="password" name='pass' className="input" placeholder="Your Password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <p className='text-md font-medium text-center'>Already have an account? <Link className='text-blue-600 font-bold' to={'/login'}>Log in Now </Link></p>
                    </div>
                    </div>
                </div>
        </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;