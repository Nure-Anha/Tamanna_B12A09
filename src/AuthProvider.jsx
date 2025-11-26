import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './FireBase';
import { AuthContext } from './AuthContext';
import { useEffect, useState } from 'react';

 // contextAPI create leave it to another file for getting error
    // export const AuthContext = createContext() ;

    const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    // Create a password-based account
    const regWithEmailPass = (email , password) => {
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In With Google
    const signInWithGoogle = () => {
        return signInWithPopup(auth , googleProvider ) ;
    }


    // after register console e data ashte late hy in the mntime user reload dile data chole jabe so ...
    const [loading , setLoading] = useState(true) ;
    const [user , setUser] = useState(null) ; // user reg er por set korar kaj reg or login page e not here so need to pass these

    // Get the currently signed-in user globally
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (curr_user => {
                setUser(curr_user) ; 
                setLoading(false) ;
        }))
            return ()=> {
                unsubscribe() ; //reload howar por brbr check na kora k off kore dissi
            }
    } , [])


    // Sign in a user with an email address and password
    const signInWithEmailPass = (email ,password) => {
        return signInWithEmailAndPassword(auth, email, password) ;
    }


    // Sign Out
    const signOutUser = () => {
        return signOut(auth) ;
    }



    // **********
    const authData = {regWithEmailPass , user, setUser , signInWithEmailPass , signInWithGoogle , signOutUser , loading ,}

    return <AuthContext.Provider value={authData}>
        {children} 
    </AuthContext.Provider>
};

export default AuthProvider;