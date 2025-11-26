import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    // Use CONTEXT 
     const {user , loading} = useContext(AuthContext) ;  //obj detructuring


     console.log(user) ; // alrdy user logged in but refreash dile private route(login) e niye jay 
     if(loading) {
        <p className='text-6xl font-bold'>Loading...........</p>
        
     }

     if(user) {
        return children ; 
     }
     else{
        return <Navigate state={location ?.pathname} to={'/login'}></Navigate>
     }

    
};

export default PrivateRoute;